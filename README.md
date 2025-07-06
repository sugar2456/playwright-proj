# playwright練習用リポジトリ

playwright検証用のリポジトリです。

## テストスクリプトの実行

### テストの実行

```
npx playwright test
```

### UIモードでのテストの実行

```
npx playwright test --ui
```

### ブラウザを起動したテストの実行

```
npx playwright test --headed
```

### 前回失敗したテストの実行

```
npx playwright test --last-failed
```

## レポートの確認

テストレポートの確認
```
npx playwright show-report
```