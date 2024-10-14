"use client";
import React, { useState } from 'react';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (newEmail && !validateEmail(newEmail)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setStatus('Sending...');

    const response = await fetch('https://formspree.io/f/mbljjlbk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, subject, message }),
    });

    if (response.ok) {
      setStatus('Message sent successfully!');
      setEmail('');
      setSubject('');
      setMessage('');
      setEmailError('');
    } else {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="text-gray-800 dark:text-white backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 rounded-lg my-8 p-8 transition-all duration-300">
      <div className="mx-2">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="md:w-1/2 mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                className={`w-full p-2 bg-gray-100 dark:bg-gray-700 rounded text-gray-800 dark:text-white ${emailError ? 'border-red-500' : ''}`}
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded text-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded h-32 text-gray-800 dark:text-white"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300 disabled:bg-gray-400"
              disabled={!!emailError}
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-center">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
