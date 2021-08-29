import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import YoutubePlayer from "react-native-youtube-iframe";
import Constants from 'expo-constants'
import {
  Chip,
  Card,
} from 'react-native-paper';
import { connect } from 'react-redux';
import Carousel from 'react-native-snap-carousel';

import ServiceMovies from '../../services/movies'
import * as S from './styles'

const movie = (props) => {
  const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();
  const { movieId } = props;
  const [movie, setMovie] = useState({ "production_companies": [] });
  const [video, setVideo] = useState();
  const [cast, setCast] = useState([]);
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);

  function HandleGetMovieVideo(id) {
    ServiceMovies.movieVideo(id)
      .then((res) => {
        setVideo(res.data.results[0].key);
      })
  }

  function HandleGetComments(id) {
    ServiceMovies.commentsMovie(id)
      .then((res) => {
        console.log(res.data)
      })
  }

  function HandleGetPeoples(id) {
    ServiceMovies.peopleMovie(id)
      .then((res) => {
        handleGetCast(res.data.cast)
      })
  }

  function handleGetCast(data) {
    let peoples = []

    data.forEach(people => {
      ServiceMovies.peopleInfo(people.person.ids.tmdb).then((r) => {
        peoples.push(r.data)
      })
    })

    setTimeout(function () {
      setCast(peoples)
    }, 2000)
  }

  const _renderItem = ({ item, index }) => {
    return (
      <S.CardContent key={item.id}>
        <Card.Actions>
          <View>
            <S.CardImage
              source={{
                uri:
                  `https://image.tmdb.org/t/p/w500/${item.profile_path}`,
              }}
            />
          </View>
          <View>
            <S.CardText>
              {((item.name).length > 15) ?
                (((item.name).substring(0, 15 - 3)) + '...') :
                item.name}
            </S.CardText>
          </View>
        </Card.Actions>
      </S.CardContent>
    );
  }

  useEffect(() => {
    const reload = navigation.addListener("focus", () => {
      HandleGetMovieVideo(movieId.data.id)
      // HandleGetComments(movieId.ids.slug)
      HandleGetPeoples(movieId.ids.slug)
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
          {movieId.data.title}
        </S.Title>
        <S.Info>
          <S.InfoText>
            <S.Icon size={20} icon="clock-outline" bgColor="transparent" color="#BBBBBB" />
            {movieId.data.runtime} minutos
          </S.InfoText>
          <S.InfoText>
            <S.Icon size={20} icon="star-outline" bgColor="transparent" color="#BBBBBB" />
            {movieId.data.vote_average}
          </S.InfoText>
        </S.Info>

        <S.Line />

        <S.Release>
          <View>
            <S.ReleaseTitle>
              Data de lançamento
            </S.ReleaseTitle>
            <S.ReleaseText>
              {movieId.data.release_date}
            </S.ReleaseText>
          </View>
          <View>
            <S.ReleaseTitle>
              Gênero
            </S.ReleaseTitle>
            <S.ReleaseText>
              <Chip
              >
                {movieId.data.genres[0].name}
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
            {movieId.data.overview}
          </S.SynopsisDesc>
        </S.Synopsis>

        <S.Production>
          <S.ProductionTitle>
            Produção
          </S.ProductionTitle>
          {movieId.data.production_companies.map(production => {
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

        <S.Carrousel>
          <S.CarrouselText>
            Elenco
          </S.CarrouselText>
          <Carousel
            ref={(c) => { _carousel = c; }}
            data={cast}
            renderItem={_renderItem}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </S.Carrousel>

      </S.Content>
    </S.Container>
  );
}

const mapStateProps = state => state;
const mapDispatchToProps = dispatch => ({})
const connectComponent = connect(mapStateProps, mapDispatchToProps)

export default connectComponent(movie);