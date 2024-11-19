<script setup>
import {ref, onMounted, getCurrentInstance, watch} from 'vue'

const isOpen = defineModel('isOpen', {default: false})
const instance = getCurrentInstance()
const element = ref()

watch(isOpen, value => {
  if(value) {
    element.value.querySelector('.dropdown-content').classList.remove('hidden')
  }else {
    element.value.querySelector('.dropdown-content').classList.add('hidden')
  }
})

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div ref="element">
    <slot v-bind="{ isOpen, toggle, contentClass: { hidden: !isOpen } }"></slot>
  </div>
</template>

<style scoped>

</style>