import React from 'react';
import './SearchResult.scss';
import ImageList from '@mui/material/ImageList';
import { ISearchResultProps } from './ISearchResultProps';
import ImageTile from '../ImageTile/ImageTile';

export default function SearchResult({items, onClick}: ISearchResultProps) {
  return (
    <ImageList className='SearchResult' variant="masonry" cols={3} gap={4}>
      {items.map((item) => (
        <ImageTile
          alt={item.tags}
          height={item.webformatHeight}
          id={item.id}
          onClick={onClick}
          src={item.webformatURL}
          width={item.webformatWidth}
        />
      ))}
    </ImageList>
  );
}