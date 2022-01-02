import { type } from 'node:os';
import {createContext} from 'react';

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  drations: string;
  url: string;
};

type PlayerContextData = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
};

export const PlayerContext = createContext({} as PlayerContextData);