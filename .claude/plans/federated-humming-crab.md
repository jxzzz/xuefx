# 添加 TypeScript

## Context

当前全项目是 `.js` / `.jsx`，要使组件库有类型安全保障 + 为 npm 消费者提供 `.d.ts` 类型声明。

## 范围

### 转换（重命名 + 加类型）

| 文件                                              | 改名   | 新增类型                      |
| ------------------------------------------------- | ------ | ----------------------------- |
| `packages/theme/tokens.js`                        | `.ts`  | `Record<string, string>`      |
| `packages/theme/tailwind-preset.js`               | `.ts`  | `import type`                 |
| `packages/theme/create-theme.js`                  | `.ts`  | `ThemeConfig` 接口            |
| `packages/theme/themes.js`                        | `.ts`  | `Record<string, ThemeConfig>` |
| `packages/theme/index.js`                         | `.ts`  | —                             |
| `packages/theme/ThemeProvider.jsx`                | `.tsx` | Props 类型                    |
| `packages/core/lib/cn.js`                         | `.ts`  | —                             |
| `packages/core/lib/index.js`                      | `.ts`  | —                             |
| `packages/core/components/Button/Button.jsx`      | `.tsx` | `ButtonProps`, variant 类型   |
| `packages/core/components/Button/Button.demo.jsx` | `.tsx` | —                             |
| `packages/core/components/Button/Button.test.jsx` | `.tsx` | —                             |
| `packages/core/components/Button/index.js`        | `.ts`  | —                             |
| `packages/core/components/Alert/Alert.jsx`        | `.tsx` | `AlertProps` 等               |
| `packages/core/components/Alert/Alert.demo.jsx`   | `.tsx` | —                             |
| `packages/core/components/Alert/Alert.test.jsx`   | `.tsx` | —                             |
| `packages/core/components/Alert/index.js`         | `.ts`  | —                             |
| `packages/core/components/index.js`               | `.ts`  | —                             |
| `packages/core/index.js`                          | `.ts`  | —                             |
| `docs/src/App.jsx`                                | `.tsx` | —                             |
| `docs/src/main.jsx`                               | `.tsx` | —                             |

### 保持不变

- `*.css` — 不需要改
- `vite.config.js`、`tailwind.config.js`、`postcss.config.js` — JS 配置足以
- `eslint.config.js` — JS flat config
- `vitest.config.js` — JS 配置
- `test-setup.js` — 简单 setup，保持 JS

### tsconfig.json

三个包各一个 + 根一个引用：

```
tsconfig.json              # 根：references [core, theme, docs]
packages/core/tsconfig.json
packages/theme/tsconfig.json
docs/tsconfig.json
```

配置要点：

- `jsx: "react-jsx"`（React 19 自动 JSX 转换）
- `module: "ESNext"` + `moduleResolution: "bundler"`
- `strict: true`
- core 包 `declaration: true`（生成 `.d.ts`）

### package.json 更新

- `core/package.json`：`"types": "dist/index.d.ts"`，更新 exports 带 types
- `theme/package.json`：更新 exports 带 types
- `docs/package.json`：加 `typescript` devDep

### Vite 配置

- `core/vite.config.js`：entry 改 `index.ts`，lib `fileName` 改为用函数生成 `.d.ts`
- 库模式下 Vite 默认不生成 `.d.ts`，需要 `@vitejs/plugin-react` + `tsc` 或用 `vite-plugin-dts`

考虑用 `vite-plugin-dts` 生成类型声明更简单。

### 依赖安装

```bash
# core
pnpm add -D typescript vite-plugin-dts --filter @xuefx/ui

# theme
pnpm add -D typescript --filter @xuefx/ui-theme

# docs
pnpm add -D typescript --filter docs
```

`@types/react` 和 `@types/react-dom` 已在根 installed。

## 验证

```bash
pnpm install
pnpm test           # 14 tests 全通过（typescript 解析正常）
pnpm build          # core + .d.ts 构建成功
pnpm -F docs build  # docs 构建成功
```

## 不做什么

- 不转 `eslint.config.js`（ESLint 9 flat config 用 JS 更简单）
- 不转配置文件（vite/tailwind/postcss/vitest）
- 不引入 `tsc --noEmit` 类型检查命令（可选后续加）
