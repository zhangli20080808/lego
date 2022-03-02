<template>
  <div class="app-container">
    <router-view/>
  </div>
</template>

<script lang="ts">
/**
https://imooc-lego.yuque.com/books/share/a8088dbe-5952-445c-982d-3808da620795?# 《研发规范》
需求：
https://imooc-lego.yuque.com/books/share/af79538c-09eb-4ddd-bfb7-599816c233bf?# 《需求》

https://imooc-lego.yuque.com/books/share/dc22e979-74b0-4e88-a04b-1b0e93ec0ef5?# 《技术方案》 */
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
})
</script>

<style>
.page-title {
  color: #fff;
}
</style>
