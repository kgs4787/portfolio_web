import React from "react";
import Label from "../atoms/Labels";
import Input from "../atoms/Input";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormField({
  label,
  name,
  type = "text",
  value,
  placeholder,
  onChange,
}: FormFieldProps) {
  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
