//path: src\utils\SbClient.ts

import { createClient } from "@supabase/supabase-js";

export const SbClient = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_KEY as string,
);

console.log(import.meta.env);
