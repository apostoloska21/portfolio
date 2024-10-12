"use client";
import React, { useState } from 'react';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    } else {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="text-black dark:text-white py-16 px-4">
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
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 bg-gray-200 dark:bg-gray-800 rounded"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="w-full p-2 bg-gray-200 dark:bg-gray-800 rounded"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full p-2 bg-gray-200 dark:bg-gray-800 rounded h-32"
              ></textarea>
            </div>
            <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
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
