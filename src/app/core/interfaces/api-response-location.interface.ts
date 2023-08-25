import { Info } from './character.interface';
import { LocationInterface } from './location.interface';

export interface ApiGeneralResponseLocation {
  info?: Info;
  results?: Array<LocationInterface>;
}
