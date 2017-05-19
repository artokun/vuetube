<template>
  <div class="video-player text-center">
    <div v-if="!videoId" class="no-video">
      Select a video!
    </div>
    <iframe v-if="videoId" width="560" height="315" :src="`https://www.youtube.com/embed/${videoId}`" frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'video-player',
  computed: {
    ...mapGetters('player', [
      'videoId'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .video-player {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
  }
  .no-video {
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 315px;
    width: 560px;
    color: white;
    font-weight: bold;
    font-size: 20px;
  }
</style>
