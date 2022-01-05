import React, { useState } from "react";


import { Check } from "neetoIcons"

import { Alert, Toastr, Typography, Button } from "neetoui/v2";

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
    <Alert
      message="Are you sure you want to delete the note? This action cannot be undone."
      title={title}
      onClose={onClose}
      onSubmit={handleSubmit}
      isOpen={isOpen}
    />
  );
};

export default DeleteNote;
