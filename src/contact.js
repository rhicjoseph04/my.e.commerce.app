import React, { useState } from 'react';
import './contact.css';
import { useAuth0 } from '@auth0/auth0-react';

const Contact = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  const [users, setUsers] = useState({
    Name: '',
    Email: '',
    Subject: '',
    Message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { Name, Email, Subject, Message } = users;
    if (!users.Name || !users.Email || !users.Subject || !users.Message) {
      alert('Please fill in all fields.');
      return;
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Name,
        Email,
        Subject,
        Message
      })
    };

    try {
      const res = await fetch(
        'https://e-commerce-contact-ba862-default-rtdb.firebaseio.com/Message.json',
        options
      );

      if (res.ok) {
        alert('Your Message has been sent successfully!');
     
      } else {
        alert('An error occurred. Please try again later.');
      }
   
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };
  const handleClearName = () => {
    setUsers({ ...users, Name: '' });
  };
  return (
    <div className="contact_container">
      <div className="contact">
        <h2># Contact Us</h2>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="Name"
              value={users.Name}
              placeholder="Enter Your Full Name"
              required
              autoComplete="off"
              onChange={handleInputChange}
            />
            {users.Name && (
  <button onClick={() => setUsers({ ...users, Name: '' })}>
    Clear Name
  </button>
)}
            <input
              type="email"
              name="Email"
              value={users.Email}
              placeholder="Enter Your E-mail"
              autoComplete="off"
              onChange={handleInputChange}
            />

{users.Name && (
              <button type="button" onClick={handleClearName}>
                Clear Name
              </button>
            )}
            <input
              type="text"
              name="Subject"
              value={users.Subject}
              placeholder="Enter Your Subject"
              autoComplete="off"
              onChange={handleInputChange}
            />
            <textarea
              name="Message"
              value={users.Message}
              placeholder="Your Message"
              autoComplete="off"
              onChange={handleInputChange}
            />
            {isAuthenticated ? (
              <button type="submit">Send</button>
            ) : (
              <button type="button" onClick={loginWithRedirect}>
                Login to Send
              </button>
            )}
            
          </form>
        </div>
        {user && <p>Hello, {user.name}</p>}
      </div>
    </div>
  );
};

export default Contact;
