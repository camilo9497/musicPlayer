import React from 'react';
import {FlatList} from 'react-native';
import {AmimatedCard} from '../CardMusic';
import {Songs} from '../../types.ts/types';

interface Props {
  songs: Songs;
}

const CardList: React.FC<Props> = ({songs}) => {
  return (
    <FlatList
      data={songs.track}
      keyExtractor={item => item.mbid}
      renderItem={({item, index}) => <AmimatedCard song={item} index={index} />}
    />
  );
};

export default CardList;
