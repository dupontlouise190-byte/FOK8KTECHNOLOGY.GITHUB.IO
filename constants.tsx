
import { Movie } from './types';

export const ALL_CONTENT: Movie[] = [
  {
    id: 'm1',
    title: 'The Stellar Odyssey',
    year: '2024',
    rating: '9.2',
    duration: '2h 45m',
    description: 'A deep space journey across uncharted galaxies to save humanity from the brink of extinction.',
    genre: ['Sci-Fi', 'Adventure'],
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=600',
    backdropUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=2000',
    isEvent: true,
    type: 'movie'
  },
  {
    id: 's1',
    title: 'Cyber Circuit',
    year: '2024',
    rating: '8.9',
    duration: '10 Episodes',
    description: 'In a future ruled by algorithms, a group of rebels fights to reclaim human intuition.',
    genre: ['Cyberpunk', 'Thriller'],
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600',
    backdropUrl: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=2000',
    type: 'series'
  },
  {
    id: 'm2',
    title: 'Neon Nights',
    year: '2024',
    rating: '8.8',
    duration: '1h 55m',
    description: 'An underground racer finds himself caught in a web of corporate espionage.',
    genre: ['Action', 'Thriller'],
    imageUrl: 'https://images.unsplash.com/photo-1542641728-6ca359b085f4?auto=format&fit=crop&q=80&w=600',
    backdropUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=2000',
    type: 'movie'
  },
  {
    id: 's2',
    title: 'Shadow Realm',
    year: '2023',
    rating: '8.5',
    duration: '8 Episodes',
    description: 'Ancient magic resurfaces in modern-day London, threatening the fabric of reality.',
    genre: ['Fantasy', 'Horror'],
    imageUrl: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=600',
    backdropUrl: 'https://images.unsplash.com/photo-1485846234645-a62644ef7467?auto=format&fit=crop&q=80&w=2000',
    type: 'series'
  },
  {
    id: 'm3',
    title: 'Velocity Prime',
    year: '2024',
    rating: '9.0',
    duration: '2h 15m',
    description: 'A heist team uses experimental tech to break into the world\'s most secure vault.',
    genre: ['Action', 'Sci-Fi'],
    imageUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=600',
    backdropUrl: 'https://images.unsplash.com/photo-1493238792040-81564986c782?auto=format&fit=crop&q=80&w=2000',
    type: 'movie'
  },
  {
    id: 's3',
    title: 'The Alchemist',
    year: '2024',
    rating: '8.7',
    duration: '12 Episodes',
    description: 'Tracking the life of a modern-day scientist who discovers the secrets of transmutation.',
    genre: ['Drama', 'Mystery'],
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600',
    backdropUrl: 'https://images.unsplash.com/photo-1581093458791-9f3c3250bb8b?auto=format&fit=crop&q=80&w=2000',
    type: 'series'
  }
];

export const FEATURED_MOVIES = ALL_CONTENT.filter(c => c.isEvent || c.rating > '9.0');

export const CATEGORIES = [
  { id: 'trending', name: 'Trending Now', type: 'all' },
  { id: 'movies', name: 'Epic Movies', type: 'movie' },
  { id: 'series', name: 'Binge-Worthy Series', type: 'series' },
  { id: 'sci-fi', name: 'Sci-Fi Universe', genre: 'Sci-Fi' },
];
