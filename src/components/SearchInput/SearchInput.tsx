import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import React from "react";
import Search from "@mui/icons-material/Search";

export default function SearchInput() {
  return (
    <>
      <Input
        fullWidth
        id="input-with-icon-adornment"
        placeholder="Type and search photos"
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
      />
    </>
  );
}
