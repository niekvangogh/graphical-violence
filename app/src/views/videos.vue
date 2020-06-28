<template>
  <div class="background">
    <div class="wrapper">
      <div class="progress-bar">
        <div class="indicator"></div>
      </div>

      <div class="videos">
        <div class="video" v-for="(video, index) in videoQueue" :key="video.id">
          <video
            width="100%"
            :class="{ 'currently-playing': index === 0, video: video.path }"
            :src="video.path"
          >
            {{ index }}
          </video>
        </div>
      </div>

      <div class="buttons">
        <div class="help-button">
          <button>?</button>
        </div>
        <div class="action-buttons">
          <button
            class="action-button delete"
            :disabled="isVideoPlaying || hasVoted"
            @click="deleteVideo"
          >
            ❌
          </button>
          <button
            class="action-button accept"
            :disabled="isVideoPlaying || hasVoted"
            @click="publishVideo"
          >
            ✅
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Socket } from 'vue-socket.io-extended';

@Component
export default class Videos extends Vue {
  private videos = [
    {
      path: '/assets/videos/video2.mp4',
      id: 2,
    },
    {
      path: '/assets/videos/video1.mp4',
      id: 1,
    },
    {
      path: '/assets/videos/video3.mp4',
      id: 3,
    },
  ];

  private isVideoPlaying: boolean = false;
  private hasVoted: boolean = false;
  private canGoNext: boolean = false;

  private get videoQueue() {
    return this.videos.slice(0, 3);
  }

  private getCurrentVideo(): HTMLVideoElement {
    return document.getElementsByClassName('currently-playing')[0] as HTMLVideoElement;
  }

  private publishVideo() {
    this.finish(true);
  }

  private deleteVideo() {
    this.finish(false);
  }

  private finish(publish: boolean) {
    const video: any = this.videos.splice(0, 1)[0];
    this.canGoNext = true;
    this.hasVoted = true;

    this.$socket.client.emit('submit_video', {
      id: video.id,
      publish,
    });
  }

  @Socket('next_video')
  private nextVideo() {
    if (this.canGoNext) {
      this.playVideo();
      this.canGoNext = false;
    }
  }

  private playVideo() {
    const video = this.getCurrentVideo();
    if (!video) {
      this.$router.push({ name: 'nda' });
      return;
    }

    this.hasVoted = false;
    this.isVideoPlaying = true;
    video.play();
    this.$socket.client.emit('play_video', {
      id: this.videoQueue[0].id,
    });
    video.onended = () => this.onVideoEnd();
  }

  private onVideoEnd() {
    this.isVideoPlaying = false;
    this.hasVoted = false;
    const video = this.getCurrentVideo();
  }

  private mounted() {
    setTimeout(() => {
      this.playVideo();
    });
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
