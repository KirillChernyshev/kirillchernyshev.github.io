import React, { useEffect, useRef } from 'react';
import './SearchResult.scss';
import ImageList from '@mui/material/ImageList';
import { ISearchResultProps } from './ISearchResultProps';
import ImageTile from '../ImageTile/ImageTile';
import { useGridProps } from '../../hooks/useGridProps';
import Button from '@mui/material/Button';

export default function SearchResult({
  gap = 4, hasHalfWidth = true, items, onClick, onSeeMoreClick, ...commonProps
}: ISearchResultProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [gridProps, setGridProps] = useGridProps(rootRef, hasHalfWidth ? 200 : 320);

  useEffect(() => setGridProps(), [hasHalfWidth, setGridProps]);

  const tiles = items.map((item, index) => {
    const width = gridProps ? gridProps.columnWidth - gap : undefined;
    const height = width 
      ? width / item.webformatWidth * item.webformatHeight
      : undefined;
    const src = width && width < 400
      ? item.webformatURL.replace('_640.', '_340.')
      : item.webformatURL;
      
    return (
      <ImageTile
        alt={item.tags}
        height={height}
        id={item.id}
        key={`${item.id}_${index}`}
        onClick={onClick}
        src={src}
        width={width}
      />
    );
  });
  
  return (
    <div className='SearchResult' ref={rootRef} {...commonProps}>
      <ImageList
        cols={gridProps?.columns}
        gap={gap}
        variant="masonry"
      >
        {tiles}
      </ImageList>
      <div className='SearchResult--seeMore-container'>
        <Button
          className='SearchResult--seeMore'
          onClick={onSeeMoreClick}
        >
          See more
        </Button>
      </div>
    </div>
  );
}