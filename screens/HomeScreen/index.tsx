import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import Background from '../../components/Background';
import CardList from '../../components/CardList';
import useFetch from '../../hooks/useFetch';
import {Songs} from '../../types.ts/types';

const NUM_SONGS = 20;
const COUNTRY = 'colombia';
const API_KEY = 'c19c47264b0dfd0973d63aa54cb6788c';
const URL_API = `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${COUNTRY}&api_key=${API_KEY}&format=json&limit=${NUM_SONGS}`;

function HomeScreen() {
  const {data, isLoading, error} = useFetch<Songs>(URL_API);

  return (
    <Background>
      <Text style={styles.title}>{`Top ${NUM_SONGS} ${COUNTRY}`}</Text>
      <View style={styles.constainerList}>
        <CardList
          songs={data?.track ?? []}
          isLoading={isLoading}
          error={error}
        />
      </View>
    </Background>
  );
}

export default HomeScreen;
