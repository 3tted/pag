import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export type Category = {
  position: number;
  name: string;
  copy: string;
};

export type Database = {
  public: {
    Tables: {
      categories: {
        Row: Category & { id: number; created_at: string };
        Insert: Category & { id?: number; created_at?: string };
        Update: Partial<Category & { id: number; created_at: string }>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

let client: SupabaseClient<Database> | null | undefined;

// Server-only: reads SUPABASE_URL / SUPABASE_ANON_KEY from the process
// environment. Returns null when they are not configured so callers can fall
// back to static content instead of failing the render.
export function getSupabase(): SupabaseClient<Database> | null {
  if (client !== undefined) return client;
  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_ANON_KEY"];
  client = url && key ? createClient<Database>(url, key, { auth: { persistSession: false } }) : null;
  return client;
}

export async function listCategories(): Promise<Category[] | null> {
  const supabase = getSupabase();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("categories")
    .select("position, name, copy")
    .order("position");
  if (error) throw error;
  return data;
}

export async function checkDatabase(): Promise<"ok" | "not_configured"> {
  const supabase = getSupabase();
  if (!supabase) return "not_configured";
  const { error } = await supabase.from("categories").select("id", { head: true, count: "exact" });
  if (error) throw error;
  return "ok";
}
