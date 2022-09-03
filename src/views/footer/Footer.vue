<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="footer">    
        <div class="footer-content">
            <hr class="hr--custom" />
            <div class="footer-credits">
                <p>&copy; 2022 Eryk Beczek</p>
            </div>
            <div class="link-div">
              <RouterLink to="/" class="a--custom">Deklaracja dostępności</RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
    hr{
        margin: 0; 
        color: rgb(190, 190, 190);
    }
    .link-div{
        margin-right: 45px;
    }
</style>