<script setup>
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import store from '../../store/userstore.js';
import jwtAxios from '../../utils/jwtAxios';
import useDownloadFile from '../../utils/hooks/useDownloadFile';

const downloadFile = useDownloadFile();

const route = useRoute();
const router = useRouter();

const isLoading = ref(true);
const lecturesData = reactive({})

const fetchData = () => {
    jwtAxios.get(`/api/Course/Lecutre?id=${route.params.id}`,{context:store})
        .then(response => {
            Object.assign(lecturesData,response.data);
            console.log(lecturesData)
        })
        .catch(err => console.log(err))
        .finally(() => {
            isLoading.value = false;
        })
}

const goBack = (event) => {
    event.preventDefault();
    router.go(-1)
}

onMounted(() => {
    fetchData();
})
</script>

<template>
        <div class='details-tab'>
        <div class='title-section' v-if="!isLoading">
            <h1 class='h1--custom'>{{lecturesData.Name}}</h1> <p>{{lecturesData.Number}}. {{lecturesData.Name}}</p>
        </div>
        <div class='container-custom'>
            <div v-if="!isLoading"> 
                <div class='content-details-info'>
                    <span>Opis</span>
                    <p>{{lecturesData.Description}}</p>
                </div>
                Pliki
                <ul v-if="lecturesData.LectureFileDTOs.length !== 0">
                    <li v-for="file in lecturesData.LectureFileDTOs">
                        {{file.FileName}} <font-awesome-icon icon="fa-solid fa-circle-down" color="green" @click="downloadFile(file.ID,file.FileName,1)" class="myicon"/>    
                    </li>
                </ul>
            </div>    
             <button class="custom-blue-button" @click="goBack">Wróc do listy kursów</button>    
        </div>
        </div>
</template>

<style scoped>
    .title-section p {
        margin-left: 10%;
        margin-bottom: 0;
    }
    .h1--custom{
        margin-left: 10%;
    }
    .container-custom{
        margin-top: 30px;
        width: 77%;
    }
    .custom-blue-button{
        width: 200px;
        margin-bottom: 3px;
    }
    .content-details-info span{
        font-weight: 600;
    }
    li{
        font-size: 13px;
    }
</style>