import type { UserConfig } from 'vite';
import path from 'path'

async function getCommonConfig(): Promise<UserConfig> {
    return {
        build: {
            chunkSizeWarningLimit: 1024,
            reportCompressedSize: true,
            sourcemap: false,
            minify: "esbuild",
            rollupOptions: {
                treeshake: true,
                output: {
                    // chunkFileNames: "static/js/[name]-[hash].js",
                    // entryFileNames: "static/js/[name]-[hash].js",
                    // assetFileNames: "static/[ext]/[name]-[hash].[ext]",
                    manualChunks(id) {// 手动拆分chunks
                        // if (id.includes("echarts")) {
                        //     return "echarts";
                        // } else if (id.includes("node_modules")) {
                        //     return "vendor";
                        // }
                    },
                },
            },
            terserOptions: {
                compress: {
                    //生产环境时移除console
                    drop_console: true,
                    drop_debugger: true,
                },
            },
            commonjsOptions: {
                requireReturnsDefault: "namespace", // 要求ES模块返回其名称空间
            },
        },
        resolve: {
            alias: {
                '@': path.resolve("./src/")
            },
            extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/style/mixin.scss";'
                }
            }
        },
    };
}
export default getCommonConfig;