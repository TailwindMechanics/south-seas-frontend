//path: src\utils\SupabaseClient.ts

import { createClient } from "@supabase/supabase-js";

const supabaseClient = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_KEY as string,
);

export default supabaseClient;
