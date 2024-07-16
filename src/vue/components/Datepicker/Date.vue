<script setup>
import VueDatePicker from '@vuepic/vue-datepicker'
import {ref, defineProps, computed} from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: false,
    default: null
  },
  invalid: {
    type: Boolean,
    default: false
  },
  time: {
    type: Boolean,
    default: false
  },
  monthPicker: {
    type: Boolean,
    default: false
  }

})

let date = ref(props.value)
const state = computed(() => props.invalid ? false : null)
const modelFormat = computed(() => {
  if(props.monthPicker) {
    return 'yyyy-MM'
  }

  if (props.time) {
    return 'yyyy-MM-dd HH:mm'
  }

  return 'yyyy-MM-dd'
})
const enableTimePicker = computed(() => !props.monthPicker && props.time)
</script>

<template>
  <VueDatePicker
      :is-24="true"
      :teleport="true"
      :state="state"
      :name="name"
      :format="modelFormat"
      :enable-time-picker="enableTimePicker"
      v-model="date"
      :model-type="modelFormat"
      :month-picker="monthPicker"
      locale="pl-PL"
      select-text="Wybierz"
      cancel-text="Anuluj"
  />
</template>

<style scoped>

</style>