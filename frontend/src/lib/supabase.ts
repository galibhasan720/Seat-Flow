import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

/**
 * Browser Supabase client (Auth + public reads).
 * Uses the anon key only — never the service role key.
 * Returns null when env vars are missing so local UI still boots.
 */
export function createSupabaseClient(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn(
      '[supabase] VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is unset; Auth client disabled.',
    )
    return null
  }
  return createClient(supabaseUrl, supabaseAnonKey)
}

export const supabase = createSupabaseClient()
