import React, { useState } from "react";

import { Plus } from "@bigbinary/neeto-icons";
import { Button } from "neetoui/v2";
import { Container, Header } from "neetoui/v2/layouts";

import ContactsList from "./ContactsList";
import NewContact from "./Create/Contact";
import Filter from "./Filter";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isNewContactOpen, setIsNewContactOpen] = useState(false);

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
              onClick={() => setIsNewContactOpen(true)}
            />
          }
          menuBarToggle={() => setIsMenuOpen(!isMenuOpen)}
        />
        <ContactsList />
        <NewContact
          isNewContactOpen={isNewContactOpen}
          setIsNewContactOpen={setIsNewContactOpen}
        />
      </Container>
    </>
  );
};

export default Contacts;
