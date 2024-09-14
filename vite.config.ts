import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  // build: {
  //   outDir: 'docs'
  // },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
    }),
    Components({
      resolvers: [ElementPlusResolver({ ssr: false, directives: false })],
      dirs: ['src/layout/components', 'src/components'],
      dts: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://wangquanbiao.netlify.app', // 设置代理目标
        changeOrigin: true, // 是否改变请求源地址
        rewrite: (path: String) => path.replace(/^\/api/, '') // 将 /api 替换为空字符串
      },
    }
  }
})


