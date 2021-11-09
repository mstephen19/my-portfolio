import React, { useState, useContext } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import { LangContext } from '../../App';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const lang = useContext(LangContext);

  const placeholders = {
    name: lang === 'en' ? 'Your name' : 'Ваше имя',
    email:
      lang === 'en' ? 'Please enter your email' : 'Адрес электронной почты',
    subject: lang === 'en' ? 'Subject' : 'Тема',
    message: lang === 'en' ? 'Message' : 'Сообщение',
    submitMsg: lang === 'en' ? 'Send Message' : 'Отправить',
  };

  const submit = () => {
    if (name && email && message && subject) {
      const serviceId = 'service_sixr7ub';
      const templateId = 'template_j4wcdkf';
      const userId = 'user_UgdTdgP7pyeJ6G7RUYbB7';
      const templateParams = {
        name,
        email,
        message,
        subject,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName('');
      setEmail('');
      setMessage('');
      setSubject('');
      setEmailSent(true);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <>
      <input
        type='text'
        placeholder={placeholders.name}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='email'
        placeholder={placeholders.email}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='text'
        placeholder={placeholders.subject}
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        placeholder={placeholders.message}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button className='emailSubmit' onClick={submit}>
        {placeholders.submitMsg}
      </button>
      <span className={emailSent ? 'visiblee' : 'hiddenn'}>
        Thank you for your message, we will be in touch in no time!
      </span>
    </>
  );
}
