import Vue from 'vue'
import MainNavigator from '@/components/navigation/main-navigator.vue'
import Modal from '@/components/shared/modal.vue'
import Overlay from '@/components/shared/overlay.vue'
import PageHero from '@/components/shared/page-hero.vue'
import PageContent from '@/components/shared/page-content.vue'
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
import EditableElement from '@/components/shared/editable-element.vue'
import Card from '@/components/shared/card.vue'

const sharedComponents = [
  MainNavigator,
  Modal,
  Overlay,
  PageHero,
  PageContent,
  SquareButton,
  FieldTextarea,
  FieldInput,
  FieldSelect,
  FieldColourPicker,
  ActionWrapper,
  IconButton,
  TabButton,
  PageHeader,
  Breadcrumb,
  EditableElement,
  Card
]

sharedComponents.forEach((component) => {
  Vue.component(component.name, component)
})
