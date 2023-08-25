import { Info } from './character.interface';

export interface LocationInterface {
  id?: number;
  name?: string;
  type?: string;
  dimension?: string;
  residents?: Array<string>;
  url?: string;
  created?: Date;
}

export interface LocationState {
  loading?: boolean;
  info?: Info;
  locations?: Array<LocationInterface>;
  location?: LocationInterface;
  validationErrors?: null;
}
