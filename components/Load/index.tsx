import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import Background from '../Background';
import {styles} from './styles';

const Load = () => {
  return (
    <Background>
      <Text style={styles.title}>Top 20 Colombia</Text>
      <View style={styles.containerActivity}>
        <ActivityIndicator size={'large'} color={'white'} />
      </View>
    </Background>
  );
};

export default Load;
