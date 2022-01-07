import React from "react";

import { Clock } from "neetoIcons";
import { Avatar, Typography, Tag, Tooltip } from "neetoui/v2";

const Footer = ({ note }) => {
  return (
    <>
      <hr className="my-2" color="text-gray-500" />
      <div className="flex justify-between">
        {note.tags.map(tag => (
          <Tag label={tag} size="small" color="gray" key={tag} />
        ))}
        <div className="flex items-center">
          <Clock color="#1e1e20" size={24} />
          <Tooltip position="bottom-start" content={note.createdAt.date}>
            <Typography style="body3" className="text-gray-600 px-2">
              {note.createdAt.timeAgo}
            </Typography>
          </Tooltip>
          <Avatar
            size="small"
            user={{
              imageUrl: note.imageUrl,
            }}
          />
        </div>
      </div>
    </>
  );
};
export default Footer;
