<script setup>
    import { RouterLink, useRouter } from 'vue-router'
    import { inject } from 'vue';
    import strefaLogo from '../../assets/LogoNapisSmall.png'
  
    const router = useRouter();

    const { isLogged, userState, logout } = inject('store');
    const isUserLogged = isLogged.value; 

    const signOut = () => {
        logout();
        router.push({name: 'Home'})
    }
</script>


<template>
    <div class="custom-navbar">
        <div class="custom-navbar-content">
            <RouterLink :to="{name: 'Home'}" class="logo-link">
                <img :src="strefaLogo" width="100" />
            </RouterLink>
        
            <div class="custom-nav-menu-list">

                <ul class="custom-nav-menu">

                        <li class="custom-nav-item" v-if="isLogged">
                        <RouterLink to="/">Moje kursy</RouterLink>
                        </li>
                        <li class="custom-nav-item" v-if="isLogged">
                        <RouterLink to="/">Dostępne kursy</RouterLink>
                        </li>

                    <li class="custom-nav-item">
                        <RouterLink :to="{name: 'Contact'}">Kontakt</RouterLink>
                    </li>
                </ul>

                <ul class="custom-nav-menu nav-right">
                        <ul class="custom-nav-menu nav-right" v-if="!isLogged">
                        <li class="custom-nav-item">
                            <RouterLink :to="{name: 'Register'}">Zarejestruj</RouterLink>
                        </li>
                        <li class="custom-nav-item">
                            <RouterLink :to="{name: 'Login'}">Zaloguj</RouterLink>
                        </li>
                        </ul>
                        <ul class="custom-nav-menu nav-right" v-else>
                        <li class="custom-nav-item">
                            <RouterLink :to="{name: 'Profile'}">Witaj {{userState.username}}!</RouterLink>
                        </li>
                        <li class="custom-nav-item">
                            <RouterLink to="" @click="signOut">Wyloguj</RouterLink>
                        </li>
                        </ul>
                </ul>
            </div>
        </div>
    </div>
</template>