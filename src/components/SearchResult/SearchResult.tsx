import React, { useEffect, useRef } from 'react';
import './SearchResult.scss';
import ImageList from '@mui/material/ImageList';
import { ISearchResultProps } from './ISearchResultProps';
import ImageTile from '../ImageTile/ImageTile';
import { useGridProps } from '../../hooks/useGridProps';

export default function SearchResult({hasHalfWidth = true, items, onClick}: ISearchResultProps) {
  const rootRef = useRef<HTMLUListElement>(null);
  const [gridProps, setGridProps] = useGridProps(rootRef, hasHalfWidth ? 200 : 320);

  useEffect(() => setGridProps, [hasHalfWidth, setGridProps]);
  
  return (
    <ImageList
      className='SearchResult'
      cols={gridProps?.columns}
      gap={4}
      ref={rootRef}
      variant="masonry"
    >
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