import React, { useState } from "react";

import Card from "./Card";
import { CARD_DATA } from "./constants";
import EditNote from "./Pane/EditNote";

export default function NotesList({ setIsDeleteModalOpen }) {
  const [isEditNotePaneOpen, setIsEditNotePaneOpen] = useState(false);
  return (
    <>
      <div className="m-5 w-full notes-table-height">
        {CARD_DATA.map(note => (
          <Card
            note={note}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
            key={note.id}
          />
        ))}
      </div>
      <EditNote
        isEditNotePaneOpen={isEditNotePaneOpen}
        setIsEditNotePaneOpen={setIsEditNotePaneOpen}
      />
    </>
  );
}
