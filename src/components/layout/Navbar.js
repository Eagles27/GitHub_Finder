import React from "react";
import { AiFillGithub } from "react-icons/ai";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <AiFillGithub /> {props.title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "GitHub Finder",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
