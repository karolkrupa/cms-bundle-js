<script setup>
const {isOpen, open, close, teleportElement} = useModal()
import Modal, {useModal, modalProps} from "./Modal.vue";

const props = defineProps({
  ...{
    successUrl: {
      type: String,
      default: ''
    }
  },
  ...modalProps
})

function confirm() {
  window.location.href = props.successUrl
}
</script>

<template>

  <Teleport :to="teleportElement" v-if="isOpen">
    <Modal @close="close" @confirm="confirm" v-bind="props">
      <template v-slot:title>
        <slot name="title"></slot>
      </template>

      <template v-slot:text>
        <slot name="text"></slot>
      </template>

      <template v-slot:buttons="scope">
        <slot name="buttons" v-bind="scope"></slot>
      </template>
    </Modal>
  </Teleport>

  <slot name="activator" v-bind="{ open }">
    <button @click="open">OPEN</button>
  </slot>

</template>

<style scoped>

</style>