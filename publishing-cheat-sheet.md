# one-time setup
npm init -y
npm i -D typescript tsup @types/node
npx tsc --init
# dev
npm run build
# bump
npm version patch
# test tarball
npm pack
# publish again
npm publish --access public
