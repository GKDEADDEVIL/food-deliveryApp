import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://eywxaiznfbtrxvpjgsjm.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5d3hhaXpuZmJ0cnh2cGpnc2ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3OTA4MjQsImV4cCI6MjAxODM2NjgyNH0.18OxWTitdcZt0sN0U2KOqw7AIuB8R0zWeR-PZquU6hI"


export const supabase = createClient(supabaseUrl,supabaseAnonKey)