import React, { useState, useEffect } from "react";

import { Plus } from "@bigbinary/neeto-icons"

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui/v2";
import { Container, Header } from "neetoui/v2/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import DeleteNote from "./DeleteNote";
import NotesList from "./NotesList";
import NewNotePane from "./Pane/CreateNote";
import Filter from "./Filter";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([]);
  const [showMenu, setShowMenu] = useState(true);

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
      <Filter showMenu={showMenu} />
      <div className="w-full">
        <Header
          title="All Notes"
          searchProps={{
            onChange: e => setSearchTerm(e.target.value),
            value: searchTerm,
            placeholder: "Search Name, Email, Phone Number, Ect.",
          }}
          actionBlock={
            <Button
              onClick={() => setShowNewNotePane(true)}
              label="Add New Note"
              icon={Plus}
            />
          }
          menuBarToggle={() => setShowMenu(!showMenu)}
        />
        {notes.length ? (
          <NotesList setIsDeleteModalOpen={setIsDeleteModalOpen} />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            title="Looks like you don't have any notes!"
            subtitle="Add your notes to send customized emails to them."
            primaryAction={() => setShowNewNotePane(true)}
            primaryActionLabel="Add New Note"
          />
        )}
        <NewNotePane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
          fetchNotes={fetchNotes}
        />
        {isDeleteModalOpen && (
          <DeleteNote
            onClose={setIsDeleteModalOpen}
            isOpen={isDeleteModalOpen}
            title="Delete Note"
            setIsOpen={setIsDeleteModalOpen}
          />
        )}
      </div>
    </>
  );
};

export default Notes;
