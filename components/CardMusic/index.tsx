import React, {useEffect, useRef} from 'react';
import {Animated, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Track} from '../../types.ts/types';
import {useNavigation} from '@react-navigation/native';
import PlayIcon from '../../icons/playIcon';

interface Props {
  song: Track;
}

const CardMusic: React.FC<Props> = ({song}) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('SongDetailScreen', {song});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.containerImage}>
        <Image style={styles.image} source={{uri: song?.image[0]['#text']}} />
      </View>
      <View style={styles.containerInfo}>
        <View>
          <View>
            <Text style={styles.listeners}>{song?.listeners}</Text>
          </View>
          <Text style={styles.songName}>{song?.name}</Text>
          <Text style={styles.text}>{song?.artist?.name}</Text>
          <Text style={styles.text}>{song?.duration}</Text>
        </View>
      </View>
      <PlayIcon />
    </TouchableOpacity>
  );
};

export default CardMusic;

export const AmimatedCard = ({song, index}) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 250,
      delay: index * 100,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{opacity}}>
      <CardMusic song={song} />
    </Animated.View>
  );
};
