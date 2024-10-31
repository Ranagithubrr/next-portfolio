"use client"
import React, { useState } from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [feedback, setFeedback] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback('');

    try {
      const response = await fetch('/api/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFeedback('Email sent successfully!');
        // Clear the form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setFeedback(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setFeedback('Error sending email. Please try again later.');
    }
  };

  return (
    <section id="contact">
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">

        <h2 className="text-3xl font-bold text-center mb-10">
          Get In Touch
        </h2>

        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-medium">Contact Information</h2>
            <p className="text-gray-400">
              I would love to hear from you! Feel free to reach out through any of the following methods:
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="p-3 bg-blue-600 rounded-full">
                  <FiPhone />
                </span>
                <p>+123 456 789</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="p-3 bg-green-500 rounded-full">
                  <FaWhatsapp />
                </span>
                <p>+123 456 789</p>
              </div>

              <div className="flex items-center space-x-4">
                <span className="p-3 bg-red-600 rounded-full">
                  <FiMail />
                </span>
                <p>your-email@example.com</p>
              </div>

              <div className="flex items-center space-x-4">
                <span className="p-3 bg-teal-600 rounded-full">
                  <FiMapPin />
                </span>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
              <input
                type="email"
                name="email" // Added name attribute
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-500 py-2 rounded-md font-medium transition-colors"
            >
              Send Message
            </button>

            {feedback && <p className="mt-4 text-center text-green-400">{feedback}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
