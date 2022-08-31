<script setup>
import { RouterView } from 'vue-router'
import Navbar from './views/navbar/Navbar.vue'
import Footer from './views/footer/Footer.vue'
</script>

<template>
  <Navbar />
  <div class="main-content">
    <RouterView />
  </div>
  
  <Footer />
</template>

<style scoped>
  .main-content{
    min-height: 300px;
  }
</style>
