"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // such as sending the data to a server or API
    console.log({ email, subject, message });
    // Reset form fields
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section id="contact" className="text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-2 bg-gray-800 rounded"
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
                  className="w-full p-2 bg-gray-800 rounded"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full p-2 bg-gray-800 rounded h-32"
                ></textarea>
              </div>
              <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Connect with me</h3>
            <p className="mb-4">You can also reach me through:</p>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.linkedin.com/in/martina-apostoloska2/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  LinkedIn: Martina Apostoloska
                </Link>
              </li>
              <li>
                <a href="mailto:apostoloska21@gmail.com" className="text-blue-400 hover:underline">
                  Email: apostoloska21@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;