import * as React from "react";
import { green, pink } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import FolderIcon from "@mui/icons-material/Folder";
import PageviewIcon from "@mui/icons-material/Pageview";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";

const DoneButton = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>
        <DoneIcon />
      </Avatar>
      <Avatar>
        <DeleteIcon />
      </Avatar>
    </Stack>
  );
};

export default DoneButton;
