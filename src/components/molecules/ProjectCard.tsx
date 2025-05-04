import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  techStack: string[];
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  link,
  techStack,
}: ProjectCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {techStack.map((tech, idx) => (
            <span key={idx} className="text-sm bg-gray-200 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
}
