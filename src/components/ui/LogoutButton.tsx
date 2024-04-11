//path: src\components\ui\LogoutButton.tsx

import { FC } from "react";

import { SbClient } from "../../utilities/SbClient";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "./Button";

export const LogoutButton: FC = () => {
  const { user } = useAuth();
  const onLogoutClick = async () => {
    await SbClient.auth.signOut();
  };

  return (
    <>
      {user && (
        <>
          <Button className="w-full" onClick={onLogoutClick}>
            Logout
          </Button>
          <span>Logged in as: {user.email}</span>
        </>
      )}
    </>
  );
};
