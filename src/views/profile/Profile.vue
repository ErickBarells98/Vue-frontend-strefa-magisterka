<script setup>
    import ProfileData from './ProfileData.vue';
</script>

<template>
    <div class="profile-tab">
        <div class="container-custom">
            <h1 class="h1--custom">Mój profil:</h1>
            <hr class='hr--custom'/>
            <Suspense>
                <ProfileData />
                <template #fallback>
                    Ładowanie danych...
                </template>
            </Suspense>
            <hr className='hr--custom'/>
            <h1 className="h1--custom">Kierunek studiów:</h1>

            <button className="custom-button">Zarządzaj</button>
        </div>
    </div>
</template>

<style scoped>
    .profile-tab{
        margin-top: 20px;
    }
    .custom-button{
        width: 100px !important;
        margin-top: 15px !important;
        margin-bottom: 15px !important;
    }
</style>