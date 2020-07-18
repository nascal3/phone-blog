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
    <v-overlay light :value="showDialog">
      <modal-form/>
    </v-overlay>
  </section>
</template>

<script>
import BlogContent from '@/components/ArticleContent'
import SideBar from '@/components/SideBar'
import ModalForm from '@/components/ModalForm'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    BlogContent,
    SideBar,
    ModalForm
  },
  computed: {
    ...mapGetters({
      showDialog: 'showDialog'
    })
  }
}
</script>

<style lang="scss" scoped>
 @import 'src/styles/views/home';
</style>
