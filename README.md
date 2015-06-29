# Standard-Warn - ESLint Sharable Config
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

This config extends [JavaScript Standard Style](https://github.com/feross/eslint-config-standard) and changes all errors to warnings.  This makes it easier to add ESLint to an existing project by allowing you to find out where your problems are without breaking your tests.  You can then use a tool like [ESLint Nibble](https://github.com/IanVS/eslint-nibble) to fix the warnings one-by-one as you have the time and/or willpower.  Once all your rules are passing, switch over to using the original [Standard](https://github.com/feross/eslint-config-standard) configuration.

## Install

```bash
npm install eslint-config-standard-warn
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

To use the JavaScript Standard Style Warn shareable config, first run this:

```bash
npm install eslint-config-standard-warn
```

Then, add this to your .eslintrc file:

```
{
  "extends": "standard-warn"
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.


