import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './styles';

const Load = () => {
  return (
    <View style={styles.containerActivity}>
      <ActivityIndicator size={'large'} color={'white'} />
    </View>
  );
};

export default Load;
