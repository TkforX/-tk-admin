/*
 * @Date: 2024-11-20 14:22:13
 * @LastEditors: kongaobo tkfor@foxmail.com
 * @LastEditTime: 2024-11-20 14:51:34
 */
import { createVNode, render, defineComponent, h, ref } from "vue";
import { ElDrawer } from "element-plus";

interface DrawerOptions {
  component: any; // 动态组件
  title?: string; // Drawer 标题
  size?: string; // Drawer 宽度
  params?: Record<string, any>; // 传递给组件的参数
  callBack?: (params:any)=>any;
}

export const Drawer = (options: DrawerOptions) => {
  const { component, title = "", size = "50%", params = {} ,callBack} = options;
  
  const drawer=ref(true)
  
  const container = document.createElement("div");
  document.body.appendChild(container);

  const closeDrawer = () => {
    render(null, container);
    document.body.removeChild(container);
    drawer.value=false;
};

  const returnParams = (params:any): void => {
    if(callBack){
        callBack(params)  
    }    
   }
 
  const DrawerComponent = defineComponent({
    setup() {
      return () => (
        <ElDrawer
          modelValue={drawer.value}
          title={title}
          size={size}
          onClose={closeDrawer}
        >
          {h(component, { ...params, onClose: closeDrawer,callBack:returnParams })}
        </ElDrawer>
      );
    },
  });

  const vnode = createVNode(DrawerComponent);
  render(vnode, container);

  return {
    close: closeDrawer,
  };
};
