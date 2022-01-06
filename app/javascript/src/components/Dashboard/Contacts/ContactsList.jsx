import React from "react";

import { Table } from "neetoui/v2";

import { CONTACTS_DATA, COLUMN_DATA } from "./constants";

const ContactsList = () => {
  return (
    <Table
      columnData={COLUMN_DATA}
      currentPageNumber={1}
      defaultPageSize={10}
      fixedHeight
      handlePageChange={function noRefCheck() {}}
      rowData={CONTACTS_DATA}
    />
  );
};
export default ContactsList;
