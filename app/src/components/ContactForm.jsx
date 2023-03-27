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
      <form action="https://formsubmit.co/mctrillon@gmail.com" method="POST">
        <label for="name">
          Nombre:
          <input type="text" name="name" required />
        </label>
        <br />
        <label for="email">
          Email:
          <input type="email" name="email" required/>
        </label>
        <br />
        <label for="subject">
          Asunto:
          <input type="text" name="subject" required/>
        </label>
        <br />
        <label for="message">
          Mensaje:
          <textarea type="text" name="message" col='15' row='5' required/>
        </label>
        <br />
        <input id='submit' type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default ContactForm;
