// Cole aqui os dados do seu projeto Supabase.
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://bsuvfeetvxcaaictcvvb.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_wkvO3WNyRGnJ2JONemC5cg_AT4N-ebf";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
