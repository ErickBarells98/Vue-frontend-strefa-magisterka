<script setup>
    import { reactive, inject, onMounted } from 'vue';
    import jwtAxios from '../../utils/jwtAxios';
    import store from '@/store/userstore.js';

    const userData = reactive({}) 

    const { userState } = inject('store');

    const getUserProfile = () => {
        jwtAxios.get('/api/MyProfile/'+userState.userid,{context:store})
        .then((response) => {
            Object.assign(userData,response.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    onMounted(() => {
        getUserProfile();
    })
</script>

<template>
            <dl class="details-info">
                <div>
                    <dd>ID:</dd>
                    <dt>{{userData.id}}</dt>
                </div>
                <div>
                    <dd>Email:</dd>
                    <dt>{{userData.email}}</dt>
                </div>
                <div>
                    <dd>Data rejestracji:</dd>
                    <dt>{{userData.registrationDate}}</dt>
                </div>
                <div>
                    <dd>Imię</dd>
                    <dt>{{userData.firstName}}</dt>
                </div>
                <div>
                    <dd>Nazwisko</dd>
                    <dt>{{userData.surname}}</dt>
                </div>
            </dl>
</template>