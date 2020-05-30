import Vue from 'vue'
import Modal from '@/components/shared/modal.vue'
import Overlay from '@/components/shared/overlay.vue'
import SquareButton from '@/components/shared/square-button.vue'
import FieldTextarea from '@/components/shared/field-textarea.vue'
import FieldInput from '@/components/shared/field-input.vue'
import FieldSelect from '@/components/shared/field-select.vue'

const sharedComponents = [
  Modal,
  Overlay,
  SquareButton,
  FieldTextarea,
  FieldInput,
  FieldSelect
]

sharedComponents.forEach((component) => {
  Vue.component(component.name, component)
})
