import InputAdornment from "@mui/material/InputAdornment";
import React, { useEffect, useState } from "react";
import './SearchInput.scss';
import Search from "@mui/icons-material/Search";
import { ISearchInputProps } from "./ISearchInputProps";
import { useDebounce } from "use-debounce";
import OutlinedInput from "@mui/material/OutlinedInput";
import Close from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

export default function SearchInput({delay = 400, onChange, query = ''}: ISearchInputProps) {
  const [text, setText] = useState(query);
  const [debounceValue] = useDebounce(text, delay);

  useEffect(() => {
    onChange(debounceValue);
  }, [debounceValue, onChange]);

  useEffect(() => {
    setText(query);
  }, [query]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleClearClick = () => setText('');

  return (
    <div className="SearchInput">
      <OutlinedInput
        className="SearchInput--control"
        fullWidth
        onChange={handleChange}
        placeholder="Type and search Images"
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleClearClick}>
              <Close />
            </IconButton>
          </InputAdornment>
        }
        value={text}
      />
    </div>
  );
}
