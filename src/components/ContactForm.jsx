import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setMessage('Por favor, completa todos los campos.');
      return;
    }
    try {
      await firebase.firestore().collection('contactFormResponses').add(formData);
      setMessage('Formulario enviado con éxito!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
        console.error("Error al enviar el formulario:", error);
        setMessage('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
     }     
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={formData.name} />
        <input type="email" name="email" placeholder="Correo electrónico" onChange={handleChange} value={formData.email} />
        <input type="text" name="subject" placeholder="Asunto" onChange={handleChange} value={formData.subject} />
        <textarea name="message" placeholder="Mensaje" onChange={handleChange} value={formData.message}></textarea>
        <button type="submit">Enviar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ContactForm;