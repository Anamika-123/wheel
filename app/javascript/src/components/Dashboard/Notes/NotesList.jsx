import React, { useState } from "react";

import { MenuVertical, Clock } from "neetoIcons";
import { Container, SubHeader, Footer } from "neetoui/v2/layouts";
import { Avatar, Dropdown, Typography, Tag, Tooltip } from "neetoui/v2";
import constants from "./constants";

import EditNote from "./Pane/EditNote";
import Card from "./Card";

export default function NotesList({ setIsDeleteModalOpen }) {

  const [isEditNotePaneOpen, setIsEditNotePaneOpen] = useState(false);
  return (
    <>
      <div className="m-5 w-full notes-table-height">
        {constants.CARD_DATA.map((note) => (
          <Card note={note} key={note.id} />
        ))}
      </div>
      <EditNote
        isEditNotePaneOpen={isEditNotePaneOpen}
        setIsEditNotePaneOpen={setIsEditNotePaneOpen}
      />
    </>
  );
}
