import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Network access allow karega
    port: 5173,       // Port define karein
    strictPort: true, // Same port force karega
  },
});
