import React from 'react';
import './DetailPanel.scss';
import ImageTile from '../ImageTile/ImageTile';
import SearchResult from '../SearchResult/SearchResult';
import { IDetailPanelProps } from './IDetailPanelProps';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export default function DetailPanel({mainItem, onCloseClick, onItemClick, onSeeMoreClick, relatedItems}: IDetailPanelProps) {
  const seeMoreBtn = (
    <Button
      className='DetailPanel--seeMore'
      onClick={onSeeMoreClick}
    >
      See more
    </Button>
  );
  
  return (
    <aside className='DetailPanel'>
      <IconButton aria-label="delete" className='DetailPanel--close' onClick={onCloseClick}>
        <CloseIcon />
      </IconButton>
      <div className='DetailPanel--mainItem'>
        <ImageTile
          addCaption={false}
          alt={mainItem.tags}
          height={mainItem.webformatHeight}
          id={mainItem.id}
          src={mainItem.webformatURL}
          width={mainItem.webformatWidth}
        />
      </div>
      <div className='DetailPanel--desc'>
        <div>
          <span className='DetailPanel--tags'>{mainItem.tags}</span>
          <span className='DetailPanel--user'>by {mainItem.user}</span>
        </div>
        <Link
          className='DetailPanel--visit'
          href={mainItem.pageURL}
          target='_blank'
          title='Open source in new tab'
        >
          Visit
        </Link>
      </div>
      <h3>
        <span>Related Images</span>
        {seeMoreBtn}
      </h3>
      <SearchResult
        items={relatedItems}
        onClick={onItemClick}
        onSeeMoreClick={onSeeMoreClick}
      />
      {seeMoreBtn}
    </aside>
  );
}