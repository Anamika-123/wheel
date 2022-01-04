import React from "react";

import { Pane, Typography } from "neetoui/v2";

import Form from "./Form";

import { FORM_INITIAL_VALUES } from "../constants";

export default function NewContact({ isNewContactOpen, setIsNewContactOpen }) {
  const onClose = () => setIsNewContactOpen(false);

  return (
    <Pane isOpen={isNewContactOpen} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Contact
        </Typography>
      </Pane.Header>
      <Form onClose={onClose} initialValues={FORM_INITIAL_VALUES} />
    </Pane>
  );
}
