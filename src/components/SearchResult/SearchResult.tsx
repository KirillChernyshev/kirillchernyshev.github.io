import React, { useEffect, useRef } from 'react';
import './SearchResult.scss';
import ImageList from '@mui/material/ImageList';
import { ISearchResultProps } from './ISearchResultProps';
import ImageTile from '../ImageTile/ImageTile';
import { useGridProps } from '../../hooks/useGridProps';

export default function SearchResult({gap = 4, hasHalfWidth = true, items, onClick}: ISearchResultProps) {
  const rootRef = useRef<HTMLUListElement>(null);
  const [gridProps, setGridProps] = useGridProps(rootRef, hasHalfWidth ? 200 : 320);

  useEffect(() => setGridProps(), [hasHalfWidth, setGridProps]);

  const tiles = items.map((item) => {
    const width = gridProps ? gridProps.columnWidth - gap : undefined;
    const height = width 
      ? width / item.webformatWidth * item.webformatHeight
      : undefined;
      
    return (
      <ImageTile
        alt={item.tags}
        height={height}
        id={item.id}
        onClick={onClick}
        src={item.webformatURL}
        width={width}
      />
    );
  });
  
  return (
    <ImageList
      className='SearchResult'
      cols={gridProps?.columns}
      gap={gap}
      ref={rootRef}
      variant="masonry"
    >
      {tiles}
    </ImageList>
  );
}