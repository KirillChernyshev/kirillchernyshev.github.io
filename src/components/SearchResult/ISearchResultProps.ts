import { IImageItem } from "../../data/ImageApi.types";

export interface ISearchResultProps {
  /** The gap between items in px. */
  gap?: number;
  hasHalfWidth?: boolean;
  items: IImageItem[];
  onClick: (id: number) => void;
}