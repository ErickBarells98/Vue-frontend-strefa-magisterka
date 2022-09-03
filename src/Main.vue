<script setup>
    import { RouterView } from 'vue-router'
    import { inject } from 'vue';

    const { loading, initialLoadData } = inject('store');
</script>

<template>
    <RouterView v-if="!initialLoadData && !loading"/>
</template>

