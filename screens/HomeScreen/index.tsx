import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import Background from '../../components/Background';
import CardList from '../../components/CardList';
import useFetch from '../../hooks/useFetch';
import {Songs} from '../../types.ts/types';
import Error from '../../components/Error';
import Load from '../../components/Load';

const NUM_SONGS = 20;
const COUNTRY = 'colombia';
const API_KEY = 'c19c47264b0dfd0973d63aa54cb6788c';
const URL_API = `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${COUNTRY}&api_key=${API_KEY}&format=json&limit=${NUM_SONGS}`;

function HomeScreen() {
  const {data, error, isLoading} = useFetch<Songs>(URL_API);

  if (isLoading) {
    return <Load />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Background>
      <Text style={styles.title}>{`Top ${NUM_SONGS} ${COUNTRY}`}</Text>
      <View style={styles.constainerList}>
        {data && <CardList songs={data} />}
      </View>
    </Background>
  );
}

export default HomeScreen;
