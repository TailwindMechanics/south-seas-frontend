//path: src\components\ui\MainMenu.tsx

import { useNavigate } from "react-router-dom";
import { FC } from "react";

import { LogoutButton } from "./LogoutButton";
import { Button } from "./Button";

export const MainMenu: FC = () => {
  const navigate = useNavigate();

  const navTo = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <Button onClick={() => navTo("/game")}>New Game</Button>
      <Button onClick={() => console.log("Join Game")}>Join Game</Button>
      <Button onClick={() => console.log("Settings")}>Settings</Button>
      <LogoutButton />
    </>
  );
};
