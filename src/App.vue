<template>
  <v-app>
    <v-main>
      <v-container ma-0 pa-0 fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import 'styles/base/global';
</style>
