// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tdmjozpxgnujdnyxociw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkbWpvenB4Z251amRueXhvY2l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2OTQ1MDAsImV4cCI6MjA1NTI3MDUwMH0.KvMhpar_-D4RmAo--ZyArC5NFD5I5wFT6P5llV7lgjI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);