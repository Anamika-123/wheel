import React, { useState } from "react";

import { Button, Pane, Toastr } from "@bigbinary/neetoui/v2";
import { Input, Select } from "@bigbinary/neetoui/v2/formik";
import { Formik, Form } from "formik";

import { FORM_VALIDATION_SCHEMA, ROLES } from "../constants";

export default function ContactForm({ onClose, initialValues }) {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = async () => {
    try {
      setSubmitted(true);
      onClose();
      Toastr.success("Contact added successfully");
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={FORM_VALIDATION_SCHEMA}
    >
      {({ isSubmitting, handleSubmit }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex flex-grow-0 w-full space-x-4">
              <Input
                label="First Name"
                name="first_name"
                placeholder="Enter First Name"
                required
              />
              <Input
                label="Last Name"
                name="last_name"
                placeholder="Enter Last Name"
                required
              />
            </div>
            <Input
              label="Email Address"
              name="email"
              className="flex flex-grow-0 w-full"
              placeholder="Enter your email address"
              required
            />
            <Select
              label="Role"
              name="role"
              className="flex-grow-0 w-full"
              placeholder="Select Role"
              options={ROLES}
              required
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              type="submit"
              label={"Save Changes"}
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
