import React from "react";

import { MenuHorizontal } from "neetoIcons";
import { Avatar, Dropdown, Typography } from "neetoui/v2";
import * as Yup from "yup";

export const CONTACTS_DATA = [
  {
    id: 1,
    name: "Ronald Richards",
    email: "albert@borer.com",
    image: "https://i.pravatar.cc/150?img=4",
    createdAt: "Feb 5, 2021",
    role: "Owner",
  },
  {
    id: 2,
    name: "Jacob Jones",
    email: "albert@borer.com",
    image: "https://i.pravatar.cc/150?img=4",
    createdAt: "Feb 5, 2021",
    role: "Owner",
  },
  {
    id: 3,
    name: "Ronald Richards",
    email: "albert@borer.com",
    image: "https://i.pravatar.cc/150?img=4",
    createdAt: "Feb 5, 2021",
    role: "Owner",
  },
  {
    id: 4,
    name: "Jacob Jones",
    email: "albert@borer.com",
    image: "https://i.pravatar.cc/150?img=4",
    createdAt: "Feb 5, 2021",
    role: "Owner",
  },
  {
    id: 5,
    name: "Jacob Jones",
    email: "albert@borer.com",
    image: "https://i.pravatar.cc/150?img=4",
    createdAt: "Feb 5, 2021",
    role: "Owner",
  },
  {
    id: 6,
    name: "Jacob Jones",
    email: "albert@borer.com",
    image: "https://i.pravatar.cc/150?img=4",
    createdAt: "Feb 5, 2021",
    role: "Owner",
  },
  {
    id: 7,
    name: "Jacob Jones",
    email: "albert@borer.com",
    image: "https://i.pravatar.cc/150?img=4",
    createdAt: "Feb 5, 2021",
    role: "Owner",
  },
  {
    id: 8,
    name: "Jacob Jones",
    email: "albert@borer.com",
    image: "https://i.pravatar.cc/150?img=4",
    createdAt: "Feb 5, 2021",
    role: "Owner",
  },
  {
    id: 9,
    name: "Jacob Jones",
    email: "albert@borer.com",
    image: "https://i.pravatar.cc/150?img=4",
    createdAt: "Feb 5, 2021",
    role: "Owner",
  },
  {
    id: 10,
    name: "Jacob Jones",
    email: "albert@borer.com",
    image: "https://i.pravatar.cc/150?img=4",
    createdAt: "Feb 5, 2021",
    role: "Owner",
  },
  {
    id: 11,
    name: "Jacob Jones",
    email: "albert@borer.com",
    image: "https://i.pravatar.cc/150?img=4",
    createdAt: "Feb 5, 2021",
    role: "Owner",
  },
  {
    id: 12,
    name: "Jacob Jones",
    email: "albert@borer.com",
    image: "https://i.pravatar.cc/150?img=4",
    createdAt: "Feb 5, 2021",
    role: "Owner",
  },
  {
    id: 13,
    name: "Jacob Jones",
    email: "albert@borer.com",
    image: "https://i.pravatar.cc/150?img=4",
    createdAt: "Feb 5, 2021",
    role: "Owner",
  },
  {
    id: 14,
    name: "Jacob Jones",
    email: "albert@borer.com",
    image: "https://i.pravatar.cc/150?img=4",
    createdAt: "Feb 5, 2021",
    role: "Owner",
  },
  {
    id: 15,
    name: "Jacob Jones",
    email: "albert@borer.com",
    image: "https://i.pravatar.cc/150?img=4",
    createdAt: "Feb 5, 2021",
    role: "Owner",
  },
  {
    id: 16,
    name: "Jacob Jones",
    email: "albert@borer.com",
    image: "https://i.pravatar.cc/150?img=4",
    createdAt: "Feb 5, 2021",
    role: "Owner",
  },
  {
    id: 17,
    name: "Jacob Jones",
    email: "albert@borer.com",
    image: "https://i.pravatar.cc/150?img=4",
    createdAt: "Feb 5, 2021",
    role: "Owner",
  },
];

export const ROLES = [
  {
    label: "Owner",
    value: "Owner",
  },
  {
    label: "Guest",
    value: "Guest",
  },
];

export const COLUMN_DATA = [
  {
    title: "NAME & ROLE",
    dataIndex: "name",
    key: "name_role",
    render: (name, record) => (
      <div className="flex items-center justify-start">
        <Avatar size="large" user={{ imageUrl: record.image }} />
        <div className="ml-4">
          <Typography style="h5">{name}</Typography>
          <Typography style="body3">{record.role}</Typography>
        </div>
      </div>
    ),
  },
  {
    title: "EMAIl",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "CREATED AT",
    dataIndex: "createdAt",
    key: "data_index",
  },
  {
    dataIndex: "actions",
    key: "actions",
    render: () => (
      <Dropdown buttonStyle="text" icon={MenuHorizontal}>
        <li>Edit</li>
        <li> Delete</li>
      </Dropdown>
    ),
  },
];

export const FORM_VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last Name is required"),
  role: Yup.object().required("Role is required"),
});

export const FORM_INITIAL_VALUES = {
  email: "",
  first_name: "",
  last_name: "",
  role: "",
};
