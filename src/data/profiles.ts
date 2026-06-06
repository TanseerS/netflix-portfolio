import blueImage from '../assets/profiles/blue.png';
import yellowImage from '../assets/profiles/yellow.png';
import redImage from '../assets/profiles/red.png';

export type ProfileId = 'recruiter' | 'developer' | 'stalker';

export interface Profile {
  id: ProfileId;
  name: string;
  image: string;
}

export const profiles: Profile[] = [
  { id: 'recruiter', name: 'recruiter', image: blueImage },
  { id: 'developer', name: 'developer', image: yellowImage },
  { id: 'stalker', name: 'stalker', image: redImage },
];
