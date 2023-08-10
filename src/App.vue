<template>
<NavbarComponent/>
<router-view></router-view>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavbarComponent from './components/NavbarComponent.vue';

export default {
  name: 'App',
  components : {
    NavbarComponent
  }
}
</script>
<style scoped>

</style>
