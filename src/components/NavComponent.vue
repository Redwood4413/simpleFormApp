<script lang="ts">
import BaseButton from './UI/BaseButton.vue';

export default {
  name: 'NavComponent',
};
</script>

<template>
  <div class="buttons">
    <RouterLink :to="{ name: 'home' }">Inwentarz</RouterLink>
    <RouterLink :to="{ name: 'historia' }">Historia</RouterLink>
  </div>
</template>

<style lang="scss">

  .buttons {
    display:flex;
    width:100%;
    a{
      padding:0;
      width:100%;
      padding:20px;
      margin:0;
      width:100%;
      color:white;
      transition: background .3s ease-in-out;
      &:hover:not(.router-link-exact-active) {
        background: rgb(255, 255, 255, 0.1);
        color:white;
      }
    }
  }
  .router-link-exact-active {
    background: rgb(25, 146, 43);
    &:hover {
      color:white;
    }

  }
</style>
