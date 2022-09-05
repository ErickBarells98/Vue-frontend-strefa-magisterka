<script setup>
    import { RouterLink } from 'vue-router';

    const props = defineProps({
        coursesForSemestr: {
            type: Array,
            default: 'empty'
        }
    })
</script>

<template>
        <div>
            <h2 class='h2--custom'>Semestr {{coursesForSemestr[0].SemesterNumber}}</h2>
            <h3 class='h3--custom'>{{coursesForSemestr[0].StudiesLevel}}</h3>
            <hr class='hr-list' />
            <ul class='ul-custom-list'>
                <li v-for="course in coursesForSemestr">
                    <RouterLink class="a--custom" :to="{name: 'CourseDetails', params: {id: course.ID}}">{{course.Name}} ( {{course.StudiesTYpe}} | {{course.FieldOfStudyName}} )</RouterLink>
                </li>
            </ul>
        </div>
</template>

<style>

</style>