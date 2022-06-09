export type Snake = {
  name: string;
  breederId: string;
  imgUrl: string;
  gender: 'Male' | 'Female' | 'unknown';
  lastMeal?: string;
  lastNote?: string;
};
