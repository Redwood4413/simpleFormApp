<script lang="ts">
import BaseButton from './UI/BaseButton.vue';
import queries from '../queries';

export default {
  name: 'AnswersList',
  props: ['answers', 'date', 'points'],
  data: () => ({
    isExpanded: false,
    queries,
  }),
  computed: {
    expanded() {
      return this.isExpanded ? 'expanded' : '';
    },
  },
  methods: {
    expand() {
      this.isExpanded = !this.isExpanded;
    },
  },
  components: {
    BaseButton,
  },
};
</script>

<template>
  <div class="answers">
    <div class="header">
      <span>Dodano: <span class="date">{{ date }}</span></span>
      <BaseButton mode="flat" @click="expand">
        Szczegóły
      </BaseButton>
    </div>
    <div :class="`queries ${expanded}`">
      <ol>
        <span class="summary">Suma: <span class="underline">{{ points }}</span></span>
        <li v-for="(query, index) in queries" :key="index" class="query">
          <span class="text">
            {{ index + 1 }}.
            {{ query }}: </span>
          <span class="points">{{ answers[index] }}</span>
        </li>
      </ol>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.answers {
  display:flex;
  flex-direction: column;
  .header {
    border-bottom: 2px solid gray;
    margin-bottom: -2px;
    display:flex;
    width:100%;
    justify-content: space-between;
    align-items: center;
    padding:10px;
    .date {
      color: rgb(255, 255, 255, 0.5);
    }
  }
  .queries {
    display:none;
    max-height:71vh;
    overflow-y: auto;
    &.expanded {
      display:flex;
    }
    .summary {
      display:flex;
      width:90%;
      gap:5px;
      justify-content: flex-end;
      .underline {
        border-bottom: 2px solid gray;
        padding:0 10px;
      }
    }
    .query {
      display:flex;
      padding:10px;
      border-bottom: 1px solid gray;
      justify-content: space-between;
      align-items: center;
      width: 92%;
        &:last-child {
          border:0;
        }
        .text {
          width:90%;
        }
      .points {
        display:flex;
        align-items: center;
        justify-content: center;
        width:30px;
        height:30px;
        border-radius:50%;
        background-color: rgb(19, 109, 32);
      }
      }
    }
  }
</style>
