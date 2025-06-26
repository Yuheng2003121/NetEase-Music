/// <reference types="vite/client" />
//重写ImportMetaEnv类型, 用于获取环境变量, 方便提示
interface ImportMetaEnv {
  [key: ImportMetaEnvFallbackKey]: any
  BASE_URL: string
  MODE: string
  DEV: boolean
  PROD: boolean
  SSR: boolean
  VITE_API_URL: string
}
