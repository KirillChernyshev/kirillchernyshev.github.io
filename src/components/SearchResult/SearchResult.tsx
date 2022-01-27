import React from 'react';
import ImageList from '@mui/material/ImageList';
import { ISearchResultProps } from './ISearchResultProps';
import ImageTile from '../ImageTile/ImageTile';

export default function SearchResult({items}: ISearchResultProps) {
  return (
    <ImageList variant="masonry" cols={3} gap={4}>
      {items.map((item) => (
        <ImageTile
          alt={item.tags}
          height={item.webformatHeight}
          id={item.id}
          src={item.webformatURL}
          width={item.webformatWidth}
        />
      ))}
    </ImageList>
  );
}