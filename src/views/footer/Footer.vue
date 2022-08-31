<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div className="footer">    
        <div className="footer-content">
            <hr />
            <div className="footer-credits">
                <p>&copy; 2022 Eryk Beczek</p>
            </div>
            <div class="link-div">
              <RouterLink to="/" className='a--custom'>Deklaracja dostępności</RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
    hr{
        margin: 0; 
        color: rgba(190, 190, 190, 0.226);
    }
    .link-div{
        margin-right: 45px;
    }
</style>