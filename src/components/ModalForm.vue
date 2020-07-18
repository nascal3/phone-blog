<template>
  <v-card class="modal" light>
  <!--    modal top progress section-->
   <div class="modal__header">
     <div class="modal__header--text">Step 1 of 2</div>
     <div class="modal__header--progress">
       <span class="modal__header--progress-fill"></span>
     </div>
     <v-icon class="modal__header-close" @click="closeModal">mdi-close</v-icon>
   </div>

    <!--    modal body section-->
    <div class="modal__body d-flex align-center justify-center flex-column">
      <div class="modal__body--header">
        <h3>
          Enter Your Email To Get <span>FREE</span><br>
          iPhone Photography Email Tips:
        </h3>
      </div>

      <!--  modal form-->
      <v-form ref="form" id="modal-form" class="modal__body--form" v-model="valid" @submit.prevent="saveEmail">
        <v-text-field
          v-model="email"
          background-color="white"
          class="modal__body--form-input"
          :class="{ 'error-color': disableButton }"
          :label="message"
          :error="showErrorState"
          @keyup="checkEmailValidity"
          filled
        ></v-text-field>

        <!--  modal form submit button header-->
        <v-btn
          class="gradient-button"
          :class="{'disable-button': disableButton }"
          depressed
          block>
          Send Me The Tips
        </v-btn>
      </v-form>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'ModalForm',
  data: () => ({
    valid: false,
    email: '',
    message: 'Please enter your email here'
  }),
  watch: {
    showErrorState (state) {
      this.message = state ? 'Please enter valid email address' : 'Please enter your email here'
    }
  },
  computed: {
    showErrorState () {
      if (!this.email && !this.checkEmailValidity()) {
        return false
      } else if (this.email && !this.checkEmailValidity()) {
        return true
      }
      return false
    },
    disableButton () {
      return !this.checkEmailValidity()
    }
  },
  methods: {
    closeModal () {
      this.$store.commit('SHOW_DIALOG', false)
    },
    checkEmailValidity () {
      if (!this.email) return
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return pattern.test(this.email)
    },
    saveEmail () {
      this.valid = this.$refs.form.validate()
    }
  }
}
</script>

<style lang="scss">
  #modal-form {
    .error-color .v-text-field__slot input {
      color: $error !important;
    }
    .v-input__slot {
      box-shadow: inset 0px 1px 5px rgba(142, 142, 142, 0.5) !important;
    }
  }
</style>
<style lang="scss" scoped>
  @import 'src/styles/layouts/modalForm';
</style>
