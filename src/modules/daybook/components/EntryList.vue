<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="text" class="form-control" placeholder="Search Entry" v-model="term" />
    </div>

    <div class="entry-scrollarea">
      <Entry v-for="item in entriesByTerm" :key="item.id"></Entry>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Entry: defineAsyncComponent(() => import('./Entry.vue'))
  },
  computed: {
    ...mapGetters('journal', ['getEntiresByTerm']),
    entriesByTerm() {
      return this.getEntiresByTerm(this.term)
    }
  },
  data() {
    return {
      term: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}
.entry-scrollarea {
  height: calc(100vh - 115px);
  overflow: scroll;
}
</style>
