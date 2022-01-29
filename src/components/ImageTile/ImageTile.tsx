import React from 'react';
import { IImageTileProps } from './IImageTileProps';
import Card from '@mui/material/Card';
import ImageListItem from '@mui/material/ImageListItem';
import CardActionArea from '@mui/material/CardActionArea';
import './ImageTile.scss';

export default function ImageTile(
  {addCaption = true, alt, height, id, onClick, src, width}: IImageTileProps
) {
  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  }

  const imageItem = (
    <ImageListItem key={id} style={{height, width}}>
      <img
        alt={alt}
        loading="lazy"
        src={src}
        style={{height, width}}
      />
    </ImageListItem>
  );
  
  return addCaption ? (
    <Card className="ImageTile">
      <CardActionArea onClick={addCaption ? handleClick : undefined}>
        <figure>
          {imageItem}
          <figcaption>
            {alt}
          </figcaption>
        </figure>
      </CardActionArea>
    </Card>
  ) : (
    <Card className="ImageTile">
      <figure>
        {imageItem}
      </figure>
    </Card>
  );
}