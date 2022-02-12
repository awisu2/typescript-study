# trytsconfig

my study tsconfig.json

- [TypeScript: TSConfig リファレンス \- すべての TSConfig のオプションのドキュメント](https://www.typescriptlang.org/ja/tsconfig)

for my basic setting

_tsconfig.json_

```json
{
  "compilerOptions": {
    "outDir": "dist", // output directory

    "allowJs": true, // include .js file for build

    "allowUnreachableCode": false, // not allow unreachable code (ex: double return)
    "alwaysStrict": true, // write out "use strict"
    "noImplicitAny": true, // need type all fuction arguments
    "noImplicitOverride": true, // need `override` to override class's function
    "noImplicitReturns": true, // if set return type to function need return value in all code/pattern.
    "noUnusedLocals": true, // error if exists unused local value
    "noUnusedParameters": true // error if exists unused function arguments
  },
  "include": ["src/**/*.ts", "src/**/*.js"]
}
```

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

#### each settings detail

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
