import { IImageItem } from "../../data/ImageApi.types";

export interface ISearchResultProps {
  items: IImageItem[];
  onClick: (id: number) => void;
}