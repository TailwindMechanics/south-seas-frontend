//path: src\hooks\useAuthUser.tsx

import { AuthContext } from "./AuthProvider";
import { useContext } from "react";
import { User } from "@supabase/supabase-js";

interface UseAuthUserResult {
  user: User | null;
  loading: boolean;
}

export const useAuthUser = (): UseAuthUserResult => {
  const { user, loading } = useContext(AuthContext);
  return { user, loading };
};
