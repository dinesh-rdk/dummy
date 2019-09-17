# Dummy

Created using [create-react-app](https://github.com/facebook/create-react-app/)

## Pre-requisites

- Node(see `package.json` for version)
- Use [Yarn](https://yarnpkg.com/lang/en/) over `npm` (An error is raised when using npm for installing packages)
- Git version specified in `check-requirements.sh`

Note: Git of a particular version is a dependency of [Husky](https://github.com/typicode/husky)

## Editor Integrations

I personally use [Visual Studio Code](https://code.visualstudio.com/) which comes handy for react development. Install tools in your own editor for better development.

- [ESLint](https://eslint.org) for linting.
- [Prettier](https://github.com/prettier/prettier) for formatting the code automatically.

Note: Git hooks are set in place to format & lint code. See `package.json`

## Installation

```bash
git clone <git-url>
cd <repo-name>
yarn
```

## Development

Before starting development, please go through [GUIDELINES](/GUIDELINES.md)

```bash
yarn start (or) npm start
```

The development server opens the app at http://localhost:3000 in your default browser.

## Debugging

The browser's console is our best debugger. Yet download the developer tools for better debugging

- [React](https://github.com/facebook/react-devtools)
- If you use `redux`, see [Redux](https://github.com/gaearon/redux-devtools)

Also use devtools corresponding to any other packages you use in future.

For debugging in editor, go [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#debugging-in-the-editor)

## Testing

Before testing, make sure to install [watchman](https://github.com/facebook/watchman)

```
yarn test (or) npm test
```

For testing in editor, go [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#editor-integration)

## CI/CD

## Deployment
