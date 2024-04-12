//path: src\components\ui\AuthedSession.tsx

import { FC, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthSession } from "../../hooks/useAuthSession";

interface AuthedSessionProps {
  children?: ReactNode;
}

export const AuthedSession: FC<AuthedSessionProps> = (props) => {
  const navigate = useNavigate();
  const { session, loading } = useAuthSession();

  useEffect(() => {
    console.log("session", session);

    if (!loading && !session) {
      navigate("/");
    }
  }, [loading, session, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{session && props.children}</>;
};
