/*
 * @Date: 2024-11-19 14:51:44
 * @LastEditors: kongaobo tkfor@foxmail.com
 * @LastEditTime: 2024-11-20 14:40:40
 */
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import * as  components from './components'
import { Drawer } from './Drawer/src/index.tsx'

export { Drawer }
export default {
    install(app: { component: (arg0: string, arg1: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>) => void; }) {
        Object.entries(components).forEach(([key, value]) => {
            app.component(key, value);
        });
    },
};
