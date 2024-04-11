//path: src\hooks\AuthProvider.tsx

import { FC, createContext, useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";

import { SbClient } from "../utilities/SbClient.ts";

interface AuthContextType {
  user: User | null;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await SbClient.auth.getUser();
      setUser(currentUser.data.user);
    };

    fetchUser();

    const { data: authListener } = SbClient.auth.onAuthStateChange(() => {
      fetchUser();
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {props.children}
    </AuthContext.Provider>
  );
};
