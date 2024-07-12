import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

const CardMusic = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.containerImage}>
        {/* <Image /> */}
      </View>
      <View style={styles.containerInfo}>
        <View>
          <View>
            {/* <Icon /> */}
            <Text style={styles.listeners}>2.8M</Text>
          </View>
          <Text style={styles.songName}>Seven Nation Army</Text>
          <Text style={styles.text}>Radiohead</Text>
          <Text style={styles.text}>239</Text>
        </View>
      </View>
      <View style={styles.containerIconFav}>
        <Text>Icon</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardMusic;
