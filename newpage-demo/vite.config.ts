import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // base: "/virtualRole.github.io/",
  base: "./",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "assets":path.resolve(__dirname,'src/assets'),
    },
  },
  build: {
    outDir: "dist", //指定打包输出路径
    assetsDir: "assets", //指定静态资源存放路径
    cssCodeSplit: true, //css代码拆分,禁用则所有样式保存在一个css里面
    sourcemap: false, //是否构建source map 文件
    terserOptions: {
      // 生产环境移除console
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  // server:{
  //   proxy:{
  //     "/api": {
  //       target: "http://39.104.82.134:5001/dialogue/",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/apiDialog/, ""),
  //     }
  //   }
  // }
});
