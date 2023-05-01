<script lang="ts">
import fetchURL from '../fetchURL';
import NavComponent from './NavComponent.vue';
import AnswersList from './AnswersList.vue';

interface Answers {
  answers: string[],
  points: number,
  date: string,
}

export default {
  name: 'HistoryComponent',
  data: () => ({
    answers: [] as unknown as Answers[],
  }),
  methods: {
    async fetchData() {
      const response = await fetch(fetchURL);
      const data = await response.json();
      if (!data) { return; }
      Object.keys(data).forEach((id) => {
        const answer = {
          answers: data[id].answers,
          points: data[id].points,
          date: data[id].date,
        };
        this.answers.unshift(answer);
      });
    },
  },

  created() {
    this.fetchData();
  },
  components: {
    NavComponent, AnswersList,
  },
};
</script>

<template>
  <div class="wrapper">
    <NavComponent />
    <div class="history">
      <div
        class="chunk"
        v-for="(answer, index) in answers"
        :key="index">
        <AnswersList :answers="answer.answers" :date="answer.date" :points="answer.points" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.history {
  display:flex;
  flex-direction: column;
  gap:10px;
  width:100%;
  text-align: left;
  .chunk {
    border: 2px solid gray;
  }
}
</style>
