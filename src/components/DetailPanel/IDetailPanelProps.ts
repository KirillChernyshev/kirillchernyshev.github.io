import { IImageItem, IImageItemData } from "../../data/ImageApi.types";

export interface IDetailPanelProps {
  mainItem: IImageItem;
  onCloseClick: () => void;
  onItemClick: (id: number) => void;
  onSeeMoreClick: () => void;
  relatedItemData: IImageItemData;
}