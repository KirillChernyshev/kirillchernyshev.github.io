import { IImageItem, IImageItemData } from "../../data/ImageApi.types";

export interface IDetailPanelProps {
  /** image on the top of the component */
  mainItem: IImageItem;
  onCloseClick: () => void;
  onItemClick: (id: number) => void;
  onSeeMoreClick: () => void;
  relatedItemData: IImageItemData;
}