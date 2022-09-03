<script setup>
    import { RouterLink } from 'vue-router'
    import strefaLogo from '../../assets/LogoNapisSmall.png'
</script>


<template>
    <div class="custom-navbar">
        <div class="custom-navbar-content">
            <RouterLink :to="{name: 'Home'}" class="logo-link">
                <img :src="strefaLogo" width="100" />
            </RouterLink>
        
            <div class="custom-nav-menu-list">
                <ul class="custom-nav-menu">
                    <li class="custom-nav-item">
                        <RouterLink :to="{name: 'Contact'}">Kontakt</RouterLink>
                    </li>
                </ul>

                <ul class="custom-nav-menu nav-right">
                        <ul class="custom-nav-menu nav-right">
                        <li class="custom-nav-item">
                            <RouterLink :to="{name: 'Register'}">Zarejestruj</RouterLink>
                        </li>
                        <li class="custom-nav-item">
                            <RouterLink :to="{name: 'Login'}">Zaloguj</RouterLink>
                        </li>
                        </ul>
                </ul>
            </div>
        </div>
    </div>
</template>