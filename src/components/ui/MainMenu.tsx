//path: src\components\ui\MainMenu.tsx

import { FC } from "react";

import { Button } from "./Button";

interface MainMenuProps {
  onNewGameClick?: () => void;
  onJoinGameClick?: () => void;
  onSettingsClick?: () => void;
}

export const MainMenu: FC<MainMenuProps> = (props) => {
  return (
    <>
      <Button onClick={props.onNewGameClick}>New Game</Button>
      <Button onClick={props.onJoinGameClick}>Join Game</Button>
      <Button onClick={props.onSettingsClick}>Settings</Button>
    </>
  );
};
