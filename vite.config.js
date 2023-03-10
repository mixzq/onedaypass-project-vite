import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  erver: {
    open: true,
  },
  plugins1: [reactRefresh()],
  base: "",
  server: {
    host: "0.0.0.0",
  },
});
