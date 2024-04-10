//path: src\components\ui\LogoutButton.tsx

import { FC } from "react";

import { SupabaseClient } from "../../utils/SupabaseClient";
import { Button } from "./Button";
import { useAuth } from "../../hooks/useAuth";

export const LogoutButton: FC = () => {
  const { user } = useAuth();
  const onLogoutClick = async () => {
    const response = await SupabaseClient.auth.signOut();

    if (response.error) {
      console.error("Error signing out:", response.error.message);
    } else {
      console.log("User signed out");
    }
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
