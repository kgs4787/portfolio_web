import React, { useState } from "react";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        "your_user_id"
      )
      .then(() => {
        alert("Message sent!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4">
      <FormField
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <FormField
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        type="email"
      />
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
        />
      </div>
      <Button type="submit">Send</Button>
    </form>
  );
}
