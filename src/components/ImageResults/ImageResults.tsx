import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import React from 'react';
import { IImageResultsProps } from './IImageResultsProps';

export default function ImageResults({items}: IImageResultsProps) {
  return (
    <ImageList variant="masonry" cols={6} gap={8}>
      {items.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={item.previewURL}
            alt={item.tags}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}