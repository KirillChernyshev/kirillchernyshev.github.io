import { useCallback, useEffect, useState } from 'react';
import { IGridProps } from './useGridProps.types';

/**
 * Get grid props for the object that is used as a container for a grid layout.
 * @param refObj Reference to the object
 * @param minColumnWidth Min column width
 */
export function useGridProps(
  refObj: React.RefObject<HTMLElement>,
  minColumnWidth = 320
): [IGridProps | undefined, () => void] {
  const [gridProps, setGridProps] = useState<IGridProps | undefined>(undefined);
  
  // calculate props
  const calculateGridProps = useCallback(() => {
    if (!refObj.current) return;
    
    const width = refObj.current.offsetWidth;
    const columns = width > 320 ? Math.floor(width / minColumnWidth) : 1;
    const columnWidth = Math.floor(width / columns);

    setGridProps({columns, columnWidth, width});
  }, [minColumnWidth, refObj]);

  // handle an event listener and add first calculation
  useEffect(() => {
    calculateGridProps();

    // add the event listener
    window.addEventListener('resize', calculateGridProps);

    // remove the event listener
    return () => window.removeEventListener('resize', calculateGridProps);
  }, [calculateGridProps]);

  return [gridProps, calculateGridProps];
}