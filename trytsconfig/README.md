# trytsconfig

my study tsconfig.json

- [TypeScript: TSConfig リファレンス \- すべての TSConfig のオプションのドキュメント](https://www.typescriptlang.org/ja/tsconfig)

for my basic setting

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

## todo

- [ ] useage with babel. (--noEmit)

## important

- compilerOptions
  - outDir: 出力ディレクトリ
- include: target src files
  - if not specifig search `./**/*.ts` files under current directory
  - 最初に見つかった ts ファイルを基準(top directory として)にコンパイル結果が出力される

## compilerOptions

### strict

- strict: set all below setting
  - alwaysStrict
  - strictNullChecks
  - strictBindCallApply
  - strictFunctionTypes
  - strictPropertyInitialization
  - noImplicitAny
  - noImplicitThis
  - useUnknownInCatchVariables

#### each strict's settings detail

- alwaysStrict: write `use strict`
- strictNullChecks: error if use nullable value without check
- strictBindCallApply: error if not correct type of arguments on `call`, `bind` and `apply`
  - but not check return type
- strictFunctionTypes: error if not correct type on function
- strictPropertyInitialization: error if not set initial parameters for class property
- noImplicitAny(true/false): if true error not set type to function's argument
- noImplicitThis: error if "this"'s type is any
- useUnknownInCatchVariables: allow chatch's argument type is any|undefined
  - because difficult guarantee that the object being thrown is a Error subclass

### type checking

- [type checking](https://www.typescriptlang.org/ja/tsconfig#Type_Checking_6248)

List

- allowJs: if true can include .js file. if false nottranspile (default: false)
- allowUnreachableCode (true/false/undefined): if false error unreachable code. (if undefined only warning)
  - default: undefined
  - ex: write double `return` in function
- exactOptionalPropertyTypes(true/false): if true error when set undefined to optional value
  - need 'strictNullChecks' for use
  - ex: `class A {name?: 'a'|'b'}; var a = new A(); a.name = undefined;`
- noFallthroughCasesInSwitch(true/false): if true error not write `break` or `return` in `switch case`
- noImplicitOverride(true/false): if true error not write `override` to override function
- noImplicitReturns(true/false): if set return type to function need return value in all code/pattern
- noPropertyAccessFromIndexSignature(true/false): need index access interface index property
  - ex: `interface A {[key: string]: string}; const a = A{a: "a"};`
    - ok: `console.log(a['a'])`, error: `console.log(a.a)`
- noUnusedLocals(true/false): error if exists unused local value
- noUnusedParameters(true/false): error if exists unused function arguments

### modules

- allowUmdGlobalAccess: allow umd module
  - ex: use jquery only write `<scrip>` with cdn. it'not write import.
    - [jQuery CDN](https://releases.jquery.com/)
- baseUrl: base path for resolve not absolute path. this itself is resolve from tsconfig.json's directory
- module: transpiled files module type. typicaly set CommonJs/ES2015. (ESNext is latest version.)
  - sample of each module: [Module](https://www.typescriptlang.org/tsconfig#module)
  - set CommonJs if just use after transpile by `tsc`.
- moduleResolution: Specify the module resolution strategy
- noResolve: if true. not examine the initial set of file for import and reference directive and add these resolved files
- paths: alias paths of import/require. lookup locations relative to the baseUrl.
- resolveJsonModule: allow import .json file
- rootDir: top directory of all of code. error if use out of range path from this.
- rootDirs:
- typeRoots:
- types:

### Emit

- declaration: generate .d.ts files
- declarationDir: rootDir of declaration. outDir not overrite this.
- declarationMap: generate source map for .d.ts
  files
- downlevelIteration:
- emitBOM: emit BOM. ([Byte order mark \- Wikipedia](https://en.wikipedia.org/wiki/Byte_order_mark))
- emitDeclarationOnly: emit declaration(.d.ts files) only
  - tsc has option: `--emitDeclarationOnly`
- importHelpers: helper of resolve arrays or objects when use downlevelIteration.
- importsNotUsedAsValues: how `import` works.
  - remove: drop only reference types.
  - preserve: keeping even if not using.
  - error: preserves all but error happen if exists not use.
- inlineSourceMap:
- inlineSources:
- mapRoot:
- newLine(CRLF/LF): end of line's code
- noEmit: no emit. for use other tool like Bable or swc...etc
- noEmitHelpers:
- noEmitOnError: no output files at error.
- outDir: output directory. lookup resolve path from rootDir.
- outFile:
- preserveValueImports:
- removeComments: remove comment
- sourceMap: generate soursemap files
  - [ソースマップを使用する \- 開発ツール \| MDN](https://developer.mozilla.org/ja/docs/Tools/Debugger/How_to/Use_a_source_map)
- sourceRoot:
- stripInternal:

### JavaScript Support

- [TypeScript: TSConfig Reference \- Docs on every TSConfig option](https://www.typescriptlang.org/tsconfig#JavaScript_Support_6247)

**LIST**

- allowJs: include .js file for build
- checkJs:
- maxNodeModuleJsDepth:

### Language and Environment

- [TypeScript: TSConfig Reference \- Docs on every TSConfig option](https://www.typescriptlang.org/tsconfig#Language_and_Environment_6254)

**LIST**

- jsx
- jsxFactory
- jsxImportSource
- lib
- noLib
- reactNamespace
- [target](https://www.typescriptlang.org/tsconfig#target)
  - default: es3
- useDefineForClassFields
