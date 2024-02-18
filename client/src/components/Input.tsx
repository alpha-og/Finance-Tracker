import React from "react";
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};
const Input = (props: InputProps) => {
  !props.className &&
    (props = {
      className:
        "w-full h-12 p-4 bg-neutral-800 outline-none rounded-lg focus:ring-1 focus:ring-white ease-in-out duration-300",
      ...props,
    });
  return <input {...props} />;
};
export default Input;
