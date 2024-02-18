import React from "react";

interface Props {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function inputField({ type, value, onChange }: Props) {
  return (
    <div className="my-2 ">
      <input
        type={type}
        placeholder={value}
        onChange={onChange}
        className="bg-white text-black border-blue-600 border p-1 m-auto block"
      />
    </div>
  );
}
