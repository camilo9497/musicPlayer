import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useMemo,
} from 'react';
import {Track} from '../types.ts/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  children: ReactNode;
}

interface ContextProps {
  removeLastesSongs: () => void;
  saveLastesSong: (song: Track) => void;
  lastestSongsIds: string[];
}

export const LatestSongsContext = createContext({} as ContextProps);

export const LatestSongsProvider: React.FC<Props> = ({children}) => {
  const [lastestSongsIds, setLatestSongsIds] = useState<string[]>([]);

  useEffect(() => {
    AsyncStorage.getItem('lastestSongs').then(value => {
      setLatestSongsIds(JSON.parse(value ?? '[]'));
    });
  }, []);

  const value = useMemo(() => {
    const saveLastesSong = (song: Track) => {
      const id = song.name + song.artist.name;
      if (!lastestSongsIds.includes(id)) {
        const newValue = [id, ...lastestSongsIds].slice(0, 10);
        setLatestSongsIds(newValue);
        const stringValue = JSON.stringify(newValue);
        AsyncStorage.setItem('lastestSongs', stringValue);
      } else {
        const newValue = [
          id,
          ...lastestSongsIds.filter(trackId => trackId !== id),
        ].slice(0, 10);
        setLatestSongsIds(newValue);
        const stringValue = JSON.stringify(newValue);
        AsyncStorage.setItem('lastestSongs', stringValue);
      }
      // setLatestSongsIds(Array.from(new Set(lastestSongsIds).add(id)));
    };

    const removeLastesSongs = () => {
      AsyncStorage.clear();
      setLatestSongsIds([]);
    };

    return {
      removeLastesSongs,
      saveLastesSong,
      lastestSongsIds,
    };
  }, [lastestSongsIds]);

  return (
    <LatestSongsContext.Provider value={value}>
      {children}
    </LatestSongsContext.Provider>
  );
};
