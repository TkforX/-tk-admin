<template>
  <div>
    <button @click="handleClick">test_close</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["params", "onClose", "callBack"]);

const handleClick = () => {
  props.onClose();
  props.callBack(123);
};
</script>

<style scoped></style>
