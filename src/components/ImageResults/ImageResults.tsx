import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { IImageResultsProps } from './IImageResultsProps';

export default function ImageResults({items}: IImageResultsProps) {
  return (
    <ImageList variant="masonry" cols={3} gap={4}>
      {items.map((item) => (
        <ImageListItem key={item.id}>
          <img
            alt={item.tags}
            height={item.webformatHeight}
            loading="lazy"
            src={item.webformatURL}
            width={item.webformatWidth}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}