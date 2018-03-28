import React from 'react';
import Genres from './components/genres';
import genresCategories from './components/genres-categories';

export default function App() {
  return (
    <div>
      <Genres genresCategories={genresCategories} />
    </div>
  );
}
