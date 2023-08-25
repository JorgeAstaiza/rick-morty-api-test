import { Character, Info } from './character.interface';
import { Episode } from './episode.interface';
import { LocationInterface } from './location.interface';

export interface ApiGeneralResponseCharacter {
  info?: Info;
  results?: Array<Character>;
}
