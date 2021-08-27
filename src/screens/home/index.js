import React, { useState, useEffect } from 'react';
import {
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux'

import * as S from './styles'
import * as Types from '../../store/types'
import ServiceMovies from '../../services/movies'

const Home = (props) => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const [recommendedMovie, setRecommendedMovie] = useState({
    title: ""
  });
  const [popularMovies, setPopularMovies] = useState([]);

  async function handleGetRecommendedMovies() {
    ServiceMovies.recommendedMovieId()
      .then((response) => {
        ServiceMovies.movieInfo(response.data[0].movie.ids.tmdb)
          .then((res) => {
            setRecommendedMovie(res.data)
          })
      })
      .catch((e) => {
        // console.log(e);
        console.log("Falha ao requisitar recomendado")
      });
  }

  function handleGetPopularMovies() {
    ServiceMovies.popularMovies()
      .then((response) => {
        MovieInfo(response.data)
      })
      .catch((e) => {
        // console.log(e);
        console.log("Falha ao requisitar recomendado")
      });
  }

  function MovieInfo(data) {
    let movies = [];
    data.forEach(movie => {
      ServiceMovies.movieInfo(movie.ids.tmdb).then((r) => {
        movies.push(r.data)
      })
    })
    setTimeout(function () {
      setPopularMovies(movies)
    }, 1000)
  }

  const _renderItem = ({ item, index }) => {
    return (
      <S.ImageCarrousel
        source={{ uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}` }}
        imageStyle={{ borderRadius: 30 }}
      >
        <S.MovieVote>
          <S.Icon size={30} icon="star-outline" bgColor="transparent" color="#F7D636" />
          <S.Vote>{item.vote_average}</S.Vote>
        </S.MovieVote>
        <S.CardContentCarrousel
          onPress={() => {
            props.updateMovieId(item.id)
            navigation.navigate("movie")
          }}
        >
          <S.CardTitleCarrousel>
            {((item.title).length > 22) ?
              (((item.title).substring(0, 22 - 3)) + '...') :
              item.title}
          </S.CardTitleCarrousel>
        </S.CardContentCarrousel>
      </S.ImageCarrousel>
    );
  }

  useEffect(() => {
    handleGetRecommendedMovies()
    handleGetPopularMovies()
  }, [])

  return (
    <S.Container>
      {/* Recommended movie */}
      <S.Title>Recomendação de hoje</S.Title>
      <S.ImageCard source={{ uri: `https://image.tmdb.org/t/p/w500/${recommendedMovie.backdrop_path}` }} imageStyle={{ borderRadius: 30 }}>
        <S.CardContent >
          <S.Play
            onPress={() => {
              props.updateMovieId(recommendedMovie.id)
              navigation.navigate("movie")
            }}
          >
            <S.Icon
              size={24}
              icon="play"
              bgColor="#FB7157"
              color="#fff"
            />
          </S.Play>
          <S.CardTitle>
            {((recommendedMovie.title).length > 22) ?
              (((recommendedMovie.title).substring(0, 22 - 3)) + '...') :
              recommendedMovie.title}
          </S.CardTitle>
        </S.CardContent>
      </S.ImageCard>

      {/* Popular Movies */}
      <S.Title>Populares</S.Title>
      <S.CardPopular>
        <Carousel
          ref={(c) => { _carousel = c; }}
          data={popularMovies}
          renderItem={_renderItem}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </S.CardPopular>
    </S.Container>
  );
}

const mapStateProps = state => state;
const mapDispatchToProps = dispatch => ({
  updateMovieId: movieId => dispatch({
    type: Types.UPDATE_MOVIE_ID,
    payload: {
      movieId
    }
  })
})
const connectComponent = connect(mapStateProps, mapDispatchToProps)

export default connectComponent(Home);