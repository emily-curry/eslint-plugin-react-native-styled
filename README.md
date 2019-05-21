# eslint-plugin-react-native-styled

ESLint plugin to provide rules around styling in React Native.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```sh
npm i eslint --save-dev
```

~~Next, install `eslint-plugin-react-native-styled`:~~

Not published to npm at this time.

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-react-native-styled` globally.

## Usage

Add `react-native-styled` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["react-native-styled"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "react-native-styled/no-stylesheet": "warn"
  }
}
```

## Supported Rules

- `no-stylesheet`: Disables the use of StyleSheet.create(), encouraging styled-components to be used.
