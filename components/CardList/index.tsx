import React from 'react';
import {FlatList} from 'react-native';
import {AmimatedCard} from '../CardMusic';
import {Track} from '../../types.ts/types';

interface Props {
  songs: Track[];
}

const CardList: React.FC<Props> = ({songs}) => {
  return (
    <FlatList
      data={songs}
      keyExtractor={item => item.mbid}
      renderItem={({item, index}) => <AmimatedCard song={item} index={index} />}
    />
  );
};

export default CardList;
