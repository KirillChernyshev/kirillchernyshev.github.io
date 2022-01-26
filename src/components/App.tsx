import React, { useEffect, useState } from 'react';
import { ImageApi } from '../data/ImageApi';
import './App.scss';
import SearchInput from './SearchInput/SearchInput';

export default function App() {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query === '') return console.log('items', []);

    ImageApi.getItems(query).then(response => {
      console.log('items', response.hits);
    });
  }, [query]);

  return (
    <div className="App">
      <SearchInput onChange={(value) => setQuery(value)}/>
    </div>
  );
}
