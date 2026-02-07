
export interface Movie {
  id: string;
  title: string;
  year: string;
  rating: string;
  duration: string;
  description: string;
  genre: string[];
  imageUrl: string;
  backdropUrl: string;
  isEvent?: boolean;
  type: 'movie' | 'series';
}

export interface RecommendationRequest {
  mood: string;
  preferences: string;
}

export interface RecommendationResponse {
  movies: Array<{
    title: string;
    year: string;
    description: string;
    genre: string;
    matchScore: number;
  }>;
}
