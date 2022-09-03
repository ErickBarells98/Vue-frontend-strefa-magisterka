<script setup>
    import { reactive, inject } from 'vue'
    import { RouterLink, useRouter } from 'vue-router';

    const router = useRouter();

    const formValues = reactive({
        email: '',
        password: ''
    })

    const { login } = inject('store');

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        let result = await login(formValues)
        
        if(!result){
            router.push({ name: 'Home'})
        }
    }

</script>

<template>
    <div class="container-custom">
        <div class="form-container">
            <h2 class="header-title">Zaloguj się.</h2>
            <hr class='hr--custom'/>
            <b-form @submit="handleSubmit">
            <b-row> 
                <label>Email</label>
                <b-form-input
                    id="input-email"
                    v-model="formValues.email"
                    type="email"
                    required
                ></b-form-input>
            </b-row>
            <b-row> 
                <label>Hasło</label>
                <b-form-input
                    id="input-password"
                    v-model="formValues.password"
                    type="password"
                    required
                ></b-form-input>
            </b-row>
            <br />
            <div class="text-center">
            <button class="custom-button" type="submit">Zaloguj</button>
            </div>
            <div>
                <span>Nie pamiętasz jeszcze hasla?</span> <RouterLink to="/" class="a--custom">Przypomnij</RouterLink>
                <br/>
                <span >Nie masz jeszcze konta?</span> <RouterLink :to="{name: 'Register'}" class="a--custom">Zarejestruj</RouterLink>
            </div>    
            </b-form>

        </div>
    </div>
</template>

<style scoped>
    .header-title {
        padding: 10; 
        font-size: 30px;
        font-weight: 500;
    }
    .custom-button {
        width: 275px;
        margin-bottom: 3px;
    }
    span{
        color: "#737373";
        font-size: 14px;
        margin-left: 19%;
    }
    .a--custom {
        font-size: 14px;
        font-weight: 600;
    }
</style>