import React, { Component } from "react";
import "./Chat.css";
import PropTypes from "prop-types";

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      online: props.online
    }
  }
  
  render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.image} alt="Peter Palmer" />
                <div>
                    <p className="name">{this.props.name}</p>
                    <div onClick={()=>{
                      this.setState({online: true})
                    }} className="status">
                        <div
                            className={
                                this.state.online
                                    ? "status-online"
                                    : "status-offline"
                            }
                        />
                        <p className="status-text">{this.state.online? "online" : "offline"}</p>
                    </div>
                </div>
            </div>
        );
    }
}

Contact.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    online: PropTypes.bool,
};

export default Contact;
