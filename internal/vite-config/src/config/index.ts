/*
 * @Date: 2024-11-12 17:15:47
 * @LastEditors: kongaobo tkfor@foxmail.com
 * @LastEditTime: 2024-11-14 19:05:42
 */
import { defineConfig as defineApplicationConfig, mergeConfig } from 'vite'
import getCommonConfig from "./common"
import type { ConfigEnv, PluginOption, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import eslint from "vite-plugin-eslint"
import vueJsx from "@vitejs/plugin-vue-jsx"

type Config = (config?: ConfigEnv) => Promise<UserConfig>
export async function defineConfig(
    userConfigPromise: Config,
    useEslint: boolean = true,
) {
    let plugins: PluginOption[] = [
        vue(), vueJsx()
    ];
    if (useEslint) {
        plugins.push(eslint())
    }
    const options = await userConfigPromise();
    const commonConfig = await getCommonConfig()
    commonConfig.plugins = plugins;
    const viteConfig: UserConfig = mergeConfig(options, commonConfig)
    return defineApplicationConfig({
        ...viteConfig
    })

}
