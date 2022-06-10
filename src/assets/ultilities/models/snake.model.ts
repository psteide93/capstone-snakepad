export type Snake = {
  owner: string | undefined;
  name: string;
  breederId: string;
  imgUrl: string;
  gender: 'Male' | 'Female' | 'Unknown';
  lastMeal?: string;
  lastNote?: string;
};
