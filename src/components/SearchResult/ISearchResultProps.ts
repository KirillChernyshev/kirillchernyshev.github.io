import { CommonProps } from "@mui/material/OverridableComponent";
import { IImageItem } from "../../data/ImageApi.types";

export interface ISearchResultProps extends CommonProps {
  /** The gap between items in px. */
  gap?: number;
  hasHalfWidth?: boolean;
  items: IImageItem[];
  onClick: (id: number) => void;
  onSeeMoreClick: () => void;
}