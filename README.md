# typescript-study

typescriptの勉强、まとめ

[TypeScript: JavaScript With Syntax For Types\.](https://www.typescriptlang.org/)

- javascriptに構文の追加を行ったもの。型宣言が非常に強力

## my basic setting

```bash
npm add -D @types/node
```

_tsconfig.json_

```json
{
  "compilerOptions": {
    "module": "CommonJS", // transpiled files module type. typicaly set CommonJs/ES2015. (ESNext is latest version)
    "target": "ES5", // code target. [ECMAScript 6 compatibility table](http://kangax.github.io/compat-table/es6/)

    "strict": false, // collective set of alwaysStrict, strictNullChecks, strictBindCallApply, strictFunctionTypes, strictPropertyInitialization, noImplicitAny, noImplicitThis, useUnknownInCatchVariables
    "allowJs": true, // include .js file for build
    "allowUnreachableCode": false, // not allow unreachable code (ex: double return)
    "noImplicitOverride": true, // need `override` to override class's function
    "noImplicitReturns": true, // if set return type to function need return value in all code/pattern.
    "noUnusedLocals": true, // error if exists unused local value
    "noUnusedParameters": true, // error if exists unused function arguments

    "outDir": "dist", // output directory
    "baseUrl": ".", // base path for resolve not absolute path. this itself is resolve from tsconfig.json's directory
    // alias paths of import/require. lookup locations relative to the baseUrl.
    "paths": {
      "*": ["./node_modules"],
      "src/*": ["src/*"]
      // "libs/*": ["src/libs/*"],
      // "tests/*": ["tests/*"]
    },

    "declaration": true, // generate .d.ts files
    "declarationDir": "./dist/types", // rootDir of declaration. outDir not overrite this.

    // for debug ==========
    "sourceMap": true, // generate sousemap files

    // if need ==========
    "resolveJsonModule": true, // allow import .json file
    "importsNotUsedAsValues": "error", // "error": preserves all import scripts. but error happen if exists not use.
    "removeComments": true // remove comment
  },
  "include": ["src/**/*.ts", "src/**/*.js"]
}
```

## docs

### tsconfig

- [tsconfig.json](./docs/tsconfig.md)
- [trytsconfg](./trytsconfig): i tried and checked tsconfig behavior
