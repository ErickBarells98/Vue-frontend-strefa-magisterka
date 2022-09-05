<script setup> 
    import jwtAxios from '../../utils/jwtAxios';
    import store from '@/store/userstore.js';
    import { inject, onMounted, reactive, ref } from 'vue';
    import CoursesList from './CoursesList.vue'

    const { userState } = inject('store');

    const mySemestrCourses = reactive([]); 
    const restCourses = reactive([]);

    const isLoadingMySemestrCourses = ref(true);
    const isLoadingMyRestCourses = ref(true);

    const fetchCourses = () => {
        jwtAxios.get('/api/Course/getCourses?semestr='+true,{context:store})
        .then((response) => {
            Object.assign(mySemestrCourses,response.data)
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            isLoadingMySemestrCourses.value = false;
        })

        jwtAxios.get('/api/Course/getCourses?semestr='+false,{context:store})
        .then((response) => {
            Object.assign(restCourses,response.data)
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            isLoadingMyRestCourses.value = false;
        })
    }

    onMounted(() => {
        fetchCourses();
    })
</script>

<template>
    <div class="container-custom">
        <h1 class="h1--custom">Kursy</h1>
        <div className='courses-tabs'>
            <b-tabs content-class="mt-3" class="nav-tabs--custom coursesTab">
                <b-tab title="Mój semestr" active>
                    <div class="container-list" v-if="!isLoadingMySemestrCourses">
                        <CoursesList :courses="mySemestrCourses" />
                    </div>
                </b-tab>
                <b-tab title="Pozostałe">
                    <div class="container-list" v-if="!isLoadingMyRestCourses">
                        <CoursesList :courses="restCourses" />
                    </div>
                </b-tab>
            </b-tabs>
        </div>
    </div>
</template>

<style scoped>
    .container-custom{
        margin-top: 20px;
    }
</style>