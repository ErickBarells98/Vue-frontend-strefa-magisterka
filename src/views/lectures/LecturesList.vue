<script setup>
    import LecturesItem from './LecturesItem.vue';

    const props = defineProps({
        lectures: {
            type: Array
        }
    })
</script>

<template>
    <ul class="content-list" v-if="lectures.length !== 0">
        <li class="conten-element" v-for="lec in lectures">
            <LecturesItem :lec="lec"/>
        </li>
    </ul>
</template>

<style scoped>

</style>