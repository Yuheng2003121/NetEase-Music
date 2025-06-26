import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
// import pluginPrettier from 'eslint-plugin-prettier'

export default [
  // 基础 JavaScript 推荐规则
  js.configs.recommended,

  // TypeScript 推荐规则
  ...tseslint.configs.recommended,

  // React 推荐规则
  pluginReact.configs.flat.recommended,

  // JSX 自动运行时支持（不需要 import React）
  pluginReact.configs.flat['jsx-runtime'],

  // 手动添加 Prettier 支持（替代 pluginPrettier.configs.recommended, 开启了就可以启动vscode的格式报错
  // {
  //   plugins: {
  //     prettier: pluginPrettier
  //   },
  //   rules: {
  //     'prettier/prettier': [
  //       'error',
  //       {
  //         endOfLine: 'auto',
  //         singleQuote: true,
  //         semi: false
  //       }
  //     ]
  //   }
  // },
  {
    // 在这里添加自定义规则
    rules: {
      'react/display-name': 'off', // 关闭 display-name 检查
      '@typescript-eslint/no-explicit-any': 'off', // 完全关闭
      // 或改为警告（不报错）
      // "@typescript-eslint/no-explicit-any": "warn",

      //禁用 ESLint 的 prop-types 检查, 手动使用ts的interface
      'react/prop-types': 'off'
    }
  },
  // 自定义全局变量和规则
  {
    languageOptions: {
      globals: {
        ...globals.browser
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
]
