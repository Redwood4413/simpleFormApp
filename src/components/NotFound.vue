<script lang="ts">

export default {
  name: 'NotFound',
};
</script>

<template>
  <div class="not-found">
    <h1>Strony nie znaleziono.</h1>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height:100%;
  width:100%;
  a {
    background: rgb(68, 68, 68);
    color: white;
    padding:10px 20px;
    border-radius: 5px;
    &:hover {
      background: rgb(97, 97, 97);
    }
  }
}
</style>
