<script setup>
    import { watchEffect, ref, onMounted } from 'vue';
    import { Tooltip } from 'bootstrap';
    import MyPointsBlock from './MyPointsBlock.vue';

    const props = defineProps({
        points: {
            type: Array
        },
        maxPoints:{
            type: Number
        }
    })

    const sumpointsEarned = ref(0);

    watchEffect(() => {
        if(props.points !== 0){
            sumpointsEarned.value = props.points.reduce((pointsEarned, pointsNumber) => {
                return pointsEarned + pointsNumber.RecievedPoints; 
            }  
            ,0);
        }
    }) 

    onMounted(() => {
        new Tooltip(document.body, {
            selector: "[data-bs-toggle='tooltip']",
        })
    })
</script>

<template>
    <div class="points-list" v-if="points.length !== 0">
        <div class='progress-bar-container' data-bs-toggle='tooltip' :title="`${sumpointsEarned} / ${maxPoints}`"> 
                <b-progress-bar :value="((sumpointsEarned/maxPoints)*100)" variant="success" :label="`${((sumpointsEarned/maxPoints)*100)}%`"></b-progress-bar>
        </div>
        <div class="point-container" v-for="point in points">
            <MyPointsBlock :pointsItem="point"/>
        </div>
    </div>
    
</template>

<style scoped>

</style>