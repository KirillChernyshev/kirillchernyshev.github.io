import { CommonProps } from "@mui/material/OverridableComponent";
import { IImageItemData } from "../../data/ImageApi.types";

export interface ISearchResultProps extends CommonProps {
  /** The gap between items in px. */
  gap?: number;
  hasHalfWidth?: boolean;
  isMobile?: boolean;
  itemData: IImageItemData;
  onClick: (id: number) => void;
  onSeeMoreClick: () => void;
}