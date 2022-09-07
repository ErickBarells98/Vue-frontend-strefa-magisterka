<script setup>
    import { RouterLink } from 'vue-router';
    import useDownloadFile from '../../utils/hooks/useDownloadFile';

    const downloadFile = useDownloadFile();

    const props = defineProps({
        lec: {
            type: Object
        }
    })
    console.log(props.lec)
</script>

<template>
    <h4 class='h4--custom'><span>{{lec.Number}}</span>  <RouterLink class="a--custom" :to="{name: 'LecturesDetails', params: {id: lec.ID}}">{{lec.Name}}</RouterLink></h4>
        <div class='file-display-container'>
          <ul>
          Pliki do pobrania: &#123;
             <li v-if="lec.LectureFiles.length !== 0" v-for="file in lec.LectureFiles" class="file-display-row">
                {{file.FileName}} <font-awesome-icon icon="fa-solid fa-circle-down" color="green" @click="downloadFile(file.ID,file.FileName,1)" class="myicon"/>
             </li>
          &#125;
          </ul>
        </div>
</template>

<style>

</style>