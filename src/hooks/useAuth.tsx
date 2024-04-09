//path: src\hooks\useAuth.tsx

import { AuthContext } from "./AuthProvider";
import { useContext } from "react";

export const useAuth = () => useContext(AuthContext);
