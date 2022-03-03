<template>
  <!-- 作为一个展示型组件， 最好以事件的形式提供一个回调，需要做什么事情，让接受事件的容器组件决定，主要是为了业务和逻辑的隔离 -->
  <div class="edit-wrapper" @click="onItemClick(id)" :class="{ active: active }">
    <div class="edit-del" v-if="active" @click="onDelItem(id)">
      <span class="iconfont icon-delete1"></span>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ['set-active','del-item'],
  setup(props, context) {
    const onItemClick = (id: string) => {
      context.emit('set-active', id)
    }
    const onDelItem = (id: string) => {
      context.emit('del-item', id)
    }
    return {
      onItemClick,
      onDelItem
    }
  }
})
</script>

<style scoped>
.edit-wrapper {
  padding: 0px;
  cursor: pointer;
  border: 1px solid transparent;
  user-select: none;
  position: relative;
}
.edit-del{
  position: absolute;
  right: 0;
  bottom: 0;
}

.edit-wrapper:hover {
  border: 1px dashed #ccc;
}
.edit-wrapper.active {
  border: 1px solid #1890ff;
  user-select: none;
  z-index: 1500;
}
</style>