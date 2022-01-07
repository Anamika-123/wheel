import React from "react";

import PropTypes from "prop-types";

import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Card = ({ note, setIsDeleteModalOpen }) => {
  return (
    <div className="m-5 p-5 rounded-md neeto-ui-shadow-s">
      <Header note={note} setIsDeleteModalOpen={setIsDeleteModalOpen} />
      <Body note={note} />
      <Footer note={note} />
    </div>
  );
};

Card.prototypes = {
  note: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  setIsDeleteModalOpen: PropTypes.func,
};

export default Card;
