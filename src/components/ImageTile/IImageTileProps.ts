export interface IImageTileProps {
  addCaption?: boolean;
  /** alt attribute in the img tag */
  alt: string;
  /** image height */
  height?: number;
  id: number;
  onClick?: (id: number) => void;
  /** image URL */
  src: string;
  /** image width */
  width?: number;
}