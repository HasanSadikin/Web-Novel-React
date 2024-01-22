import { createClient } from "@supabase/supabase-js";
import { Database } from "../../types/supabase";

export function useSupabase() {
  const supabase = createClient<Database>(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
  );
  return supabase;
}
