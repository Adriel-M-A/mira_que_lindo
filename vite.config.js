import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(), // necesario para JSX automático
    tailwindcss(), // Tailwind CSS v4
  ],
});
