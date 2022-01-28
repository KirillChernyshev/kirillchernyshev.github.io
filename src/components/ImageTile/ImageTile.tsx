import React from 'react';
import { IImageTileProps } from './IImageTileProps';
import Card from '@mui/material/Card';
import ImageListItem from '@mui/material/ImageListItem';
import CardActionArea from '@mui/material/CardActionArea';
import './ImageTile.scss';

export default function ImageTile({alt, height, id, onClick, src, width}: IImageTileProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  }
  
  return (
    <Card className="ImageTile">
      <CardActionArea onClick={handleClick}>
        <figure>
          <ImageListItem key={id}>
            <img
              alt={alt}
              loading="lazy"
              src={src}
            />
          </ImageListItem>
          <figcaption>
            {alt}
          </figcaption>
        </figure>
      </CardActionArea>
    </Card>
  );
}