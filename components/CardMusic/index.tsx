import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {TrackFlatList} from '../../types.ts/types';
import {useNavigation} from '@react-navigation/native';
import PlayIcon from '../../icons/playIcon';

interface Props {
  song: TrackFlatList;
}

const CardMusic: React.FC<Props> = ({song}) => {
  const {item} = song;
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('SongDetailScreen', {item});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.containerImage}>
        <Image style={styles.image} source={{uri: item.image[0]['#text']}} />
      </View>
      <View style={styles.containerInfo}>
        <View>
          <View>
            <Text style={styles.listeners}>{item.listeners}</Text>
          </View>
          <Text style={styles.songName}>{item.name}</Text>
          <Text style={styles.text}>{item.artist?.name}</Text>
          <Text style={styles.text}>{item.duration}</Text>
        </View>
      </View>
      <PlayIcon />
    </TouchableOpacity>
  );
};

export default CardMusic;
