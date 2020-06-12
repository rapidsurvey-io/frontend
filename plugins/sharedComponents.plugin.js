import Vue from 'vue'
import Modal from '@/components/shared/modal.vue'
import Overlay from '@/components/shared/overlay.vue'
import SquareButton from '@/components/shared/square-button.vue'
import FieldTextarea from '@/components/shared/field-textarea.vue'
import FieldInput from '@/components/shared/field-input.vue'
import FieldSelect from '@/components/shared/field-select.vue'
import FieldColourPicker from '@/components/shared/field-colour-picker.vue'
import ActionWrapper from '@/components/shared/action-wrapper.vue'
import IconButton from '@/components/shared/icon-button.vue'
import TabButton from '@/components/shared/tab-button.vue'
import PageHeader from '@/components/shared/page-header.vue'
import Breadcrumb from '@/components/shared/breadcrumb.vue'

const sharedComponents = [
  Modal,
  Overlay,
  SquareButton,
  FieldTextarea,
  FieldInput,
  FieldSelect,
  FieldColourPicker,
  ActionWrapper,
  IconButton,
  TabButton,
  PageHeader,
  Breadcrumb
]

sharedComponents.forEach((component) => {
  Vue.component(component.name, component)
})
