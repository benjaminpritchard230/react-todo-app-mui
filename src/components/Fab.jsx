import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
export default function FloatingActionButtons({
  setOpen,
  setOpenFilter,
  filterText,
  setFilterText,
}) {
  const style = {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "absolute",
  };
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }} style={style}>
      <Fab
        color="primary"
        aria-label="add"
        onClick={() => {
          setOpen(true);
        }}
      >
        <AddIcon />
      </Fab>
      <Fab
        aria-label="filter"
        onClick={() => {
          setOpenFilter(true);
        }}
      >
        <FilterAltIcon />
      </Fab>
      {filterText.length > 0 ? (
        <Fab
          aria-label="clear-filter"
          onClick={() => {
            setFilterText("");
          }}
        >
          <FilterAltOffIcon />
        </Fab>
      ) : null}
    </Box>
  );
}
