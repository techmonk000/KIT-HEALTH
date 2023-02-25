import React, { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let isValid = true;
    if (name.trim() === '') {
      setNameError('Please enter your name.');
      isValid = false;
    } else {
      setNameError('');
    }

    if (email.trim() === '') {
      setEmailError('Please enter your email address.');
      isValid = false;
    } else if (!isValidEmail(email.trim())) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (message.trim() === '') {
      setMessageError('Please enter a message.');
      isValid = false;
    } else {
      setMessageError('');
    }

    if (isValid) {
      setSuccessMsg('Your message has been sent!');
      setName('');
      setEmail('');
      setMessage('');
    }
  }

  function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }

  return (
    
    <div align="center">

    
       <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
          <span className="error">{nameError}</span>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
          <span className="error">{emailError}</span>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} onChange={handleMessageChange}></textarea>
          <span className="error">{messageError}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
      <span>{successMsg}</span>
    </div>
  );
 
}

export default ContactUs;
