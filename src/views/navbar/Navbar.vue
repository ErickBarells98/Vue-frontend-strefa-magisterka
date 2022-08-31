<script setup>
    import { RouterLink } from 'vue-router'
    import strefaLogo from '../../assets/LogoNapisSmall.png'
</script>


<template>
    <div className="custom-navbar">
        <div className="custom-navbar-content">
            <RouterLink :to="{name: 'Home'}" class="logo-link">
                <img :src="strefaLogo" width="100" />
            </RouterLink>
        
            <div class="custom-nav-menu-list">
                <ul className="custom-nav-menu">
                    <li className="custom-nav-item">
                        <RouterLink :to="{name: 'Contact'}">Kontakt</RouterLink>
                    </li>
                </ul>

                <ul className="custom-nav-menu nav-right">
                        <ul className="custom-nav-menu nav-right">
                        <li className="custom-nav-item">
                            <RouterLink :to="{name: 'Register'}">Zarejestruj</RouterLink>
                        </li>
                        <li className="custom-nav-item">
                            <RouterLink :to="{name: 'Login'}">Zaloguj</RouterLink>
                        </li>
                        </ul>
                </ul>
            </div>
        </div>
    </div>
</template>