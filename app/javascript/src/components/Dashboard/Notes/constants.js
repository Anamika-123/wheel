import * as Yup from "yup";

export const CARD_DATA = [
  {
    id: 1,
    title: "How to claim the warranty?",
    description:
      "My laptop got shut down suddently. How can I claim the warranty online?",
    tags: ["laptop"],
    imageUrl: "https://i.pravatar.cc/150?img=4",
    createdAt: { date: "Wednesday 10.30 am", timeAgo: "2 hours ago" },
  },
  {
    id: 2,
    title: "How to claim the warranty?",
    description:
      "My laptop got shut down suddently. How can I claim the warranty online?",
    tags: ["laptop"],
    imageUrl: "https://i.pravatar.cc/150?img=4",
    createdAt: { date: "Thursday 12.30 am", timeAgo: "3 hours ago" },
  },
  {
    id: 3,
    title: "How to claim the warranty?",
    description:
      "My laptop got shut down suddently. How can I claim the warranty online?",
    tags: ["laptop"],
    imageUrl: "https://i.pravatar.cc/150?img=4",
    createdAt: { date: "Monday 10.30 am", timeAgo: "4 days ago" },
  },
  {
    id: 4,
    title: "How to claim the warranty?",
    description:
      "My laptop got shut down suddently. How can I claim the warranty online?",
    tags: ["laptop"],
    imageUrl: "https://i.pravatar.cc/150?img=4",
    createdAt: { date: "Friday 12.30 pm", timeAgo: "4 days ago" },
  },
];
export const CONTACTS_DATA = [
  {
    label: "Ronald Richards",
    value: "Ronald Richards",
  },
  {
    label: "Jacob Jones",
    value: "Jacob Jones",
  },
  {
    label: "Ronald Richards",
    value: "Ronald Richards",
  },
  {
    label: "Jacob Jones",
    value: "Jacob Jones",
  },
];
export const TAGS_DATA = [
  {
    label: "Getting Started",
    value: "Getting Started",
  },
  {
    label: "Onboarding",
    value: "Onboarding",
  },
  {
    label: "User Flow",
    value: "User Flow",
  },
];

export const FORM_INITIAL_VALUES = {
  title: "",
  description: "",
  contact: "",
  tags: "",
}

export const FORM_VALIDATION_SCHEMA = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  contact: Yup.object().required("Contact is required"),
  tags: Yup.array().required("Tag is required").nullable(true),
});
