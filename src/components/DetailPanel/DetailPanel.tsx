import React from 'react';
import './DetailPanel.scss';
import ImageTile from '../ImageTile/ImageTile';
import SearchResult from '../SearchResult/SearchResult';
import { IDetailPanelProps } from './IDetailPanelProps';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Link from '@mui/material/Link';

export default function DetailPanel({mainItem, onCloseClick, onItemClick, onSeeMoreClick, relatedItems}: IDetailPanelProps) {
  return (
    <aside className='DetailPanel'>
      <IconButton aria-label="delete" className='DetailPanel--close' onClick={onCloseClick}>
        <CloseIcon />
      </IconButton>
      <ImageTile
        alt={mainItem.tags}
        height={mainItem.webformatHeight}
        id={mainItem.id}
        src={mainItem.webformatURL}
        width={mainItem.webformatWidth}
      />
      <h3>Related Images:</h3>
      <SearchResult items={relatedItems} onClick={onItemClick}/>
      <Link onClick={onSeeMoreClick}>See more</Link>
    </aside>
  );
}