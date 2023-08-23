import { Character, Info } from "./character.interface";

export interface AllCharactersResponse {
  info?: Info;
  results?: Array<Character>
}