import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {styles} from './styles';
import Background from '../../components/Background';
import CardList from '../../components/CardList';
import useFetch from '../../hooks/useFetch';
import {Songs} from '../../types.ts/types';

const NUM_SONGS = 10;
const COUNTRY = 'colombia';
const API_KEY = 'c19c47264b0dfd0973d63aa54cb6788c';
const URL_API = `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${COUNTRY}&api_key=${API_KEY}&format=json&limit=${NUM_SONGS}`;

function HomeScreen() {
  const {data, error, isLoading} = useFetch<Songs>(URL_API);

  if (isLoading) {
    return (
      <Background>
        <Text style={styles.title}>Top 20 Colombia</Text>
        <View style={{height: '100%', marginTop: 40}}>
          <ActivityIndicator size={'large'} color={'white'} />
        </View>
      </Background>
    );
  }

  if (error) {
    return (
      <Background>
        <Text style={styles.title}>Top 20 Colombia</Text>
        <View style={{height: '100%', marginTop: 40}}>
          <Text>Opps...se ha presentado un error</Text>
        </View>
      </Background>
    );
  }

  return (
    <Background>
      <Text style={styles.title}>Top 20 Colombia</Text>
      <View style={styles.constainerList}>
        {data && <CardList songs={data} />}
      </View>
    </Background>
  );
}

export default HomeScreen;
