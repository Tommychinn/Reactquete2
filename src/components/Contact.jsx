import React from "react";
import "./Chat.css";
import PropTypes from "prop-types";

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.image} alt="Peter Palmer" />
      <div>
        <p className="name">{props.name}</p>
        <div className="status">
          <div className={props.online ? "status-online" : "status-offline"} />
          <p className="status-text">online</p>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  online: PropTypes.bool
};

export default Contact;
