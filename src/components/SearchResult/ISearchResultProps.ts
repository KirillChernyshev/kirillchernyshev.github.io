import { IImageItem } from "../../data/ImageApi.types";

export interface ISearchResultProps {
  hasHalfWidth?: boolean;
  items: IImageItem[];
  onClick: (id: number) => void;
}