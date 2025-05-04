import React from "react";
import ProjectCard from "../molecules/ProjectCard";
import SectionTitle from "../atoms/SectionTitle";

const dummyProjects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS.",
    imageUrl: "",
    link: "https://github.com/your-name/portfolio",
    techStack: ["React", "Tailwind", "TypeScript"],
  },
  {
    title: "Todo App",
    description: "Simple todo app with CRUD features.",
    imageUrl: "",
    link: "https://github.com/your-name/todo-app",
    techStack: ["React", "Vite"],
  },
];

export default function ProjectList() {
  return (
    <section className="py-12">
      <SectionTitle text="Projects" />
      <div className="grid md:grid-cols-2 gap-6">
        {dummyProjects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
