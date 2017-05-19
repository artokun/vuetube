<template>
  <ul class="list-group">
    <li class="list-group-item text-left" v-for="result in results" @click="play(result.id.videoId)">
      <img :src="result.snippet.thumbnails.default.url" :alt="result.snippet.title">
      <strong>{{result.snippet.title}}</strong>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'results-list',
  computed: {
    ...mapGetters('search', [
      'results'
    ])
  },
  methods: {
    ...mapActions('player', [
      'play'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .list-group-item {
    display: flex;
    align-items: center;

    img {
      margin-right: 15px;
    }
  }
</style>
