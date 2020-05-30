<template>
  <div class="background">
    <div class="wrapper">
      <div class="progress-bar">
        <div class="indicator"></div>
      </div>

      <div class="videos">
        <div class="video" v-for="(video, index) in videoQueue" :key="video">
          <video width="100%" :src="video">{{ index }}</video>
        </div>
      </div>

      <div class="buttons">
        <div class="help-button">
          <button>?</button>
        </div>
        <div class="action-buttons">
          <button class="action-button delete">❌</button>
          <button class="action-button accept" @click="publish">✅</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Video extends Vue {
  private videos = [
    '/assets/videos/video1.mp4',
    '/assets/videos/video2.mp4',
    '/assets/videos/video3.mp4',
  ];

  private get videoQueue() {
    return this.videos;
  }

  private publish() {
    const publishedVideo = this.videos[0];
    this.videos.splice(0, 1);
    // this.videos.push('/assets/videos/video1.mp4');
  }

  private startVideo() {}
}
</script>

<style lang="scss" scoped>
.background {
  background-image: url('../assets/images/background1.png');
  background-size: contain;
  height: 100%;
}

.wrapper {
  padding: 40px 60px;

  .progress-bar {
    background-color: #896d6d;
    width: 100%;
    height: 15px;
    border-radius: 4px;
    margin: 40px 0;

    .indicator {
      border-radius: 4px;
      background-color: #171717;
      height: 15px;
      width: 40%;
    }
  }

  .videos {
    position: relative;
    margin-top: 100px;
    margin-bottom: 50px;
    height: 400px;

    .video {
      position: absolute;
      transition: all 0.3s;

      @for $i from 1 through 20 {
        &:nth-child(#{$i}) {
          $zIndex: 100 - $i;
          $incrementalValue: $i * 20;
          $opacity: 1.2 - ($incrementalValue * 0.01);

          opacity: $opacity;
          z-index: $zIndex;

          left: #{$incrementalValue}px;
          right: #{$incrementalValue}px;
          top: -#{$incrementalValue}px;
        }
      }

      video {
        border-radius: 10px;
      }
    }
  }

  .buttons {
    .help-button {
      text-align: center;
      button {
        width: 50px;
        height: 50px;
        border-radius: 50px;

        color: white;

        outline: none;
        border: 0;

        background-color: #131313;
      }
    }

    .action-buttons {
      margin-top: 50px;
      text-align: center;
      display: block;

      .action-button {
        outline: none;
        border: 0;
        margin: 0 20px;

        font-size: 30px;
        height: 100px;
        width: 100px;

        border-radius: 50px;
        background-color: #131313;
      }
    }
  }
}
</style>
