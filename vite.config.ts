import react from '@vitejs/plugin-react'
import path from 'path' // 需要安装 @types/node（如果使用 TypeScript）支持这个path类型
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 把 `@` 映射到 `./src` 目录
      '@components': path.resolve(__dirname, './src/components') // 示例：单独别名
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://codercba.com:9002',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
