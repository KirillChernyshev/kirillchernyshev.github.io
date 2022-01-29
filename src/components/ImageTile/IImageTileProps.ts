export interface IImageTileProps {
  addCaption?: boolean;
  alt: string;
  height?: number;
  id: number;
  onClick?: (id: number) => void;
  src: string;
  width?: number;
}