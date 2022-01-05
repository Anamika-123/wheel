import React from "react";

import { MenuVertical } from "neetoIcons";
import { Dropdown, Typography } from "neetoui/v2";

const Header = ({ note, setIsDeleteModalOpen }) => {
  return (
    <div className="flex justify-between">
      <Typography style="h4">{note.title}</Typography>
      <Dropdown buttonStyle="text" icon={MenuVertical}>
        <li>Edit</li>
        <li onClick={() => setIsDeleteModalOpen(true)}>Delete</li>
      </Dropdown>
    </div>
  );
};
export default Header;
