# eslint-plugin-cy

cypress best practices

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-cy`:

```
$ npm install eslint-plugin-cy --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-cy` globally.

## Usage

Add `cy` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "cy"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "cy/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





