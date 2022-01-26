import React, { useEffect, useState } from 'react';
import { ImageApi } from '../data/ImageApi';
import { IImageItem } from '../data/ImageApi.types';
import './App.scss';
import ImageResults from './ImageResults/ImageResults';
import SearchInput from './SearchInput/SearchInput';

export default function App() {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState<IImageItem[]>([]);

  useEffect(() => {
    if (query === '') return console.log('items', []);

    ImageApi.getItems(query).then(response => {
      setItems(response.hits);
    });
  }, [query]);

  return (
    <div className="App">
      <SearchInput onChange={(value) => setQuery(value)}/>
      <ImageResults items={items}/>
    </div>
  );
}
