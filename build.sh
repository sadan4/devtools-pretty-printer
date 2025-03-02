#!/usr/bin/env bash
pnpm i
rm -rf dist
node scripts/build.mjs
# npx tsc
NAME=$(jq .name < package.json)
echo "
declare module $NAME {
  export * from './index';
}
" >> dist/index.d.ts