import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import SectionTitle from "../atoms/SectionTitle";
import ContactForm from "../organisms/ContactFrom";

export default function Contact() {
  return (
    <DefaultLayout>
      <SectionTitle text="Contact Me" />
      <ContactForm />
    </DefaultLayout>
  );
}
