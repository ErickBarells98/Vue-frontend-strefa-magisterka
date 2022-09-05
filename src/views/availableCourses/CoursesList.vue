<script setup>
    import CoursesItem from './CoursesItem.vue'

    const props = defineProps({
        courses: {
            type: Array,
            default: 'nothing'
        }
    })
</script>

<!-- Poprawki chce wprowadzic -->
<!-- Przetestowac podbijajac semestr dla ziomeczka -->
<template>
    <div v-if="courses.CourseDTOs !== undefined">
        <CoursesItem :coursesForSemestr="courses.CourseDTOs[1]" v-if="courses.CourseDTOs[1] !== undefined && courses.CourseDTOs[1].length !== 0"/>
        <CoursesItem :coursesForSemestr="courses.CourseDTOs[2]" v-if="courses.CourseDTOs[2] !== undefined && courses.CourseDTOs[2].length !== 0"/>
        <CoursesItem :coursesForSemestr="courses.CourseDTOs[3]" v-if="courses.CourseDTOs[3] !== undefined && courses.CourseDTOs[3].length !== 0"/>
        <CoursesItem :coursesForSemestr="courses.CourseDTOs[4]" v-if="courses.CourseDTOs[4] !== undefined && courses.CourseDTOs[4].length !== 0"/>
        <CoursesItem :coursesForSemestr="courses.CourseDTOs[5]" v-if="courses.CourseDTOs[5] !== undefined && courses.CourseDTOs[5].length !== 0"/>
        <CoursesItem :coursesForSemestr="courses.CourseDTOs[6]" v-if="courses.CourseDTOs[6] !== undefined && courses.CourseDTOs[6].length !== 0"/>
        <CoursesItem :coursesForSemestr="courses.CourseDTOs[7]" v-if="courses.CourseDTOs[7] !== undefined && courses.CourseDTOs[7].length !== 0"/>
    </div>
    <div v-else>
        Nie ma dostępnych kursów.
    </div>
</template>

<style scoped>

</style>