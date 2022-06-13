import { Feeding } from './feeding.model';
import { Note } from './note.model';
import { Shed } from './shed.model';
import { Weight } from './weight.model';

export type Snake = {
  id: number;
  owner?: string;
  name: string;
  breederId: string;
  imgUrl: string;
  gender: 'Male' | 'Female' | 'Unknown';
  lastMeal?: string;
  lastNote?: string;
  feedings?: Feeding[];
  notes?: Note[];
  sheds?: Shed[];
  weights?: Weight[];
};
