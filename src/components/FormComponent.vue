<script lang="ts">
import queries from '../queries';
import fetchURL from '../fetchURL';
import BaseButton from './UI/BaseButton.vue';
import NavComponent from './NavComponent.vue';

export default {
  name: 'FormComponent',
  data: () => ({
    queries,
    answers: [] as string[],
    sumPoints: 0 as number,
    isInvalid: false,
    isSuccess: false,
    isError: false,
  }),
  methods: {
    validate() {
      if (this.answers.length === this.queries.length) {
        this.isInvalid = false;
      } else {
        this.isInvalid = true;
        setTimeout(() => {
          this.isInvalid = false;
        }, 5000);
      }
    },
    clearInputs() {
      this.answers = [];
    },
    submitData() {
      if (this.isInvalid) return;
      this.sendData();
      this.clearInputs();
    },
    async sendData() {
      const settings = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answers: this.answers,
          points: this.sumPoints,
          date: this.getDate(),
        }),
      };
      try {
        const response = await fetch(fetchURL, settings);
        if (response.status !== 200) { throw new Error(); }
        this.isSuccess = true;
        setTimeout(() => {
          this.isSuccess = false;
        }, 5000);
      } catch (error) {
        this.isError = true;
        setTimeout(() => {
          this.isError = false;
        }, 5000);
      }
    },
    getDate(): string {
      const date = Date.now();
      const dateSettings = {
        minute: 'numeric',
        hour: 'numeric',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      };
      // @ts-ignore
      return new Intl.DateTimeFormat('pl-PL', dateSettings).format(date);
    },
    calculatePoints() {
      this.sumPoints = 0;
      this.answers.forEach((point) => {
        const value = Number(point);
        this.sumPoints += value;
      });
    },
  },
  watch: {
    answers: {
      handler() {
        this.calculatePoints();
      },
      deep: true,
    },
  },
  components: { BaseButton, NavComponent },
};
</script>

<template>
  <div class="wrapper">
    <NavComponent />
    <form @submit.prevent="submitData">
      <div class="info">
        <span>0 - Wcale</span>
        <span>1 - Czasami</span>
        <span>2 - Często</span>
        <span>3 - Przez większość czasu</span>
      </div>
      <div class="alerts" v-if="isInvalid || isSuccess || isError">
        <div class="success" v-if="isSuccess">Twój wpis został dodany.</div>
        <div class="error" v-else-if="isInvalid">Zaznacz wszystkie pola!</div>
        <div class="error" v-else-if="isError">Coś poszło nie tak</div>
      </div>
      <ol class="list">
        <li v-for="(query, index) in queries" :key="index" class="query">
          <span>{{ query }}</span>
          <div class="answers">
            <div class="answer">
              <input
                :id="`${index}/0`"
                type="radio"
                value="0"
                :name="`answer-${index}`"
                v-model="answers[index]"
              >
              <label :for="`${index}/0`" tabindex="0">0</label>
            </div>

            <div class="answer">
              <input
                :id="`${index}/1`"
                type="radio"
                value="1"
                :name="`answer-${index}`"
                v-model="answers[index]"
              >
              <label :for="`${index}/1`" tabindex="0">1</label>
            </div>
            <div class="answer">
              <input
                :id="`${index}/2`"
                type="radio"
                value="2"
                :name="`answer-${index}`"
                v-model="answers[index]"
              >
              <label :for="`${index}/2`" tabindex="0">2</label>
            </div>
            <div class="answer">
              <input
                :id="`${index}/3`"
                type="radio"
                value="3"
                :name="`answer-${index}`"
                v-model="answers[index]"
              >
              <label :for="`${index}/3`" tabindex="0">3</label>
            </div>
          </div>
        </li>
      </ol>
      <div class="footer">
        <span>Suma: {{ sumPoints }}</span>
        <BaseButton type="submit" @click="validate">Wyślij</BaseButton>
      </div>

    </form>
  </div>

</template>

<style lang="scss" scoped>
form {
  text-align: left;
  display:flex;
  flex-direction: column;
  align-items: center;
  height:84vh;
  width:100%;
  border: 2px solid gray;
  .info {
    display:flex;
    border-bottom: 2px solid gray;
    overflow-y: hidden;
    min-height: 35px;
    max-width: 100%;
    overflow-x: auto;
    white-space: nowrap;
    span {
      padding:5px 10px;
      border-right: 2px solid gray;
      &:last-child {
        border: 0;
      }
    }
  }
  .alerts {
    font-weight: 700;
    text-align: center;
    width:100%;
    border-bottom: 2px solid gray;
    .success {
      color: rgb(45, 187, 45);
    }
    .error {
      color: rgb(187, 45, 45);
    }
  }
  .footer {
    border-top: 2px solid gray;
    width:100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:10px;
  }
  .list {
    display: flex;
    flex-direction: column;
    overflow-x: auto;
      .query {
        padding:10px;
        border-bottom: 1px solid gray;
        width: 90%;
        &:last-child{
          border:0;
        }
        .answers {
          display:flex;
          justify-content: center;
          gap:20px;
          padding:10px;
          width:50%;
          .answer {
            cursor: pointer;
            display:flex;
            flex-direction: column;
            align-items: center;
            aspect-ratio: 1/1;
            border-radius: 50%;
            label {
              height:30px;
              width:30px;
              display:flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
              cursor: pointer;
              user-select: none;
              background: rgb(59, 59, 59);
            }
            input[type="radio"] {
              display: none;
              &:checked + label {
                background-color: rgb(25, 146, 43);
              }
            }
          }
        }
      }
    button {
      margin-top: 20px;
      width:150px;
      align-self: center;
    }
  }
}

</style>
