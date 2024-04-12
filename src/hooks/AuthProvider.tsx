//path: src\hooks\AuthProvider.tsx

import { FC, createContext, useEffect, useState } from "react";
import { User, Session } from "@supabase/supabase-js";

import { SbClient } from "../utilities/SbClient.ts";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSession = async () => {
      const response = await SbClient.auth.getSession();
      if (!response.error && response.data.session) {
        setSession(response.data.session);
        setUser(response.data.session.user);
      } else {
        setSession(null);
        setUser(null);
      }
      setLoading(false);
    };

    fetchSession();

    const { data: authListener } = SbClient.auth.onAuthStateChange(
      (_, session) => {
        if (session) {
          setSession(session);
          setUser(session.user);
        } else {
          setSession(null);
          setUser(null);
        }
      },
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, session, loading }}>
      {props.children}
    </AuthContext.Provider>
  );
};
