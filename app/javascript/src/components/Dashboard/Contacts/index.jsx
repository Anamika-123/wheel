import React, { useState } from "react";

import { Plus } from "neetoIcons";
import { Button } from "neetoui/v2";
import { Container, Header } from "neetoui/v2/layouts";

import ContactsList from "./ContactsList";
import NewContact from "./Create";
import DeleteContact from "./DeleteContact";
import Filter from "./Filter";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isNewContactOpen, setIsNewContactOpen] = useState(false);
  const [isDeleteContactOpen, setIsDeleteContactOpen] = useState(false);

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
        {isDeleteContactOpen && (
          <DeleteContact
            onClose={setIsDeleteContactOpen}
            isOpen={isDeleteContactOpen}
            title="Delete Contact"
            setIsOpen={setIsDeleteContactOpen}
          />
        )}
      </Container>
    </>
  );
};

export default Contacts;
