import React from 'react';
import {FlatList} from 'react-native';
import {AmimatedCard} from '../CardMusic';
import {Track} from '../../types.ts/types';
import Load from '../Load';
import ErrorComponent from '../Error';

interface Props {
  songs: Track[];
  isLoading: boolean;
  error: boolean | null;
  isProfile?: boolean;
}

const CardList: React.FC<Props> = ({
  songs,
  isLoading,
  error,
  isProfile = false,
}) => {
  if (isLoading) {
    return <Load />;
  }

  if (error) {
    return <ErrorComponent title="Opps...se ha presentado un error" />;
  }

  if (isProfile && songs.length < 1) {
    return <ErrorComponent title="No has escuchado canciones" />;
  }

  return (
    <FlatList
      data={songs}
      keyExtractor={item => item.mbid}
      renderItem={({item, index}) => <AmimatedCard song={item} index={index} />}
    />
  );
};

export default CardList;
