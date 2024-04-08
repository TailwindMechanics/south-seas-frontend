//path: src\components\ui\Button.tsx

import { FC, ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 ${className}`}>
      {children}
    </button>
  );
};
