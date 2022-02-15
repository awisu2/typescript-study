# about tsconfig.json

- official document: [TypeScript: Documentation \- What is a tsconfig\.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- official reference: [TypeScript: TSConfig Reference \- Docs on every TSConfig option](https://www.typescriptlang.org/tsconfig)

**NOTE**

- `tsconfig.json`(または `jsconfig.json`)という名前でプロジェクトのルートディレクトリに設置
  - `jsconfig.json`はjavascript用のフラグがデフォルトで有効になっている
- 指定なくtscが実行された時、カレントディレクトリまたは親ディレクトリからtsconfi.jsonを検索します(--project, -p でも指定したディレクトリで同様の挙動)
- more details: [typescript\-study/trytsconfig at main · awisu2/typescript\-study](https://github.com/awisu2/typescript-study/tree/main/trytsconfig)

## Todos

- [] referencesの詳細
- [] watchOptionsの詳細
- [] typeAcquisitionの詳細

## サンプル

大雑把な説明

- "compilerOptions" によって細かい挙動を指定し、それ以外のオプションで対象ファイルや、動作を指定する
- "compilerOptions", "extends", "references" 以外は、ビルドツールで補完されがち


*tsconfig.json*

```json
{
    "compilerOptions": {
        "module": "ES2015", // モジュール
        "strict": false, // 厳密化on/off(いくつかのstrict系、noImplict系の設定を一括設定)
        "strictNullChecks": false, // nullチェックの強制

        "baseUrl": ".", // pathsの基準ディレクトリ
        // "baseUrl": "src",
        "paths": { // baseUrlからの相対パス
            "jquery": ["node_modules/jquery/dist/jquery"],
            "@app/*": ["src/app/*"] // 下階層も必要な場合は, "/*" の記載が必要
        } 

    },
    "extends": "tsconfig.base.json", // 別設定ファイルを読み込む(設定の重複はこのファイル優先、相対パスはこのファイル基準になる)

    "files": [], // 対象ファイルリスト。見つからないファイルがある場合エラー
    "include": ["src/**/*", "tests/**/*"], // 対象ファイル
    "exclude": ["src/exclude/**/*"], // includeに含まれるファイルから除外するファイル

    "references": [], // 他プロジェクトを参照することとが可能
    "watchOptions": {}, // -watch時の挙動設定
    "typeAcquisition": {}, // javascript用の設定
}
```

- include, exclude はwildcardが利用できる ([Include](https://www.typescriptlang.org/tsconfig#include))
- watchOptions

### references について

[TypeScript: Documentation \- Project References](https://www.typescriptlang.org/docs/handbook/project-references.html)
