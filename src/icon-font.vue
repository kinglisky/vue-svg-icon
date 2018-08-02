<template>
  <svg class="common-icon" aria-hidden="true">
    <use :xlink:href="'#icon-' + name"></use>
  </svg>
</template>

<script>
export default {
  props: ['name']
}
</script>


<style>
.common-icon {
  overflow: hidden;
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;

  fill: currentColor;
}
</style>

