import React from 'react';
import {Image, Text, View} from 'react-native';
import Background from '../../components/Background';
import {Track} from '../../types.ts/types';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';


const SongDetailScreen = ({route}) => {
  const navigation = useNavigation();
  const song: Track = route.params.item;
  const ranking = Number(song['@attr'].rank) + 1;

  return (
    <Background>
      <View style={styles.containerBack}>
        <Text style={styles.goback} onPress={() => navigation.goBack()}>Atras</Text>
      </View>
      <View style={styles.container}>
        <Image source={{uri: song.image[3]['#text']}} style={styles.image} />
        <Text style={styles.title}>{song.name}</Text>
        <Text style={styles.subTitle}>{song.artist.name}</Text>
        <View style={styles.containerInfo}>
          <Text style={styles.text}>Top: {ranking}</Text>
          <Text style={styles.text}>Reproducciones: {song.listeners}</Text>
        </View>
      </View>
    </Background>
  );
};

export default SongDetailScreen;
