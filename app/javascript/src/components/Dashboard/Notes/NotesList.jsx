import React, { useState } from "react";

import { MenuVertical, Clock } from "@bigbinary/neeto-icons";
import { Container, SubHeader, Footer } from "neetoui/v2/layouts";
import { Avatar, Dropdown, Typography, Tag, Tooltip } from "@bigbinary/neetoui/v2";
import { CARD_DATA } from "./constants";

import EditNotePane from "./Pane/EditNote";

export default function NotesList({
  notes = [],
  fetchNotes,
}) {
  const [showEditNote, setShowEditNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  return (
    <>
      <div className="m-5 w-full notes-table-height">
        {CARD_DATA.map((item) => (
          <div className="m-5 p-5 rounded-md neeto-ui-shadow-s" key={item.id}>
            <SubHeader
              className="mb-0"
              leftActionBlock={
                <Typography style="h4">
                  {item.title}
                </Typography>
              }
              rightActionBlock={
                <>
                  <Dropdown buttonStyle="text" icon={MenuVertical}>
                    <li>Edit</li>
                    <li>Delete</li>
                  </Dropdown>
                </>
              }
            />
            <Typography
              style="body2"
            >
              {item.description}
            </Typography>
            <hr className="my-2" color="text-gray-500" />
            <div className="flex justify-between">
              {item.tags.map((tag) => (
                <Tag
                  label={tag}
                  size="small"
                  color="gray"
                />
              ))}
              <div className="flex items-center">
                <Clock color="#1e1e20" size={24} />
                <Tooltip position="bottom-start" content={item.createdAt.date}>
                  <Typography
                    style="body3"
                    className="text-gray-600 px-2"
                  >
                    {item.createdAt.timeAgo}
                  </Typography>
                </Tooltip>
                <Avatar
                  size="small"
                  user={{
                    imageUrl: "https://i.pravatar.cc/150",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <EditNotePane
        showPane={showEditNote}
        setShowPane={setShowEditNote}
        fetchNotes={fetchNotes}
        note={selectedNote}
      />
    </>
  );
}
