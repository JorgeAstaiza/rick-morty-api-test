import { Info } from './character.interface';
import { Episode } from './episode.interface';

export interface ApiGeneralResponseEpisode {
  info?: Info;
  results?: Array<Episode>;
}
