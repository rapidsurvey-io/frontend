<template>
  <action-wrapper>
    <span title="Edit Survey" @click.prevent="$emit('edit')">
      <icon-button icon="pen" />
    </span>

    <span title="Delete Survey" @click.prevent="$emit('delete')">
      <icon-button icon="trash-alt" />
    </span>
  </action-wrapper>
</template>
