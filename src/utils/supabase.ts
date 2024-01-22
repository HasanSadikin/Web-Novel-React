import { createClient } from "@supabase/supabase-js";
import { Database } from "../../types/supabase";

const SupabaseClient = {
  instance: createClient<Database>(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
  ),
};

Object.freeze(SupabaseClient);

export function useSupabase() {
  return SupabaseClient.instance;
}
