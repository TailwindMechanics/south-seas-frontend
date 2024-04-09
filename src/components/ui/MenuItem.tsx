//path: src\components\ui\MenuItem.tsx

import { Menu } from "@headlessui/react";
import { FC } from "react";

interface MenuItemProps {
  label: string;
  className?: string;
  onClick?: () => void;
}

export const MenuItem: FC<MenuItemProps> = (props) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={`${props.className} ${
            active ? "bg-gray-100" : ""
          } w-full px-4 py-2 text-left text-sm`}
          onClick={props.onClick}>
          {props.label}
        </button>
      )}
    </Menu.Item>
  );
};
