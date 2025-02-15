import React, { useState } from "react";

import { Plus, Search, Settings } from "neetoIcons";
import { Typography } from "neetoui/v2";
import { MenuBar } from "neetoui/v2/layouts";

const Filter = ({ isMenuOpen }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  const [isTagSearchCollapsed, setIsTagSearchCollapsed] = useState(true);

  return (
    <div className="flex">
      <MenuBar showMenu={isMenuOpen} title="Notes">
        <MenuBar.Block label="All" count={200} active />
        <MenuBar.Block label="Users" count={80} />
        <MenuBar.Block label="Leads" count={60} />
        <MenuBar.Block label="Visitors" count={60} />

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
        <MenuBar.Block label="Europe" count={80} />
        <MenuBar.Block label="Middle-East" count={60} />
        <MenuBar.Block label="Asia" count={60} />
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
        <MenuBar.Block label="Sales " count={80} />
        <MenuBar.Block label="Finance" count={60} />
        <MenuBar.Block label="User Experience" count={60} />
      </MenuBar>
    </div>
  )
}
export default Filter;