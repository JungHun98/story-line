import { createClient } from "@supabase/supabase-js";

const instance = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default instance;
