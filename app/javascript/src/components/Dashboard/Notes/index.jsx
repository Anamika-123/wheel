import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Plus } from "neetoIcons";
import { Button, PageLoader } from "neetoui/v2";
import { Container, Header } from "neetoui/v2/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import DeleteNote from "./DeleteNote";
import Filter from "./Filter";
import NotesList from "./NotesList";
import NewNote from "./Pane/CreateNote";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [isNewNotePaneOpen, setIsNewNotePaneOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const { data } = await notesApi.fetch();
      setNotes(data.notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <Filter isMenuOpen={isMenuOpen} />
      <Container>
        <Header
          title="All Notes"
          searchProps={{
            onChange: e => setSearchTerm(e.target.value),
            value: searchTerm,
            placeholder: "Search Name, Email, Phone Number, Ect.",
          }}
          actionBlock={
            <Button
              onClick={() => setIsNewNotePaneOpen(true)}
              label="Add New Note"
              icon={Plus}
            />
          }
          menuBarToggle={() => setIsMenuOpen(!isMenuOpen)}
        />
        {notes.length ? (
          <NotesList setIsDeleteModalOpen={setIsDeleteModalOpen} />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            title="Looks like you don't have any notes!"
            subtitle="Add your notes to send customized emails to them."
            primaryAction={() => setIsNewNotePaneOpen(true)}
            primaryActionLabel="Add New Note"
          />
        )}
        <NewNote
          isNewNotePaneOpen={isNewNotePaneOpen}
          setIsNewNotePaneOpen={setIsNewNotePaneOpen}
          fetchNotes={fetchNotes}
        />
        {isDeleteModalOpen && (
          <DeleteNote
            onClose={() => setIsDeleteModalOpen(!isDeleteModalOpen)}
            isOpen={isDeleteModalOpen}
            title="Delete Note"
            setIsOpen={setIsDeleteModalOpen}
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
