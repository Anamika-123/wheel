import React from "react";

import { Typography } from "neetoui/v2";

const Body = ({ note }) => {
  return (
    <div>
      <Typography style="body2">{note.description}</Typography>
    </div>
  );
};

export default Body;
