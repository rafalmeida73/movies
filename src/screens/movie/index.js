import React, { useState, useEffect } from "react";
import {
  View,
  Image
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import YoutubePlayer from "react-native-youtube-iframe";
import Constants from 'expo-constants'
import { Chip } from 'react-native-paper';
import { connect } from 'react-redux';

import ServiceMovies from '../../services/movies'
import * as S from './styles'

const movie = (props) => {
  const navigation = useNavigation();
  const { movieId } = props;
  const [movie, setMovie] = useState({ "production_companies": [] });
  const [video, setVideo] = useState();
  const [genre, setGenre] = useState();

  function HandleGetMovieInfos(id) {
    ServiceMovies.movieInfo(movieId)
      .then((res) => {
        setMovie(res.data);
        setGenre(res.data.genres[0].name)
      })
  }

  function HandleGetMovieVideo(id) {
    ServiceMovies.movieVideo(id)
      .then((res) => {
        setVideo(res.data.results[0].key);
      })
  }

  useEffect(() => {
    setTimeout(function () {
      console.log(props.movieId)
    }, 3000)
    const reload = navigation.addListener("focus", () => {
      HandleGetMovieInfos(movieId)
      HandleGetMovieVideo(movieId)
    });
    return reload
  });

  return (
    <S.Container statusBarHeight={Constants.statusBarHeight}>
      <View>
        <YoutubePlayer
          height={300}
          videoId={video}
        />
      </View>
      <S.Content>
        <S.Title>
          {movie.title} {props.movieId}
        </S.Title>
        <S.Info>
          <S.InfoText>
            <S.Icon size={20} icon="clock-outline" bgColor="transparent" color="#BBBBBB" />
            {movie.runtime} minutos
          </S.InfoText>
          <S.InfoText>
            <S.Icon size={20} icon="star-outline" bgColor="transparent" color="#BBBBBB" />
            {movie.vote_average}
          </S.InfoText>
        </S.Info>

        <S.Line />

        <S.Release>
          <View>
            <S.ReleaseTitle>
              Data de lançamento
            </S.ReleaseTitle>
            <S.ReleaseText>
              {movie.release_date}
            </S.ReleaseText>
          </View>
          <View>
            <S.ReleaseTitle>
              Gênero
            </S.ReleaseTitle>
            <S.ReleaseText>
              <Chip
              >
                {genre}
              </Chip>
            </S.ReleaseText>
          </View>
        </S.Release>

        <S.Line />

        <S.Synopsis>
          <S.SynopsisTitle>
            Sinopse
          </S.SynopsisTitle>
          <S.SynopsisDesc>
            {movie.overview}
          </S.SynopsisDesc>
        </S.Synopsis>

        <S.Production>
          <S.ProductionTitle>
            Produção
          </S.ProductionTitle>
          {movie.production_companies.map(production => {
            return (
              <S.ProductionCard key={production.id}>
                <S.ProductionCardImage
                  source={{
                    uri:
                      `https://image.tmdb.org/t/p/w500/${production.logo_path}`
                  }}
                  style={{ resizeMode: 'stretch', }}
                />
                <S.ProductionName>
                  {production.name}
                </S.ProductionName>
              </S.ProductionCard>
            )
          })}
        </S.Production>
      </S.Content>
    </S.Container>
  );
}

const mapStateProps = state => state;
const mapDispatchToProps = dispatch => ({})
const connectComponent = connect(mapStateProps, mapDispatchToProps)

export default connectComponent(movie);