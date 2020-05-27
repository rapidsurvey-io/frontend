import Vue from 'vue'
import Modal from '@/components/shared/modal.vue'
import Overlay from '@/components/shared/overlay.vue'

const sharedComponents = [
  Modal,
  Overlay
]

sharedComponents.forEach((component) => {
  Vue.component(component.name, component)
})
