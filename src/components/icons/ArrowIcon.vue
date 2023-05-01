<script lang="ts">

export default {
  name: 'ArrowIcon',
  props: ['expanded'],
  computed: {
    rotate() {
      return this.expanded ? 'rotated' : '';
    },
  },
};
</script>
<template>
  <svg
    viewBox="0 0 25 25"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
    :class="rotate"
  >
    <path d="M9.32283 20.7501L16.1145 13.9584C16.9165 13.1563 16.9165 11.8438 16.1145 11.0417L9.32283 4.25006" stroke="#fff" stroke-width="2.08333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

</template>

<style lang="scss" scoped>
svg {
  transform: scaleX();
  padding:10px;
  transition: transform .15s ease-in-out;
}

svg.rotated{
  transform: scaleX(-1);
}
</style>
