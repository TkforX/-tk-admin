/*
 * @Date: 2024-11-12 17:06:05
 * @LastEditors: kongaobo tkfor@foxmail.com
 * @LastEditTime: 2024-11-12 17:07:00
 */
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
    entries: ['src/index'],
    clean: true,
    declaration: true,
    rollup: {
        emitCJS: true,
    },
});
