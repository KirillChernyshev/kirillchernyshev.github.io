import React, { useEffect, useState } from 'react';
import { ImageApi } from '../data/ImageApi';
import { IImageItem, IImageItemData } from '../data/ImageApi.types';
import './App.scss';
import SearchResult from './SearchResult/SearchResult';
import SearchInput from './SearchInput/SearchInput';
import PixabayLogo from './PixabayLogo/PixabayLogo';
import DetailPanel from './DetailPanel/DetailPanel';
import AppLogo from './AppLogo/AppLogo';
import Greeting from './Greeting/Greeting';
import useMobileDetect from '../hooks/useMobileDetect';

export default function App() {
  const [query, setQuery] = useState(''); // search query
  const [page, setPage] = useState(1); // current request page
  // SearchInput component key for setting new input value
  const [searchInputKey, setSearchInputKey] = useState('');
  // main search data
  const [itemData, setItemData] = useState<IImageItemData>(
    ImageApi.getEmptyImageItemData()
  );
  // search data for DetailPanel
  const [relatedItemData, setRelatedItemData] = useState<IImageItemData>(
    ImageApi.getEmptyImageItemData()
  );
  const [selectedItem, setSelectedItem] = useState<IImageItem | null>(null);
  const isMobile = useMobileDetect();

  /** search images */
  useEffect(() => {
    if (query === '') return;

    ImageApi.getItems(query, page).then(response => {
      if (page > 1) {
        response.hits = itemData.hits.concat(response.hits);
      }
      setItemData(response);
    });
  // disable eslint rule for excluding 'itemData' from dependencies
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, query]);
  
  /** search images for DetailPanel */
  useEffect(() => {
    if (!selectedItem) {
      setRelatedItemData(ImageApi.getEmptyImageItemData());
      return;
    }

    ImageApi.getItems(selectedItem.tags, 1, 9).then(response => {
      setRelatedItemData(response);
    })
  }, [selectedItem]);
  
  const handleDetailPanelClose = () => {
    setSelectedItem(null);
  }

  const handleDetailPanelItemClick = (id: number) => {
    const item = relatedItemData.hits.filter(x => x.id === id)[0];
    setSelectedItem(item);
  };

  const handleMainSeeMoreClick = () => {
    setPage(page + 1);
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
    const item = itemData.hits.filter(x => x.id === id)[0];
    setSelectedItem(item);
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

  const searchResult = query && (!selectedItem || !isMobile) ? (
    <SearchResult
      hasHalfWidth={!!selectedItem}
      isMobile={isMobile}
      itemData={itemData}
      onClick={handleSearchResultClick}
      onSeeMoreClick={handleMainSeeMoreClick}
      style={!!selectedItem ? {width: '50%'} : undefined}
    />
  ) : undefined;

  const greeting = !query ? <Greeting/> : undefined;
  
  const detailPanel = !!selectedItem ? (
    <DetailPanel
      mainItem={selectedItem}
      onCloseClick={handleDetailPanelClose}
      onItemClick={handleDetailPanelItemClick}
      onSeeMoreClick={handleSeeMoreClick}
      relatedItemData={relatedItemData}
    />
  ) : undefined;

  return (
    <div className="App">
      <header>
        <AppLogo/>
        <SearchInput key={searchInputKey} onChange={handleSearchInputChange} query={query}/>
      </header>
      <main>
        {searchResult}
        {detailPanel}
        {greeting}
      </main>
      <footer>
        <PixabayLogo/>
      </footer>
    </div>
  );
}
