import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import React, { useEffect, useState } from "react";
import Search from "@mui/icons-material/Search";
import { ISearchInputProps } from "./ISearchInputProps";
import { useDebounce } from "use-debounce";

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

  return (
    <>
      <Input
        fullWidth
        onChange={handleChange}
        placeholder="Type and search Images"
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
        value={text}
      />
    </>
  );
}
