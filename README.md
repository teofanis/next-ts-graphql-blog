# NextJS / React / Typescript / Tailwind / GraphQL / GraphCMS

## Description

This project has been build for the purpose of learning and practicing the following technologies:

    - Typescript
    - Next JS / React
    - GraphQL
    - GraphCMS

Will also setup some basic tools for CI/CD.
Also planning to include cypress e2e tests.

## Installation

Clone the repo and run the following commands at the root of the project:
Copy the .env.example file to .env and replace the XXXXX values.

```bash
    yarn install
    yarn dev
    yarn prepare // Installs the pre-commit hooks
```

## Linting

This project uses [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) in Google Style config to perform static checks on all the code.

## TypeScript

This project uses [TypeScript](https://www.typescriptlang.org/) to simplify JavaScript allowing to be read and to debug easier.

## Husky

This project is using husky to prevent issues while we're trying to push/commit our code to remote.

### Husky Checks

    - Code Style Standards
    - Linting Standards
    - Typescript Standards
    - Successful build test
    - Staged File Checks (-all of the above)

## Commands

- `yarn dev`: Starts the project in development mode
- `yarn build`: Builds the project for production
- `yarn start` : Starts the production server
- `yarn check-types` : Checks for typescript errors
- `yarn check-format` : Checks for code style errors
- `yarn check-lint` : Checks for linting errors
- `yarn format` : Runs format on all files
- `yarn test-all` : Runs all pre-commit checks
- `yarn prepare` : Installs pre-commit husky hooks
