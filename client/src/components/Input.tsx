import React from "react";
import { IconType } from "react-icons";
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  icon?: IconType;
};
const Input = ({ icon, ...props }: InputProps) => {
  !props.className &&
    (props = {
      className:
        "w-full h-12 px-4 py-2 bg-neutral-800 outline-none rounded-lg focus:ring-1 focus:ring-white ease-in-out duration-300",
      ...props,
    });
  return <input {...props} />;
};
export default Input;
