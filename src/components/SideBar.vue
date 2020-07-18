<template>
  <section class="sidebar">
    <v-btn
      class="gradient-button"
      depressed
      block
      @click="openDialog">
      send me the tips
    </v-btn>
  </section>
</template>

<script>
export default {
  name: 'SideBar',
  methods: {
    openDialog () {
      this.$store.commit('SHOW_DIALOG', true)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/styles/layouts/sideBar';
</style>
