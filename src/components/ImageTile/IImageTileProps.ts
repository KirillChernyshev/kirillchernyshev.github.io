export interface IImageTileProps {
  alt: string;
  height?: number;
  id: number;
  onClick?: (id: number) => void;
  src: string;
  width?: number;
}