<script setup>
    import { RouterLink } from 'vue-router';
    import useDownloadFile from '../../utils/hooks/useDownloadFile';

    const downloadFile = useDownloadFile();

    const props = defineProps({
        lab: {
            type: Object
        }
    })
</script>

<template>
        <h4 class='h4--custom'><span>{{lab.Number}}</span> <RouterLink class="a--custom" :to="{name: 'LaboratoriesDetails', params: {id: lab.ID}}">{{lab.Name}}</RouterLink></h4>
        <div class='file-display-container'>
          <ul>
          Pliki do pobrania: &#123;
             <li v-if="lab.Files.length !== 0" v-for="file in lab.Files" class="file-display-row">
                {{file.FileName}} <font-awesome-icon icon="fa-solid fa-circle-down" color="green" @click="downloadFile(file.ID,file.FileName,0)" class="myicon"/>
             </li>
          &#125;
          </ul>
        </div>
</template>

<style scoped>
    ul{
        padding: 0;
    }
</style>