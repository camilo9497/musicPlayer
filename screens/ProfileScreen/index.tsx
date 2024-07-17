import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import Background from '../../components/Background';
import {styles} from './styles';
import Avatar from '../../components/Avatar';
import CardList from '../../components/CardList';
import useFetch from '../../hooks/useFetch';
import {Songs, Track} from '../../types.ts/types';
import {LatestSongsContext} from '../../context/latestSongsContext';

const NUM_SONGS = 20;
const COUNTRY = 'colombia';
const API_KEY = 'c19c47264b0dfd0973d63aa54cb6788c';
const URL_API = `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${COUNTRY}&api_key=${API_KEY}&format=json&limit=${NUM_SONGS}`;

const ProfileScreen = () => {
  const {data, error, isLoading} = useFetch<Songs>(URL_API);
  const {lastestSongsIds, removeLastesSongs} = useContext(LatestSongsContext);

  const lastestSongs = lastestSongsIds
    .map(id => {
      return data?.track.find(track => track.name + track.artist.name === id);
    })
    .filter(track => track) as Track[];

  const handleDeleteHistory = () => {
    removeLastesSongs();
  };

  return (
    <Background>
      <Text style={styles.title}>Mi perfil</Text>
      <View style={styles.containerAvatar}>
        <Avatar />
      </View>
      <Text style={styles.subTitle}>Últimas canciones reproducidas</Text>
      {lastestSongsIds.length > 1 && (
        <Text style={styles.removeHistory} onPress={handleDeleteHistory}>
          Borrar historial
        </Text>
      )}
      <View style={styles.container}>
        <CardList
          songs={lastestSongs}
          isLoading={isLoading}
          error={error}
          isProfile={true}
        />
      </View>
    </Background>
  );
};

export default ProfileScreen;
