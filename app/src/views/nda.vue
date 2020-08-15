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
      <div class="footer-buttons">
        <button @click="start">FINISH</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Socket } from 'vue-socket.io-extended';

@Component
export default class Index extends Vue {
  private start() {
    this.$router.push({ name: 'index' });
  }

  @Socket()
  connect() {
    this.$socket.client.emit('play_video', {
      id: 'end',
    });
  }

  mounted() {
    this.$socket.client.emit('play_video', {
      id: 'end',
    });
  }
}
</script>

<style lang="scss" scoped>
.background {
  background-image: url('../assets/images/background3.png');
  background-size: contain;
  height: 100%;
}

.wrapper {
  padding: 130px 100px;
  text-align: center;

  .title {
    font-size: 45px;
    line-height: 40px;
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
    font-family: Monument Extended Regular;
    background: white;
    color: black;
    border-radius: 10px;
    padding: 35px 50px;
    border: 0;
    font-size: 30px;
    font-weight: 700;
    float: right;
    margin-top: 275px;
  }
}
</style>
