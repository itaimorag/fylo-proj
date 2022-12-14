<template>
  <section class="app-container container">
    <app-header />
    <router-view />
    <app-footer />
  </section>
</template>

<script>
import appHeader from './components/app-header.vue'
import appFooter from './components/app-footer.vue'
export default {
  name: 'app',
  created() {
    // this.$store.dispatch({ type: 'loadToys' })
  },
  methods: {
    clicked() {
      alert('I got clicked!')
    },
  },
  components: {
    appHeader,
    appFooter,
  },
}
</script>
