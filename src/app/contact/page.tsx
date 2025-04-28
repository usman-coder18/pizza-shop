"use client";
import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-red-500 mb-6">Contact Us</h1>
      <p className="text-gray-600 mb-10 max-w-lg text-center">
        We did love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
      </p>

      <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-md space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Type your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
