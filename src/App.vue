<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView v-slot="slotProps">
    <Transition name="fade" mode="out-in">
      <Component :is="slotProps.Component" />
    </Transition>
  </RouterView>
</template>

<style lang="scss">
  .fade-leave-to,
  .fade-enter-from {
    opacity:0;
  }
  .fade-leave-from,
  .fade-enter-to {
    opacity:1;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .1s ease-in-out;
  }
  .wrapper {
    height:93vh;
    width:500px;
  }
  @media (max-width: 500px) {
  .wrapper {
    width: 100vw;
  }
}
</style>
