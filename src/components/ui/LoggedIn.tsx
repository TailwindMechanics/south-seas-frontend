//path: src\components\ui\LoggedIn.tsx

import { FC } from "react";

import { useAuth } from "../../hooks/useAuth";

interface LoggedInProps {
  children: React.ReactNode;
}

export const LoggedIn: FC<LoggedInProps> = (props) => {
  const { user } = useAuth();

  return <>{user ? props.children : null}</>;
};
