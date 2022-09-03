<script setup>
    import { reactive, computed } from 'vue';

    const form = reactive({
        email: '',
        name: '',
        surname: '',
        password: '',
        confirmPassword: '',
        studiesType: '0',
        studiesLvl: '0',
        semestr: '1',
        fieldOfStudy: 1
    })

    const optionsList = computed(() => {
        if(form.studiesLvl === '1') { form.semestr = 1 }
        return form.studiesLvl === '1' ? [1, 2, 3] : [1, 2, 3 ,4 ,5 ,6 ,7]
    })

    const handleClick = (event) => {
        event.preventDefault();
        form.fieldOfStudy = parseInt(event.target.attributes[1].value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(form.email);
        console.log(form.password);
        console.log(form.studiesType);
        console.log(form.studiesLvl);
        console.log(form.semestr);
        console.log(form.fieldOfStudy);
    }
</script>


<template>
    <div class="container-custom">
        <div class="form-container">
            <h2>Rejestracja</h2>
            <p>Utwórz nowe konto.</p>
            <hr />

            <b-form @submit="handleSubmit">
            <b-row class="row--custom"> 
                <label>Email</label>
                <b-form-input
                    id="input-email"
                    v-model="form.email"
                    type="email"
                    required
                ></b-form-input>
            </b-row>
            <b-row class="row--custom"> 
                <label>Imię</label>
                <b-form-input
                    id="input-name"
                    v-model="form.name"
                    type="text"
                    required
                ></b-form-input>
            </b-row>
            <b-row class="row--custom"> 
                <label>Nazwisko</label>
                <b-form-input
                    id="input-surname"
                    v-model="form.surname"
                    type="text"
                    required
                ></b-form-input>
            </b-row>
            <b-row class="row--custom"> 
                <label>Hasło</label>
                <b-form-input
                    id="input-password"
                    v-model="form.password"
                    type="password"
                    required
                ></b-form-input>
            </b-row>  
            <b-row class="row--custom"> 
                <label>Potwierdź hasło</label>
                <b-form-input
                    id="input-confirmPassword"
                    v-model="form.confirmPassword"
                    type="password"
                    required
                ></b-form-input>
            </b-row>
            <b-row class="row--custom">
                <label>Typ studiów</label>
                <select
                id="select-studiesType"
                class="mb-2 mr-sm-2 mb-sm-0 form-select" 
                v-model="form.studiesType"
                >
                    <option value="0">Stacjonarne</option>
                    <option value="1">Zaoczne</option>
                </select>
                
            </b-row>    
            <b-row class="row--custom">
                <label>Stopień studiów</label>
                <select
                id="select-studiesLvl"
                class="mb-2 mr-sm-2 mb-sm-0 form-select" 
                v-model="form.studiesLvl"
                >
                    <option value="0">Inżynierskie</option>
                    <option value="1">Magisterskie</option>
                </select>  
            </b-row>
            <b-row class="row--custom">
                <label>Semestr</label>
                <select
                id="select-semestr"
                class="mb-2 mr-sm-2 mb-sm-0 form-select" 
                v-model="form.semestr"
                >
                    <option v-for="option in optionsList">{{option}}</option>
                </select>  
            </b-row>

            <b-row class="row--custom">
                <label>Kierunek studiów</label>
                <div class="registrationSelectBox">
                    <b-list-group>
                        <b-list-group-item value="1" @click="handleClick" :class="[ form.fieldOfStudy === 1 ? 'selected-list-item' : '']">Informatyka</b-list-group-item>
                        <b-list-group-item vlaue="2" @click="handleClick" :class="[ form.fieldOfStudy === 2 ? 'selected-list-item' : '']">Matematyka</b-list-group-item>
                    </b-list-group>
                </div>
            </b-row>

            <div class="text-center">
            <button class="custom-button" type="submit">Zarejestruj</button>
            </div>
            </b-form>

        </div>
    </div>
</template>

<style scoped>
    .form-container {
        width: 600px;
        margin-left: 0;
    }
    label {
        width: 30% !important;
        text-align: right !important;
        padding-right: 5% !important;
    }
    .form-control{
        width: 60% !important;
    }
    
</style>