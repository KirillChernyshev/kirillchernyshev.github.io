import React, { useEffect, useState } from 'react';
import { ImageApi } from '../data/ImageApi';
import { IImageItem } from '../data/ImageApi.types';
import './App.scss';
import SearchResult from './SearchResult/SearchResult';
import SearchInput from './SearchInput/SearchInput';
import PixabayLogo from './PixabayLogo/PixabayLogo';
import DetailPanel from './DetailPanel/DetailPanel';

export default function App() {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState<IImageItem[]>([]);
  const [relatedItems, setRelatedItems] = useState<IImageItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<IImageItem | undefined>(undefined);
  
  /** search images */
  useEffect(() => {
    if (query === '') return;

    ImageApi.getItems(query).then(response => {
      setItems(response.hits);
    });
  }, [query]);
  
  /** search related images */
  useEffect(() => {
    if (!selectedItem) {
      setRelatedItems([]);
      return;
    }

    ImageApi.getItems(selectedItem.tags, 9).then(response => {
      setRelatedItems(response.hits);
    })
  }, [selectedItem]);
  
  const handleDetailPanelClose = () => {
    setSelectedItem(undefined);
  }

  const handleRelatedItemClick = (id: number) => {
    const item = relatedItems.filter(x => x.id === id)[0];
    setSelectedItem(item);
  };

  const handleSearchResultClick = (id: number) => {
    const item = items.filter(x => x.id === id)[0];
    setSelectedItem(item);
  };
  
  const detailPanel = selectedItem ? (
    <DetailPanel
      mainItem={selectedItem}
      onCloseClick={handleDetailPanelClose}
      onItemClick={handleRelatedItemClick}
      relatedItems={relatedItems}
    />
  ) : undefined;

  return (
    <div className="App">
      <header>
        <SearchInput onChange={(value) => setQuery(value)}/>
        <PixabayLogo />
      </header>
      <main>
        <SearchResult items={items} onClick={handleSearchResultClick}/>
        {detailPanel}
      </main>
    </div>
  );
}
