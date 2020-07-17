<template>
  <section>
    <v-row class="blog-content">
      <v-col class="blog-content__article" cols="12" md="8">
        <blog-content />
      </v-col>
      <v-col class="blog-content__sidebar" cols="12" md="4">
        <side-bar />
      </v-col>
    </v-row>
  </section>
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
