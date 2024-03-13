import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    clean: true,
    shims: true,
    dts: true,
    format: ["esm", "cjs"],
    banner: {
        js: `'use server'`,
    },
});