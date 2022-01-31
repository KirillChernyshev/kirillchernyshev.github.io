import { CommonProps } from "@mui/material/OverridableComponent";
import { IImageItemData } from "../../data/ImageApi.types";

export interface ISearchResultProps extends CommonProps {
  /** The gap between items in px. */
  gap?: number;
  /** Half width show mode */
  hasHalfWidth?: boolean;
  /** Optimize for mobile */
  isMobile?: boolean;
  itemData: IImageItemData;
  /** Item click handler */
  onClick: (id: number) => void;
  /** 'See more' click handler */
  onSeeMoreClick: () => void;
}