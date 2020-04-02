import React from 'react';
import Contact from "./Contact.jsx";
import './Chat.css';

function Contacts () {
    const users = [
        {
          name: 'Robert Reyes',
          image: 'https://randomuser.me/api/portraits/men/28.jpg',
          online: false
        },
        {
          name: 'Nellie Caldwell',
          image: 'https://randomuser.me/api/portraits/women/17.jpg',
          online: true
        },
        {
          name: 'Vernon Mason',
          image: 'https://randomuser.me/api/portraits/men/84.jpg',
          online: true
        },
        {
          name: 'Erica Hunt',
          image: 'https://randomuser.me/api/portraits/women/87.jpg',
          online: false
        },
        {
          name: 'Juanita Phillips',
          image: 'https://randomuser.me/api/portraits/women/55.jpg',
          online: true
        }
      ];
      
    return (
        <div>
            {
                users.map(user => <Contact name={user.name} image={user.image} online={user.online}/>)
            }
        </div>
    )
}

export default Contacts;