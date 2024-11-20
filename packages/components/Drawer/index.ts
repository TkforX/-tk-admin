/*
 * @Date: 2024-11-20 10:54:40
 * @LastEditors: kongaobo tkfor@foxmail.com
 * @LastEditTime: 2024-11-20 14:39:24
 */
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import Drawer from './src/index.vue'


Drawer.install = (app: { component: (arg0: string | undefined, arg1: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>) => void; }) => {
    app.component(Drawer.name, Drawer);
};
export const TDrawer = Drawer;

export default TDrawer;
