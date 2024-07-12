import React from 'react';
import {FlatList} from 'react-native';
import CardMusic from '../CardMusic';
import {Songs} from '../../types.ts/types';

interface Props {
  songs: Songs;
}

const CardList: React.FC<Props> = ({songs}) => {
  return (
    <FlatList
      data={songs.track}
      keyExtractor={item => item.mbid}
      renderItem={item => <CardMusic song={item} />}
    />
  );
};

export default CardList;
