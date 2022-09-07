<script setup>
    import { onMounted, reactive, ref, watchEffect } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import jwtAxios from '../../utils/jwtAxios';
    import store from '../../store/userstore.js';
    import LaboratoriesList from '../laboratories/LaboratoriesList.vue';
    import LecturesList from '../lectures/LecturesList.vue';

    const route = useRoute();
    const router = useRouter();

    const courseData = reactive({});
    const isLoading = ref(true)
    const requestJoin = ref("not sent");

    const joinCourse = (event) => {
        event.preventDefault();

        if(!isLoading.value && (!courseData.IsApplicant || !courseData.IsParticipant)){
            jwtAxios.get(`/api/Course/joinCourse?id=${route.params.id}`,{context:store})
            .then(response => {
                requestJoin.value = "sent";
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    const goBack = (event) => {
        event.preventDefault();
        router.go(-1)
    }

    const fetchCourseData = () => {
        jwtAxios.get(`/api/Course/${route.params.id}`,{context:store})
        .then(response => {
            Object.assign(courseData,response.data);
            console.log(response.data)
        })
        .catch(err => console.log(err))
        .finally(() => {
            isLoading.value = false;
        })
    }

    onMounted(() => {
        fetchCourseData();
    })

    watchEffect(() => {
        if(!isLoading.value && courseData.IsApplicant){
            requestJoin.value = "sent";
        }
        if(!isLoading.value && courseData.IsParticipant){
            requestJoin.value = "approved";
        } 
    }) 
</script>

<template>
    <div class='details-tab'>
        <div class='title-section'>
           <h1 class='h1--custom' v-if="!isLoading">{{courseData.Name}}</h1>
        </div>
        <div class='container-custom'>
            <dl class="details-info" v-if="!isLoading">
                <div>
                    <dd>Name</dd>
                    <dt>{{courseData.Name}}</dt>
                </div>
                <div>
                    <dd>Rok akademicki</dd>
                    <dt>{{courseData.DisplayYear}}</dt>
                </div>
                <div>
                    <dd>Typ studiów</dd>
                    <dt>{{courseData.StudiesTYpe}}</dt>
                </div>
                <div>
                    <dd>Stopień studiów</dd>
                    <dt>{{courseData.StudiesLevel}}</dt>
                </div>
                <div>
                    <dd>Semestr</dd>
                    <dt>{{courseData.SemesterNumber}}</dt>
                </div>
                <div>
                    <dd>Max punktów</dd>
                    <dt>{{courseData.MaxPoints}}</dt>
                </div>
                <div>
                    <dd>Opis</dd>
                    <dt>{{courseData.Description}}</dt>
                </div>
                <div>
                    <dd>Prowadzący</dd>
                    <dt>{{courseData.Masters[0].Name}} {{courseData.Masters[0].Surname}}</dt>
                </div>
            </dl>

            <div class='content-container' v-if="requestJoin === 'approved'"> 
                <b-tabs content-class="mt-3">
                    <b-tab title="Laboratoria" active>
                            <LaboratoriesList :laboratories="courseData.Laboratories"/>
                    </b-tab>
                    <b-tab title="Wykłady">
                            <LecturesList :lectures="courseData.Lectures" />
                    </b-tab>
                </b-tabs>
            </div>
        </div>

        <div class='button-container'>
            <button class="custom-blue-button" @click="goBack">Wróc do listy kursów</button>

            <button class="custom-button" :class="{'disabled-button': requestJoin === 'sent'}" @click="joinCourse" v-if="requestJoin !== 'approved'">
                <span v-if="requestJoin === 'not sent'">Dołącz do kursu</span>
                <span v-else>Wysłano prośbę.</span>
            </button> 
        </div>
    </div>
</template>
 
<style scoped>
    .h1--custom{
        margin-left: 10%;
    }
    .container-custom{
        margin-top: 30px;
    }
    dd{
        margin-bottom: 2px;
    }
    .button-container{
        width: 70%;
        margin: auto;
    }
    .custom-blue-button{
        width: 200px;
        margin-bottom: 3px;
    }
    .custom-button{
        width: 150px;
        margin-bottom: 3px;
    }
</style>