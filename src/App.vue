<script setup>
import Navbar from './views/navbar/Navbar.vue'
import Footer from './views/footer/Footer.vue'
import { onMounted, provide, watchEffect, ref } from 'vue';
import store from '@/store/userstore.js';
import Main from './Main.vue';

provide('store', store);

onMounted(() => {
  store.fetchUserByRefreshToken();
})
</script>

<template>
  <Navbar />
  <div class="main-content">
       <Main></Main>
  </div>
  
  <Footer></Footer>
</template>

<style scoped>
  .main-content{
    min-height: 300px;
  }
</style>
