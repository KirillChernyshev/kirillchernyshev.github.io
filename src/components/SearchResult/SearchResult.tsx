import React, { useEffect, useRef } from 'react';
import './SearchResult.scss';
import ImageList from '@mui/material/ImageList';
import { ISearchResultProps } from './ISearchResultProps';
import ImageTile from '../ImageTile/ImageTile';
import { useGridProps } from '../../hooks/useGridProps';
import Button from '@mui/material/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

/**
 * Show grid of images and 'See more' link
 */
export default function SearchResult({
  gap = 4, hasHalfWidth = true, isMobile = true, itemData, onClick, onSeeMoreClick, ...commonProps
}: ISearchResultProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const minColumnWidth = hasHalfWidth || isMobile ? 175 : 320;
  const [gridProps, setGridProps] = useGridProps(rootRef, minColumnWidth);

  useEffect(() => setGridProps(), [hasHalfWidth, setGridProps]);

  const tiles = itemData.hits.map((item, index) => {
    const width = gridProps ? gridProps.columnWidth - gap : undefined;
    const height = width 
      ? width / item.webformatWidth * item.webformatHeight
      : undefined;
    let src = item.webformatURL;
    if (isMobile) {
      src = item.webformatURL.replace('_640.', '_180.');
    } else if (width && width <= 400) {
      src = item.webformatURL.replace('_640.', '_340.')
    }
      
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

  const seeMoreBtn = itemData.requestedPage < itemData.lastPage ? (
    <div className='SearchResult-seeMore-container'>
      <Button
        className='SearchResult-seeMore'
        onClick={onSeeMoreClick}
      >
        See more
      </Button>
    </div>
  ) : undefined;

  const errorMessage = itemData.error ? (
    <ErrorMessage message={itemData.error}/>
  ) : undefined;
  
  return itemData.hits.length > 0 || !!itemData.error ? (
    <div className='SearchResult' ref={rootRef} {...commonProps}>
      <ImageList
        cols={gridProps?.columns}
        gap={gap}
        variant="masonry"
      >
        {tiles}
      </ImageList>
      {seeMoreBtn}
      {errorMessage}
    </div>
  ) : (
    <div className='SearchResult' ref={rootRef} {...commonProps}>
      <h3>
        <div>
          <div>Oops! There are no matches for your search.</div>
          <div>Please try broadening your search.</div>
        </div>
      </h3>
    </div>
  );
}