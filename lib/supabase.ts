import { Database } from "@/types/database.types";
import { createClient } from '@supabase/supabase-js';

 const supabase = createClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
)
export default supabase;