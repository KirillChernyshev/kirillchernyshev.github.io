import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import React from "react";
import Search from "@mui/icons-material/Search";
import { ISearchInputProps } from "./ISearchInputProps";

export default function SearchInput({onChange}: ISearchInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

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
