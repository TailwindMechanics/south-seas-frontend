//path: src\components\ui\Button.tsx

import { FC, ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
}

export const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${props.className} rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700`}>
      {props.children}
    </button>
  );
};
