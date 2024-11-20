<!--
 * @Date: 2024-11-12 15:55:30
 * @LastEditors: kongaobo tkfor@foxmail.com
 * @LastEditTime: 2024-11-20 14:53:36
-->
<script lang="ts" setup>
import { Drawer } from "@tk/components";
import { defineAsyncComponent } from "vue";
defineOptions({ name: "App" });

const handleClick = () => {
  Drawer({
    title: "测试抽屉",
    params: { a: 1 },
    component: defineAsyncComponent(() => import("./test.vue")),
    callBack: (params) => {
      console.log(`params -->`, params);
    },
  });
};
</script>
<template>
  <button @click="handleClick">test_drawer</button>
</template>
