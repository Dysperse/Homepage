"use client";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export const SearchField = ({ searchParams, hasFilters }: any) => {
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);

  return (
    <TextField
      sx={{
        width: "100%",
        maxWidth: hasFilters ? undefined : 400,
        "& *": {
          fontWeight: 500,
        },
        "& .MuiInputBase-root": {
          borderRadius: 99,
        },
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          router.push("/templates?search=" + ref.current?.value);
        }
      }}
      defaultValue={searchParams.search}
      fullWidth={hasFilters}
      placeholder="Search"
      inputRef={ref}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <span className="material-symbols-rounded">search</span>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => {
                router.push("/templates?search=" + ref.current?.value);
              }}
            >
              <span
                style={{ color: "#fff" }}
                className="material-symbols-rounded"
              >
                east
              </span>
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
