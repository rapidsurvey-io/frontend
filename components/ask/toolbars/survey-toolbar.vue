<template>
  <action-wrapper>
    <span @click.prevent="$emit('edit')" title="Edit Survey">
      <icon-button icon="pen" />
    </span>

    <span @click.prevent="$emit('delete')" title="Delete Survey">
      <icon-button icon="trash-alt" />
    </span>
  </action-wrapper>
</template>
