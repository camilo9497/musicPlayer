import React from 'react';
import {Text, View} from 'react-native';
import Background from '../Background';
import {styles} from './styles';

const Error = () => {
  return (
    <Background>
      <Text style={styles.title}>Top 20 Colombia</Text>
      <View style={styles.containerError}>
        <Text>Opps...se ha presentado un error</Text>
      </View>
    </Background>
  );
};

export default Error;
