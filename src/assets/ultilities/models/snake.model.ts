export type Snake = {
  id: number | undefined;
  owner: string | undefined;
  name: string;
  breederId: string;
  imgUrl: string;
  gender: 'Male' | 'Female' | 'Unknown';
  lastMeal?: string;
  lastNote?: string;
};
