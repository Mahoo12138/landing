import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  root: "src",
  plugins: [
    viteSingleFile(),
    createHtmlPlugin({
      minify: true,
      entry: './main.ts',
      template: "index.html",
      inject: {
        data: {
          title: "Landing Page",
          authorName: "柠川",
          authorUrl: "https://blog.mahoo12138.cn/",
          icpNumber: "湘ICP备2021001160号-1",
          icpUrl: "https://beian.miit.gov.cn/",
          copyrightYear: new Date().getFullYear(),
        }
      },
    }),
  ],
});
