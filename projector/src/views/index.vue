<template>
  <video autoplay no-controls :src="playingVideo"></video>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Socket } from "vue-socket.io-extended";

@Component
export default class Index extends Vue {
  private playingVideo: string = "/assets/videos/keep/1.mp4";

  @Socket()
  connect() {
    console.log("connection established");
  }

  @Socket("play_video")
  onUpdate(videoInfo: any) {
    console.log(videoInfo);
    const dir: string = videoInfo.publish ? "keep" : "delete";
    this.playingVideo = `/assets/videos/${dir}/${videoInfo.id}.mp4`;
    this.$forceUpdate();
  }
}
</script>
