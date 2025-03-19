
import { createBrowserClient, createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
    throw new Error('Missing Supabase URL');
}

export async function createSupabase() {
    if(typeof window === 'undefined') {
      return createServerSupabase();
    }
    else
    {
      return createClientSupabase();
    }
}

function createClientSupabase() {
    return createBrowserClient(
        supabaseUrl,
        supabaseAnonKey
    )
}

async function createServerSupabase() {

    try {
        const cookieStore = await cookies();
        return createServerClient(
          supabaseUrl,
          supabaseAnonKey,
          {
            cookies: {
              getAll() {
                return cookieStore.getAll();
              },
              setAll(cookiesToSet) {
                try {
                  cookiesToSet.forEach(({ name, value, options }) =>
                    cookieStore.set(name, value, options)
                  );
                } catch {
                  // Ignorieren, wenn die Methode von einer Server-Komponente aufgerufen wird
                }
              },
            },
          }
        );
      } catch {
        return createClientSupabase();
      }
}

