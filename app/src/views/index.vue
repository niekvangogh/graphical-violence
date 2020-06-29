<template>
  <div class="background">
    <div class="wrapper">
      <h1 class="title">
        PTSD ACKNOWLEDGMENT
      </h1>
      <div class="warning">
        <p>
          The following material contains graphic violence that can be disturbing for most of the
          viewers. The content can damage mental health and cause post-traumatic stress disorder
        </p>
        <p class="bold">
          With this acknowledgment, you are informed about the possible effects and agree to start
          the experience.
        </p>
      </div>
      <div class="footer-buttons">
        <button @click="start">AGREE</button>
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
  @Socket()
  connect() {
    console.log('CONNECTED');
    this.$socket.client.emit('play_video', {
      id: 'HOMEloop',
    });
  }

  @Socket('next_video')
  private nextVideo() {
    this.$socket.client.emit('play_video', {
      id: 'HOMEloop',
    });
  }

  mounted() {
    this.$socket.client.emit('play_video', {
      id: 'HOMEloop',
    });
  }

  private start() {
    this.$router.push({ name: 'videos' });
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
    font-size: 45px;
    font-weight: 700;
    line-height: 45px;
    margin-bottom: 90px;
  }

  .warning {
    p {
      margin: 30px 0;
      font-size: 27px;

      &.bold {
        font-weight: 700;
      }
    }
  }
}

.footer-buttons {
  margin-top: 100px;

  button {
    font-family: Monument Extended Regular;

    border-radius: 10px;
    padding: 35px 50px;
    border: 0;
    font-size: 30px;
    font-weight: 700;
    float: right;
  }
}
</style>
