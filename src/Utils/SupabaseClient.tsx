//path: src\utils\SupabaseClient.tsx

import { createClient } from "@supabase/supabase-js";

export const SupabaseClient = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_KEY as string,
);
