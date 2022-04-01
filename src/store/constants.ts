import { LinkItem } from './types';

const categories: LinkItem[] = [
  { text: 'art', link: 'art' },
  { text: 'music', link: 'music' },
  { text: 'photography', link: 'photo' },
  { text: 'utility', link: 'utility' },
  { text: 'videos', link: 'videos' },
  { text: 'domain names', link: 'domain' },
];
const chains = ['ethereum', 'polygon', 'solana'];
const durations = ['last 7 days', 'last 24 hours', 'last 7 days', 'last 30 days'];

export { categories, chains, durations };
