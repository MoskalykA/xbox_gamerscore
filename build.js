const { build } = require("esbuild");

build({
  bundle: true,
  minify: true,
  entryPoints: ["./src/index.ts"],
  outfile: "out/index.js",
  target: ["node16"],
  platform: "node",
  external: ["jsdom", "superagent"],
})
  .then(() => console.log("🚀 Built successfully!"))
  .catch((err) => console.log(err));
