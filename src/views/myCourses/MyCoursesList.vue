<script setup>
    import MyCourseResults from './MyCourseResults.vue';

    const props = defineProps({
        myCourses: {
            type: Array
        }
    })
</script>

<template>
    <div class="course-results-list" v-if="myCourses.length !== 0">
        <div v-for="course in myCourses">
            <MyCourseResults :item="course" />
        </div>
    </div>
    <div v-else>
        Nie ma żadnych aktualnych laboratoriów do wyświetlenia.
    </div>
</template>

<style scoped>
    .course-results-list{
        margin-top: 30px;
    }
</style>