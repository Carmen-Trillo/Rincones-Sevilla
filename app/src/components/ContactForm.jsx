import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    to_email: 'mctrillon@gmail.com',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_oxv01uk', 'template_hce456o', event.target, 'user_84798')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    setToSend({
      name: '',
      email: '',
      subject: '',
      message: '',
      to_email: 'mctrillon@gmail.com',
    });
  };

  const handleChange = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  };

  return (
    <div style={{marginLeft: '-18vw',}}>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={toSend.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={toSend.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Asunto:
          <input type="text" name="subject" value={toSend.subject} onChange={handleChange} />
        </label>
        <br />
        <label>
          Mensaje:
          <textarea name="message" value={toSend.message} onChange={handleChange} />
        </label>
        <br />
        <input id='submit' type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default ContactForm;
