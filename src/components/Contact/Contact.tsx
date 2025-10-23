"use client";
import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback("Please Wait . . .");
    setLoading(true);

    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setFeedback("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setFeedback(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setFeedback("Error sending email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="py-10 md:py-20 bg-gray-900 text-white flex flex-col items-center justify-center p-10 pb-32 lg:pb-10">
        <h2 className="text-3xl font-bold text-center mb-10">Get In Touch</h2>

        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-medium">Contact Information</h2>
            <p className="text-gray-400">
              I would love to hear from you! Feel free to reach out through any
              of the following methods:
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <a href="tel:+8801996722640" className="flex items-center space-x-4">
                  <span className="p-3 bg-blue-600 rounded-full">
                    <FiPhone />
                  </span>
                  <p>+880-1996-722-640</p>
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <a
                  href="https://wa.me/8801996722640"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4"
                >
                  <span className="p-3 bg-green-500 rounded-full">
                    <FaWhatsapp />
                  </span>
                  <p>+880-1996-722-640</p>
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <a href="mailto:ranarr.dev@gmail.com" className="flex items-center space-x-4">
                  <span className="p-3 bg-red-600 rounded-full">
                    <FiMail />
                  </span>
                  <p>ranarr.dev@gmail.com</p>
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <span className="p-3 bg-teal-600 rounded-full">
                  <FiMapPin />
                </span>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-6"
          >
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
                name="email"
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
              disabled={loading}
              className="w-full bg-teal-600 hover:bg-teal-500 py-2 rounded-md font-medium transition-colors"
            >
              Send Message
            </button>

            {feedback && (
              <p
                className={`mt-4 text-center ${loading ? "text-white" : "text-green-400"
                  }`}
              >
                {feedback}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
