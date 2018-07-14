<template>
  <div>
    <app-header></app-header>
    <app-main>
      <router-view />
    </app-main>
    <app-footer></app-footer>
  </div>
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Aside from '../components/Aside'

export default {
  components: {
    'app-header': Header,
    'app-main': Main,
    'app-footer': Footer,
    'app-aside': Aside
  }
}
</script>
<style>
</style>
