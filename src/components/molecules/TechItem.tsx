import React from "react";

interface TechItemProps {
  name: string;
  icon?: React.ReactNode;
}

export default function TechItem({ name, icon }: TechItemProps) {
  return (
    <div className="flex items-center space-x-2 text-sm">
      {icon && <span className="text-lg">{icon}</span>}
      <span>{name}</span>
    </div>
  );
}
