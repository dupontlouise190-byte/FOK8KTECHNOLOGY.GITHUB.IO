
import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieGrid from './components/MovieGrid';
import GeminiRecommender from './components/GeminiRecommender';
import MovieDetail from './components/MovieDetail';
import Footer from './components/Footer';
import { ALL_CONTENT, CATEGORIES, FEATURED_MOVIES } from './constants';
import { Movie } from './types';

const Home: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie>(FEATURED_MOVIES[0]);

  const getFilteredContent = (category: any) => {
    if (category.type === 'movie') return ALL_CONTENT.filter(c => c.type === 'movie');
    if (category.type === 'series') return ALL_CONTENT.filter(c => c.type === 'series');
    if (category.genre) return ALL_CONTENT.filter(c => c.genre.includes(category.genre));
    return ALL_CONTENT;
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      <Hero movie={selectedMovie} />
      
      <main className="relative -mt-32 px-4 md:px-12 pb-24 z-10 space-y-12">
        {CATEGORIES.map((category) => (
          <section key={category.id} className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-white/90 drop-shadow-md">{category.name}</h2>
              <button className="group flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-400 transition-all">
                <span>Watch More {category.type === 'series' ? 'Series' : 'Movies'}</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </button>
            </div>
            <MovieGrid 
              movies={getFilteredContent(category)} 
              onSelect={setSelectedMovie}
            />
          </section>
        ))}

        <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl p-8 border border-white/5 backdrop-blur-sm shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-blue-500/50"></div>
              <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em]">AI Curator</span>
              <div className="h-px w-12 bg-blue-500/50"></div>
            </div>
            <h2 className="text-4xl font-extrabold text-center mb-2 tracking-tight">Personalized Discovery</h2>
            <p className="text-center text-gray-400 mb-8 max-w-lg mx-auto">Tell us what you're into, and we'll suggest the next best movie or series for your library.</p>
            <GeminiRecommender />
          </div>
        </section>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#0a0a0a]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
