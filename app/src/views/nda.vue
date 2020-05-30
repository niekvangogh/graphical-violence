<template>
  <div class="background">
    <div class="wrapper">
      <h1 class="title">
        NON-DISCLOSURE AGREEMENT
      </h1>
      <div class="warning">
        <p>
          With finishing this experience
          <span class="bold">you are prohibited to share any information about the content.</span>
        </p>
      </div>
    </div>
    <div class="footer-buttons">
      <button @click="start">FINISH</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Index extends Vue {
  private start() {
    this.$router.push({ name: 'index' });
  }
}
</script>

<style lang="scss" scoped>
.background {
  background-image: url('../assets/images/background1.png');
  background-size: contain;
  height: 100%;
}

.wrapper {
  padding: 130px 100px;
  text-align: center;

  .title {
    font-size: 60px;
    font-weight: 700;
    line-height: 70px;
    margin-bottom: 90px;
  }

  .warning {
    p {
      margin: 30px 0;
      font-size: 27px;
    }

    .bold {
      font-weight: 700;
    }
  }
}

.footer-buttons {
  button {
    border-radius: 10px;
    padding: 35px 50px;
    border: 0;
    font-size: 30px;
    font-weight: 700;
    margin-right: 40px;
    float: right;
  }
}
</style>
