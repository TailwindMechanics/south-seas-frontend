//path: src\components\ui\LogoutButton.tsx

import { FC } from "react";

import { useAuthUser } from "../../hooks/useAuthUser";
import { SbClient } from "../../utilities/SbClient";
import { Button } from "./Button";

interface LogoutButtonProps {
  className?: string;
}
export const LogoutButton: FC<LogoutButtonProps> = (props) => {
  const { user } = useAuthUser();
  const onLogoutClick = async () => {
    await SbClient.auth.signOut();
  };

  return (
    <>
      {user && (
        <>
          <Button
            className={`${props.className} w-full`}
            onClick={onLogoutClick}>
            Logout
          </Button>
          <span>Logged in as: {user.email}</span>
        </>
      )}
    </>
  );
};
