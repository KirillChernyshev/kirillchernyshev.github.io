export interface ISearchInputProps {
  /** Delay in ms to call onChange event handler */
  delay?: number;
  onChange: (value: string) => void;
  /** Default text in input */
  query?: string;
}