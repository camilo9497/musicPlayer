import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {TrackFlatList} from '../../types.ts/types';

interface Props {
  song: TrackFlatList;
}

const CardMusic: React.FC<Props> = ({song}) => {
  const {item} = song;

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.containerImage}>
        <Image style={styles.image} source={{uri: item.image[0]['#text']}} />
      </View>
      <View style={styles.containerInfo}>
        <View>
          <View>
            {/* <Icon /> */}
            <Text style={styles.listeners}>{item.listeners}</Text>
          </View>
          <Text style={styles.songName}>{item.name}</Text>
          <Text style={styles.text}>{item.artist?.name}</Text>
          <Text style={styles.text}>{item.duration}</Text>
        </View>
      </View>
      <View style={styles.containerIconFav}>
        <Text>Icon</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardMusic;
