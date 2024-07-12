import React from 'react';
import {Text, View} from 'react-native';
import Background from '../../components/Background';
import {styles} from './styles';
import Avatar from '../../components/Avatar';
import CardList from '../../components/CardList';

const ProfileScreen = () => {
  return (
    <Background>
      <Text style={styles.title}>Mi perfil</Text>
      <View style={styles.containerAvatar}>
        <Avatar />
      </View>
      <Text style={styles.subTitle}>Últimas canciones reproducidas</Text>
      <View style={styles.container}>
        <CardList />
      </View>
    </Background>
  );
};

export default ProfileScreen;
