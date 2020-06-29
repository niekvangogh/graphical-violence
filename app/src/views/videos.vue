<template>
  <div class="background">
    <div class="wrapper">
      <div class="progress-bar">
        <div class="indicator" :style="{ width: progress + '%' }"></div>
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
          <div class="help" @click="$router.push({ name: 'help' })"></div>
        </div>
        <div class="action-buttons">
          <button
            class="action-button delete"
            :disabled="isVideoPlaying || hasVoted"
            @click="deleteVideo"
          ></button>
          <button
            class="action-button accept"
            :disabled="isVideoPlaying || hasVoted"
            @click="publishVideo"
          ></button>
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
  private progress: number = 0;

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
    this.progress = 0;

    video.play();

    this.$socket.client.emit('play_video', {
      id: this.videoQueue[0].id,
    });

    let count = 0;

    video.ontimeupdate = (event) => {
      let currentTime = event.timeStamp;
      var totalPlayed = 0;
      let played = video.played;
      for (var i = 0; i < played.length; i++) {
        totalPlayed += played.end(i) - played.start(i);
        this.progress = (totalPlayed / video.duration) * 100;
      }
    };
    video.onended = () => this.onVideoEnd();
  }

  private onVideoEnd() {
    this.isVideoPlaying = false;
    this.hasVoted = false;
    const video = this.getCurrentVideo();
  }

  private beforeMount() {
    const index = +this.$route.params.index;
    if (index == 0) {
      return;
    }
    this.videos = this.videos.splice(+index, +index);
  }

  private mounted() {
    setTimeout(() => {
      this.playVideo();
    }, 500);
  }
}
</script>

<style lang="scss" scoped>
.background {
  background-image: url('../assets/images/background2.png');
  background-size: contain;
  height: 100%;
}

.wrapper {
  padding: 5px 60px;

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
    margin-top: 160px;
    margin-bottom: 35px;
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
      .help {
        background: url('../assets/images/help.png') no-repeat;
        background-size: cover;
        border-radius: 50px;
        margin: 0 auto;
        width: 50px;
        height: 50px;
        color: white;

        outline: none;
        border: 0;

        background-color: #131313;
      }
    }

    .action-buttons {
      background: url('../assets/images/buttonwrapper.png') no-repeat;
      background-size: cover;

      margin: 0 auto;
      margin-top: 50px;

      text-align: center;
      display: block;
      position: relative;

      width: 215px;
      height: 100px;

      .action-button {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 33px;
        outline: none;
        border: none;

        &.delete {
          left: 30px;
          background: url('../assets/images/delete.png') no-repeat;
        }

        &.accept {
          right: 30px;
          background: url('../assets/images/publish.png') no-repeat;
        }
      }
    }
  }
}
</style>
