<template>
  <div>
    <video
      id="video"
      autoplay
      no-controls
      :src="playingVideo"
      :loop="loop"
      style="width: 100%;"
    ></video>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Socket } from "vue-socket.io-extended";

@Component
export default class Index extends Vue {
  private playingVideo: string | null = null;
  private loop: boolean = false;

  @Socket()
  connect() {
    console.log("connection established");
  }

  @Socket("play_video")
  onUpdate(videoInfo: any) {
    console.log(videoInfo);
    let dir: string = "/blurred";
    if (videoInfo.hasOwnProperty("publish")) {
      dir = videoInfo.publish ? "/keep" : "/delete";
    }

    this.playingVideo = "";
    this.$nextTick(() => {
      this.playingVideo = `/assets/videos${dir}/${videoInfo.id}.mp4`;
    });
    this.$forceUpdate();
  }

  private get video(): HTMLVideoElement {
    return document.getElementById("video") as HTMLVideoElement;
  }

  private mounted() {
    const video = this.video;
    video.onended = () => {
      console.log("ended?");
      this.$socket.client.emit("next_video");
    };
  }

  // next_video
}
</script>
<style lang="scss">
body {
  background: black;
}
</style>
