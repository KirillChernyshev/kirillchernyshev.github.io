import React, { useEffect, useState } from 'react';
import { ImageApi } from '../data/ImageApi';
import { IImageItem } from '../data/ImageApi.types';
import './App.scss';
import SearchResult from './SearchResult/SearchResult';
import SearchInput from './SearchInput/SearchInput';
import PixabayLogo from './PixabayLogo/PixabayLogo';
import DetailPanel from './DetailPanel/DetailPanel';
import AppLogo from './AppLogo/AppLogo';
import Greeting from './Greeting/Greeting';

export default function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [searchInputKey, setSearchInputKey] = useState('');
  const [items, setItems] = useState<IImageItem[]>([]);
  const [relatedItems, setRelatedItems] = useState<IImageItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<IImageItem | null>(null);

  /** search images */
  useEffect(() => {
    if (query === '') return;

    ImageApi.getItems(query, page).then(response => {
      const newItems = page === 1 ? response.hits 
        : items.concat(response.hits);
      setItems(newItems);
    });
  }, [page, query]);
  
  /** search related images */
  useEffect(() => {
    if (!selectedItem) {
      setRelatedItems([]);
      return;
    }

    ImageApi.getItems(selectedItem.tags, 1, 9).then(response => {
      setRelatedItems(response.hits);
    })
  }, [selectedItem]);
  
  const handleDetailPanelClose = () => {
    setSelectedItem(null);
  }

  const handleRelatedItemClick = (id: number) => {
    const item = relatedItems.filter(x => x.id === id)[0];
    setSelectedItem(item);
  };

  const handleSearchInputChange = (value: string) => {
    if (value !== query) {
      setQuery(value);
      setPage(1);
    }
    if (!value) {
      setSelectedItem(null);
    }
  }

  const handleSearchResultClick = (id: number) => {
    const item = items.filter(x => x.id === id)[0];
    setSelectedItem(item);
  };

  const handleMainSeeMoreClick = () => {
    setPage(page + 1);
  };

  const handleSeeMoreClick = () => {
    if (selectedItem) {
      setQuery(selectedItem.tags);
      setPage(1);
      setSearchInputKey(selectedItem.tags);
      setSelectedItem(null);
      window.scrollTo(0, 0);
    }
  };
  
  const detailPanel = !!selectedItem ? (
    <DetailPanel
      mainItem={selectedItem}
      onCloseClick={handleDetailPanelClose}
      onItemClick={handleRelatedItemClick}
      onSeeMoreClick={handleSeeMoreClick}
      relatedItems={relatedItems}
    />
  ) : undefined;

  return (
    <div className="App">
      <header>
        <AppLogo/>
        <SearchInput key={searchInputKey} onChange={handleSearchInputChange} query={query}/>
      </header>
      <main>
        {query ? (
          <SearchResult
            hasHalfWidth={!!selectedItem}
            items={items}
            onClick={handleSearchResultClick}
            onSeeMoreClick={handleMainSeeMoreClick}
            style={!!selectedItem ? {width: '50%'} : undefined}
          />
        ) 
        : <Greeting/>}
        {detailPanel}
      </main>
      <footer>
        <PixabayLogo/>
      </footer>
    </div>
  );
}
