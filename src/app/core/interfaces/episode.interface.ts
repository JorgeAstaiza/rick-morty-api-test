import { Info } from './character.interface';

export interface Episode {
  id?: number;
  name?: string;
  air_date?: string;
  episode?: string;
  characters?: Array<string>;
  url?: string;
  created?: Date;
}

export interface EpisodeState {
  loading?: boolean;
  info?: Info;
  episodes?: Array<Episode>;
  episode?: Episode;
}
