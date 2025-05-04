import React from "react";

interface SectionTitleProps {
  text: string;
  className?: string;
}

export default function SectionTitle({
  text,
  className = "",
}: SectionTitleProps) {
  return (
    <h2 className={`text-3xl font-bold text-gray-800 mb-6 ${className}`}>
      {text}
    </h2>
  );
}
