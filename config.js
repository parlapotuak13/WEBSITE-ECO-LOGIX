// ============================================================================
// KONFIGURASI TERPADU ECO-LOGIX (Kurir + Pengirim + Vendor 3PL)
// ============================================================================
// Isi SUPABASE_URL dan SUPABASE_ANON_KEY dari: Supabase > Project Settings > API.
// Mendukung format window.ECOLOGIX_CONFIG maupun window.APP_CONFIG secara serentak.
// Jika dibiarkan kosong, seluruh antarmuka otomatis berjalan dalam Mode Lokal Terpadu.
const ECOLOGIX_SHARED_CONFIG = {
  SUPABASE_URL: "",       // contoh: "https://abcdefghijkl.supabase.co"
  SUPABASE_ANON_KEY: "",  // contoh: "eyJhbGciOi..." atau "sb_publishable_..."
  VENDOR_ID: "eco-hemat"
};

window.ECOLOGIX_CONFIG = ECOLOGIX_SHARED_CONFIG;
window.APP_CONFIG = ECOLOGIX_SHARED_CONFIG;
