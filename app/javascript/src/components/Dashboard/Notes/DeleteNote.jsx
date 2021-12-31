import React, { useState } from "react";


import { Check } from "@bigbinary/neeto-icons"

import { Modal, Toastr, Typography, Button } from "neetoui/v2";

import notesApi from "apis/notes";

const DeleteNote = ({
  onClose,
  isOpen,
  title,
  setIsOpen
}) => {

  const handleSubmit = () => {
    Toastr.success("Note has been deleted successfully");
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <Modal.Header>
        <Typography style="h2">{title}</Typography>
      </Modal.Header>
      <Modal.Body>
        <Typography style="body2" lineHeight="normal">
          {`Are you sure you want to delete the note? This action cannot be undone.`}
        </Typography>
      </Modal.Body>
      <Modal.Footer className="space-x-2">
        <Button
          icon={Check}
          label="Continue"
          onClick={() => handleSubmit()}
          size="large"
        />
        <Button
          style="text"
          label="Cancel"
          onClick={() => setIsOpen(false)}
          size="large"
        />
      </Modal.Footer>
    </Modal >
  );
};

export default DeleteNote;
