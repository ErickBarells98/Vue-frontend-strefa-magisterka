<script setup>
    import jwtAxios from '../../utils/jwtAxios';
    import store from '@/store/userstore.js';
    import { onMounted, reactive, ref } from 'vue';
    import MyCoursesList from './MyCoursesList.vue';

    const myActiveCoursesData = reactive([]);
    const myHistoricCoursesData = reactive([]);

    const myActiveisLoading = ref(true);
    const myHistoricisLoading = ref(true);

    const fetchData = () => {
        jwtAxios.get(`/api/MyCourse/GetAllActiveCourses`,{context:store})
        .then((response) => {
            Object.assign(myActiveCoursesData,response.data)
        })
        .catch((err) => console.log(err))
        .finally(() => {
            myActiveisLoading.value = false;
        })

        jwtAxios.get(`/api/MyCourse/GetAllHistoricCourses`,{ context:store})
        .then((response) => {
            Object.assign(myHistoricCoursesData,response.data)
        })
        .catch((err) => console.log(err))
        .finally(() => {
            myHistoricisLoading.value = false;
        })
    }

    onMounted(() => {
        fetchData();
    })
</script>

<template>
    <div class='container-custom'>
        <h1 class='h1--custom'>Moje kursy</h1>
        <div class='courses-tabs'>
            <b-tabs content-class="mt-3" class="nav-tabs--custom coursesTab">
                <b-tab title="Aktualne" active>
                        <MyCoursesList v-if="!myActiveisLoading" :myCourses="myActiveCoursesData"/>
                        <div v-else>Ładowanie kursów...</div>
                        
                </b-tab>
                <b-tab title="Historia">
                    <Suspense>
                        <MyCoursesList v-if="!myHistoricisLoading" :myCourses="myHistoricCoursesData"/>
                        <div v-else>Ładowanie kursów...</div>
                    </Suspense>
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