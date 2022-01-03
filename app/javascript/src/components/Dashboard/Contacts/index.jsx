import React, { useState, useEffect } from "react";

import { Plus } from "@bigbinary/neeto-icons";

import { Button } from "neetoui/v2";
import { Container, Header } from "neetoui/v2/layouts";
import constants from "./constants"

import ContactsList from "./ContactsList";
import Filter from "./Filter";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const contacts = constants.CONTACTS_DATA;

  return (
    <>
      <Filter isMenuOpen={isMenuOpen} />
      <Container>
        <Header
          title="All Contacts"
          searchProps={{
            onChange: e => setSearchTerm(e.target.value),
            value: searchTerm,
            placeholder: "Search Name, Email, Phone Number, Ect.",
          }}
          actionBlock={
            <Button
              label="Add Contact"
              icon={Plus}
            />
          }
          menuBarToggle={() => setIsMenuOpen(!isMenuOpen)}
        />
        <ContactsList contacts={contacts} />
      </Container>
    </>
  );
};

export default Contacts;
