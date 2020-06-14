<template>
  <action-wrapper>
    <span @click.prevent="$emit('edit')">
      <icon-button icon="pen" />
    </span>

    <span @click.prevent="$emit('delete')">
      <icon-button icon="trash-alt" />
    </span>
  </action-wrapper>
</template>
