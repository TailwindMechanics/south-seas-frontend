//path: src\hooks\useAuthSession.tsx

import { AuthContext } from "./AuthProvider";
import { useContext } from "react";
import { Session } from "@supabase/supabase-js";

interface UseAuthSessionResult {
  session: Session | null;
  loading: boolean;
}

export const useAuthSession = (): UseAuthSessionResult => {
  const { session, loading } = useContext(AuthContext);
  return { session, loading };
};
