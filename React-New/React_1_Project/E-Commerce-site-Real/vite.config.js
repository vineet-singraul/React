// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: "0.0.0.0", // Network access allow karega
//     port: 5173,       // Port define karein
//     strictPort: true, // Same port force karega
//   },
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ FINAL: Mobile, Laptop, Tab — sab pe chalega
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",         // 🌐 Allow external/mobile access
    port: 5173,              // 🛠️ Default Vite port
    strictPort: true,        // 🔒 Fix same port
    open: false,             // 🧭 Prevent auto-open browser
    cors: true,              // 🛡️ Allow cross-origin fetch (optional but helpful)
  },
});
