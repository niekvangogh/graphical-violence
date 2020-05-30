<template>
  <div>
    <div class="progress-bar"></div>

    <div class="videos">
      <div class="video" v-for="(video, index) in videoQueue" :key="index">
        {{ video }}
      </div>
    </div>

    <div class="buttons">
      <div class="help-button"></div>
      <div class="action-buttons">
        <button class="action-button delete"></button>
        <button class="action-button accept"></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Video extends Vue {
  private videos = [];

  private get videoQueue() {
    return ['test', 'test', 'test'];
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 40px 40px;
  
  .progress-bar {
    width: 100%;
  }

  .action-buttons {
    display: flex;
    justify-content: space-between;

    .action-button {
      height: 40px;
      width: 40px;
      border-radius: 50px;
      background-color: #131313;
    }
  }
}
</style>
