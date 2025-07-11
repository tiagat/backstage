# [Backstage](https://backstage.io)

## Prerequisites

- A GNU-like build environment available at the command line. On macOS, you will want to have run `xcode-select --install` to get the XCode command line build tooling in place.

- Node.js [Active LTS Release](https://backstage.io/docs/overview/versioning-policy/#nodejs-releases)
    - [Installing nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
    - [Install and change Node version with nvm](https://nodejs.org/en/download/package-manager/#nvm)
    - Node 22 is a good starting point, this can be installed using `nvm install lts/jod`

- `yarn` [Installation](https://yarnpkg.com/getting-started/install)
    - Backstage currently uses Yarn 4.4.1, once you've ran corepack enable you'll want to then run yarn set version 4.4.1

- [OrbStack](https://docs.orbstack.dev) - supercharged alternative to Docker Desktop
    - [installing as a Homebrew Cask](https://docs.orbstack.dev/quick-start) 


## Run the Backstage

Install dependencies: 

```bash
yarn install
```

Run the Backstage:

```bash
yarn start
```
