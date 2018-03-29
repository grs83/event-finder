import React from 'react';
import Genres from './components/genres';
import genresCategories from './components/genres-categories';
import Items from './components/items';

export default function App() {
  return (
    <div>
      <Genres genresCategories={genresCategories} />
      <Items />
    </div>
  );
}
