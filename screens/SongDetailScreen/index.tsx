import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Background from '../../components/Background';
import {Track} from '../../types.ts/types';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import ForwardIcon from '../../icons/forwardIcon';
import BackwardIcons from '../../icons/backwardIcon';
import PauseIcon from '../../icons/pauseIcon';
import PlayIcon from '../../icons/playIcon';

const SongDetailScreen = ({route}) => {
  const navigation = useNavigation();
  const song: Track = route.params.song;
  const ranking = Number(song['@attr'].rank) + 1;
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <Background>
      <View style={styles.containerBack}>
        <Text style={styles.goback} onPress={() => navigation.goBack()}>
          Atras
        </Text>
      </View>
      <View style={styles.container}>
        <Image source={{uri: song.image[3]['#text']}} style={styles.image} />
        <Text style={styles.title}>{song.name}</Text>
        <Text style={styles.subTitle}>{song.artist.name}</Text>
        <View style={styles.containerInfo}>
          <Text style={styles.text}>Top: {ranking}</Text>
          <Text style={styles.text}>Reproducciones: {song.listeners}</Text>
        </View>
        <View style={styles.containerRepr}>
          <View style={styles.containerProgress}>
            <Text style={styles.progress}>___________________________________</Text>
          </View>
          <View style={styles.containerButtons}>
            <TouchableOpacity
              style={{...styles.containerButtonSecondary, paddingRight: 6}}>
              <BackwardIcons />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsPlaying(!isPlaying)}
              style={{
                ...styles.containerButtonPrimary,
                paddingLeft: isPlaying ? 5 : 0,
              }}>
              {isPlaying ? <PlayIcon /> : <PauseIcon />}
            </TouchableOpacity>
            <TouchableOpacity
              style={{...styles.containerButtonSecondary, paddingLeft: 6}}>
              <ForwardIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default SongDetailScreen;
