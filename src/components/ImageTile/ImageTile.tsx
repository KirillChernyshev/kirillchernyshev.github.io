import React from 'react';
import { IImageTileProps } from './IImageTileProps';
import Card from '@mui/material/Card';
import ImageListItem from '@mui/material/ImageListItem';
import CardActionArea from '@mui/material/CardActionArea';
import './ImageTile.scss';

export default function ImageTile({alt, height, id, src, width}: IImageTileProps) {
  return (
    <Card className="ImageTile">
      <CardActionArea>
        <figure>
          <ImageListItem key={id}>
            <img
              alt={alt}
              height={height}
              loading="lazy"
              src={src}
              width={width}
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