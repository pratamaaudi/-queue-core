import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"], // Build for commonJS and ESmodules
  dts: true, // Generate declaration file (.d.ts)
  treeshake: true,
  minify: false,
  splitting: false,
  sourcemap: true,
  clean: true,
});
