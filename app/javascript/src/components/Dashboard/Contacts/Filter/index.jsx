import React, { useState } from "react";

import { Plus, Search, Settings } from "@bigbinary/neeto-icons";
import { Typography } from "@bigbinary/neetoui/v2";
import { MenuBar } from "@bigbinary/neetoui/v2/layouts";

const Filter = ({ isMenuOpen }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  const [isTagSearchCollapsed, setIsTagSearchCollapsed] = useState(true);

  return (
    <div className="flex">
      <MenuBar showMenu={isMenuOpen} title="Contacts">
        <MenuBar.Block label="All" count={0} active />
        <MenuBar.Block label="Archived" count={0} />
        <MenuBar.Block label="Completed" count={0} />
        <MenuBar.Block label="Phase 2" count={0} />

        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () => setIsSearchCollapsed(!isSearchCollapsed),
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            SEGMENTS
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Search
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
        />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Settings,
            },
            {
              icon: Plus,
            },
            {
              icon: Search,
              onClick: () => setIsTagSearchCollapsed(!isTagSearchCollapsed),
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            TAGS
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Search
          collapse={isTagSearchCollapsed}
          onCollapse={() => setIsTagSearchCollapsed(true)}
        />
      </MenuBar>
    </div>
  );
};
export default Filter;
