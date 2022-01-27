import React, { useEffect, useState } from 'react';
import { ImageApi } from '../data/ImageApi';
import { IImageItem } from '../data/ImageApi.types';
import './App.scss';
import SearchResult from './SearchResult/SearchResult';
import SearchInput from './SearchInput/SearchInput';
import PixabayLogo from './PixabayLogo/PixabayLogo';

export default function App() {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState<IImageItem[]>([]);

  useEffect(() => {
    if (query === '') return;

    ImageApi.getItems(query).then(response => {
      setItems(response.hits);
    });
  }, [query]);

  return (
    <div className="App">
      <header>
        <SearchInput onChange={(value) => setQuery(value)}/>
        <PixabayLogo />
      </header>
      <SearchResult items={items}/>
    </div>
  );
}
