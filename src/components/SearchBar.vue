<template>
  <div class="search-bar">
    <div class="form-group">
      <input type="text" class="form-control" id="search" placeholder="Search cat vids" v-model="query" @keyup="search(query)">
    </div>
    You typed {{ query ? query : 'nothing...'}} <br>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'search-bar',
  data () {
    return {
      query: ''
    }
  },
  methods: {
    ...mapActions('search', [
      'search'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>
