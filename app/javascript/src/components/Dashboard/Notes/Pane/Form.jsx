import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";

import notesApi from "apis/notes";
import formValidationSchemas from "constants/formValidationSchemas";

import constants from "../constants";

export default function NoteForm({ onClose, refetch, note, isEdit }) {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async values => {
    try {
      setSubmitted(true);
      if (isEdit) {
        await notesApi.update(note.id, values);
      } else {
        await notesApi.create(values);
      }
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={note}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={formValidationSchemas.notesForm}
    >
      {({ isSubmitting, handleSubmit }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              label="Title"
              name="title"
              className="flex-grow-0 w-full"
              placeholder="Enter note title"
              required
            />
            <Input
              label="Description"
              name="description"
              className="flex-grow-0 w-full"
              placeholder="Enter note description"
              required
            />
            <Select
              label="Assigned Contact"
              name="contact"
              className="flex-grow-0 w-full"
              placeholder="Select Role"
              options={constants.CONTACTS_DATA}
              required
            />
            <Select
              label="Tags"
              name="tags"
              className="flex-grow-0 w-full"
              placeholder="Select Tag"
              options={constants.TAGS_DATA}
              isMulti
              required
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              type="submit"
              label={isEdit ? "Update" : "Save Changes"}
              size="large"
              style="primary"
              className="mr-3"
              disabled={isSubmitting}
              loading={isSubmitting}
              onClick={e => {
                e.preventDefault();
                setSubmitted(true);
                handleSubmit();
              }}
            />
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="text"
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
}
