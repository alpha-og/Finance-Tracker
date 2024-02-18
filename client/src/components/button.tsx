import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: React.ReactNode;
};

const Button = ({ children, ...props }: ButtonProps) => {
  !props.className &&
    (props = {
      className:
        "w-full max-h-12 p-2 text-lg text-neutral-950 font-bold bg-white rounded-lg flex justify-center items-center gap-2 hover:bg-blue-500 hover:text-white focus:ring-white duration-300 ",
      ...props,
    });
  return <button {...props}>{children}</button>;
};
export default Button;
