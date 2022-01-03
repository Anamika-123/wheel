import React from "react";

import { Alert, Toastr } from "neetoui/v2";

const DeleteContact = ({ onClose, isOpen, title, setIsOpen }) => {
  const handleSubmit = () => {
    Toastr.success("Contact has been deleted successfully");
    setIsOpen(false);
  };

  return (
    <Alert
      message="Are you sure you want to delete the contact? This action cannot be undone."
      title={title}
      onClose={onClose}
      onSubmit={handleSubmit}
      isOpen={isOpen}
    />
  );
};

export default DeleteContact;
