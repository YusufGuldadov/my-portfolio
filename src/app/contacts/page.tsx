"use client";
import Link from "next/link";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contacts() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Require company, email, and message
    if (!form.company || !form.email || !form.message) {
      alert("Please fill in your company, email, and message.");
      return;
    }

    // Open default mail client
    const mailtoLink = `mailto:yusuf.guldadov@gmail.com?subject=${encodeURIComponent(
      form.company
    )}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.name + "\nEmail: " + form.email)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-10"
      style={{ backgroundImage: "url('/c.jpg')" }} // put your background in public folder
    >
      {/* Social Links */}
      <div className="bg-white p-4 rounded-xl shadow-lg flex gap-6 mb-10">
        <a href="https://www.linkedin.com/in/yusuf-guldadov-50903a2bb/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-600 hover:text-blue-400 transition" />
        </a>
        <a href="https://github.com/YusufGuldadov" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-800 hover:text-gray-400 transition" />
        </a>
        <a href="mailto:yusuf.guldadov@gmail.com" aria-label="Send email">
          <FaEnvelope className="text-red-500 hover:text-red-400 transition" />
        </a>
        <a href="tel:+000000000">
          <FaPhone className="text-green-500 hover:text-green-400 transition" />
        </a>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 p-8 rounded-xl shadow-lg max-w-lg w-full space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={form.company}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          rows={5}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-6 mt-10">
        <Link
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          Main
        </Link>

        <Link
          href="/projects"
          className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          Projects
        </Link>

        <Link
          href="/blogs"
          className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-red-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          Blogs
        </Link>
      </div>
    </div>
  );
}
