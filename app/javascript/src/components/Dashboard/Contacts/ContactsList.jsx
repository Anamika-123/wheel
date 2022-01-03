import React from "react";

import { Typography, Table, Avatar, Dropdown } from "@bigbinary/neetoui/v2";

import { MenuHorizontal } from "@bigbinary/neeto-icons";

const ContactsList = (contacts) => {
  return (
    <Table
      columnData={[
        {
          title: "NAME & ROLE",
          dataIndex: "name",
          key: 'name_role',
          render: (name, record) => (
            <div className="flex items-center justify-start" >
              <Avatar size="large" user={{ imageUrl: record.image }} />
              <div className="ml-4">
                <Typography style="h5">{name}</Typography>
                <Typography style="body3">{record.role}</Typography>
              </div>
            </div >
          )
        },
        {
          title: "EMAIl",
          dataIndex: "email",
          key: "email"
        },
        {
          title: "CREATED AT",
          dataIndex: "createdAt",
          key: "data_index"
        },
        {
          dataIndex: "actions",
          key: "actions",
          render: () => (
            <Dropdown buttonStyle="text" icon={MenuHorizontal}>
              <li>Edit</li>
              <li>Delete</li>
            </Dropdown>
          )
        }
      ]}
      currentPageNumber={1}
      defaultPageSize={10}
      fixedHeight
      handlePageChange={function noRefCheck() { }}
      rowData={contacts.contacts}
    />
  )

}
export default ContactsList;