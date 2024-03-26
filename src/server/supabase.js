"use server";

import { createClient } from "@supabase/supabase-js";
console.log("before connection");

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);

console.log("connected");
export default supabase;
