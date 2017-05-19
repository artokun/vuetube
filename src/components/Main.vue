<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <SearchBar />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-8">
        <VideoPlayer />
      </div>
      <div class="col-sm-4">
        <ResultsList />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import VideoPlayer from '@/components/VideoPlayer'
import ResultsList from '@/components/ResultsList'

export default {
  name: 'hello',
  components: {
    SearchBar,
    VideoPlayer,
    ResultsList
  }
}
</script>

<style lang="scss" scoped>

</style>
