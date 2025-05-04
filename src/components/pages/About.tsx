import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import SectionTitle from "../atoms/SectionTitle";
import TechItem from "../molecules/TechItem";

const techs = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "EmailJS",
];

export default function About() {
  return (
    <DefaultLayout>
      <SectionTitle text="About Me" />
      <p className="text-gray-700 mb-6">
        I'm a frontend developer who loves building clean and interactive UIs
        with modern tools.
      </p>

      <SectionTitle text="Tech Stack" />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {techs.map((tech, idx) => (
          <TechItem key={idx} name={tech} />
        ))}
      </div>
    </DefaultLayout>
  );
}
