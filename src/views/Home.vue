<template>
  <v-container>
    <v-row class="content">
      <v-col class="content__blog" cols="12" md="8">
        <blog-content />
      </v-col>
      <v-col class="content__sidebar" cols="12" md="4">
        <side-bar />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BlogContent from '@/components/ArticleContent'
import SideBar from '@/components/SideBar'

export default {
  name: 'Home',
  components: {
    BlogContent,
    SideBar
  }
}
</script>

<style lang="scss" scoped>
 @import 'src/styles/views/home';
</style>
