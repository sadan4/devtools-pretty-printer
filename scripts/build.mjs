import * as esbuild from 'esbuild';

/**
 * @type {esbuild.BuildOptions}
 */
const opts = {
    entryPoints: ['./src/index.ts'],
    bundle: true,
    minify: false,
    sourcemap: false,
    outdir: "./dist",
}

await Promise.all(["esm", "cjs"].map(format => esbuild.build({ ...opts, format, outExtension: format === "esm" ? { ".js": ".mjs" } : void 0 })))