//path: src\components\ui\LoggedOut.tsx

import { FC } from "react";

import { useAuth } from "../../hooks/useAuth";

interface LoggedOutProps {
  children: React.ReactNode;
}

export const LoggedOut: FC<LoggedOutProps> = (props) => {
  const { user } = useAuth();

  return <>{user ? null : props.children}</>;
};
