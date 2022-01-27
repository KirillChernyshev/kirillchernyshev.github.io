import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import React, { useEffect, useState } from "react";
import Search from "@mui/icons-material/Search";
import { ISearchInputProps } from "./ISearchInputProps";
import { useDebounce } from "use-debounce";

export default function SearchInput({delay = 400, onChange}: ISearchInputProps) {
  const [text, setText] = useState('');
  const [debounceValue] = useDebounce(text, delay);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    onChange(debounceValue);
  }, [debounceValue, onChange]);

  return (
    <>
      <Input
        fullWidth
        id="input-with-icon-adornment"
        onChange={handleChange}
        placeholder="Type and search Images"
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
      />
    </>
  );
}
