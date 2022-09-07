<script setup>
    import LaboratoriesItem from './LaboratoriesItem.vue';

    const props = defineProps({
        laboratories: {
            type: Array
        }
    })
</script>

<template>
    <ul class="content-list" v-if="laboratories.length !== 0">
        <li class="conten-element" v-for="lab in laboratories">
            <LaboratoriesItem :lab="lab"/>
        </li>
    </ul>
</template>

<style scoped>

</style>