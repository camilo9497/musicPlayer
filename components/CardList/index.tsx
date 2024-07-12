import React from 'react';
import {ScrollView} from 'react-native';
import CardMusic from '../CardMusic';

interface Props {
  data?: any;
}

const CardList: React.FC<Props> = ({data={}}) => {
  return (
    <ScrollView style={{height: '100%'}}>
      <CardMusic />
      <CardMusic />
      <CardMusic />
      <CardMusic />
      <CardMusic />
      <CardMusic />
      <CardMusic />
      <CardMusic />
      <CardMusic />
      <CardMusic />
    </ScrollView>
  );
};

export default CardList;
