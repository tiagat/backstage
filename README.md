# [Backstage](https://backstage.io)

## Prerequisites

- A GNU-like build environment available at the command line. On macOS, you will want to have run `xcode-select --install` to get the XCode command line build tooling in place.

- Node.js [Active LTS Release](https://backstage.io/docs/overview/versioning-policy/#nodejs-releases)
    - [Installing nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
    - [Installing and change Node version with nvm](https://nodejs.org/en/download/package-manager/#nvm)
    - Node 22 is a good starting point, this can be installed using `nvm install lts/jod`

- `yarn` [Installation](https://yarnpkg.com/getting-started/install)
    - Backstage currently uses Yarn 4.4.1, once you've ran corepack enable you'll want to then run yarn set version 4.4.1

- [OrbStack](https://docs.orbstack.dev) - supercharged alternative to Docker Desktop
    - [installing as a Homebrew Cask](https://docs.orbstack.dev/quick-start) 

- [Kind](https://kind.sigs.k8s.io) - tool for running local Kubernetes clusters using Docker
    - [Installing With A Package Manager](https://kind.sigs.k8s.io/docs/user/quick-start/#installing-with-a-package-manager)

- [Kluctl](https://kluctl.io) - Kubernetes deployments
    - [Installing the CLI](https://kluctl.io/docs/kluctl/installation/#installation-with-homebrew)

- [Skaffold](https://skaffold.dev) - handles the workflow for building, pushing and deploying your application
    - [Installing Skaffold](https://skaffold.dev/docs/install/#homebrew)

- [Helm](https://helm.sh) - package manager for Kubernetes
    - [Installing Helm](https://helm.sh/docs/intro/install/#through-package-managers) 

- [kubectl](https://kubernetes.io/docs/tasks/tools/) - Kubernetes command-line tool
    - [Install with Homebrew on macOS](https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/#install-with-homebrew-on-macos)


## Getting Started

To start using Backstage, see the [Getting Started documentation](https://backstage.io/docs/getting-started).

## Documentation

The documentation of Backstage includes:

- [Main documentation](https://backstage.io/docs)
- [Software Catalog](https://backstage.io/docs/features/software-catalog/)
- [Architecture (Decisions)](https://backstage.io/docs/overview/architecture-overview)
- [Designing for Backstage](https://backstage.io/docs/dls/design)
- [Storybook - UI components](https://backstage.io/storybook)


## Development environment

For local development, used kind cluster

- To create the cluster:
  ```bash
  yarn cluster:start
  ```
- To delete the cluster:
  ```bash
  yarn cluster:stop
  ```
