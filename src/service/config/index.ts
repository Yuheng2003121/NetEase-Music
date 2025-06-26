// 方案1.手动区分开发环境和生产环境
export const BASE_URL = 'http://codercba.com:9002'
// export const BASE_URL = 'http://codercba.prod:8000'

export const TIME_OUT = 10000

// 方案2. 代码逻辑判断：判断当前环境 (是根据命令的mode决定的)
// -----------------------------------
// Vite 默认提供的环境变量：
//console.log(import.meta.env.MODE)    // 当前模式（development/production）
//console.log(import.meta.env.DEV)     // 是否开发环境
//console.log(import.meta.env.PROD)    // 是否生产环境
// console.log(import.meta.env.SSR)     // 是否是服务器端渲染

// let BASE_URL = ''
// if (import.meta.env.MODE === 'development') {
//   BASE_URL = 'http://codercba.dev:9002'
// } else {
//   BASE_URL = 'http://codercba.prod:9002'
// }
// export { BASE_URL }

//webpack才提供process.env.NODE_ENV:
// let BASE_URL = ''
// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://codercba.dev:9002'
// } else {
//   BASE_URL = 'http://codercba.prod:9002'
// }
// export { BASE_URL }

//方法3:从.env.配置文件中加载变量
// console.log(process.env.REACT_APP_BASE_URL) //webpack的方式
//let BASE_URL = import.meta.env.VITE_API_URL //vite的方式, http://codercba.dev:9002

// export { BASE_URL }

