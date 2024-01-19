"use client";
import { InputProps } from "@/utils/types";
import { useState } from "react";

const Input = ({ type, label, name, value, checked, onChange }: InputProps) => {
  const [inUse, setInUse] = useState(false);
  const onBlur = () => {
    if (value === "") setInUse(false);
  };

  if (type === "checkbox") {
    return (
      <label htmlFor={name} className="flex gap-2 pl-2">
        <input
          className="relative appearance-none border border-white h-6 w-6 rounded bg-white checked:bg-dacolors-purple
          after:content-['✔'] after:rotate-90 after:absolute after:left-1.5 after:-top-0.5 checked:after:text-white after:transform checked:after:duration-300 checked:after:rotate-0 checked:after:transition-all after:scale-0 checked:after:scale-110
          "
          type={type}
          id={name}
          name={name}
          checked={checked}
          onChange={(e) => onChange(name, e.target.checked)}
        />
        <span className="italic text-sm">{label}</span>
      </label>
    );
  }

  return (
    <label
      htmlFor={name}
      onFocus={() => setInUse(true)}
      className="relative rounded-3xl bg-dacolors-purple pb-2 pl-4 pt-3 w-full"
    >
      <span
        className={`pointer-events-none transform transition-all absolute ${inUse ? "text-xs -translate-y-8" : "translate-y-0"}`}
      >
        {label}
      </span>
      <input
        required
        className="bg-transparent w-full rounded-3xl focus:ring-0 focus:outline-none"
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={onBlur}
      />
    </label>
  );
};

export default Input;
