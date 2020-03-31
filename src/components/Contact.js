import React from "react";

function NewContact() {
    let online = true;
    return (
        <div className="Contact">
            <img
                src="https://randomuser.me/api/portraits/women/90.jpg
    "
                alt="clavier"
                className="avatar"
            />
            <div className="textContainer">
                <h3 className="name">Marlene Marshall</h3>
                <ul className='status-text'>
                    <li >{online ? "online" : "offline"}</li>
                </ul>
            </div>
        </div>
    );
}

export default NewContact;
