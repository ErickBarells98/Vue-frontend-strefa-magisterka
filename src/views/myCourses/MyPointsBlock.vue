<script setup>
    import { Tooltip } from 'bootstrap';
    import { onMounted } from 'vue';


    const props = defineProps({
        pointsItem: {
            type: Object
        }
    })

    onMounted(() => {
        new Tooltip(document.body, {
            selector: "[data-bs-toggle='tooltip2']",
        })
    })
</script>

<template>
        <div class='points-block'>
                {{pointsItem.RecievedPoints}}
        </div>
        <div class='note-presence-block'>
            <div class='points-block'>
                <font-awesome-icon icon="fa-solid fa-file" color="green" style="width: 10px; margin-bottom: 6px;"/>
            </div>
            <div data-bs-toggle='tooltip2' 
                :title="`${ pointsItem.Attendance === 1 ? 'nieobecny' : ''} ${ pointsItem.Attendance === 2 ? 'uzupełniony' : ''} ${ pointsItem.Attendance === 3 ? 'obecny' : ''} ${ pointsItem.Attendance === 0 ? 'usprawiedliwiony' : ''}`" 
                class="points-block presence-block" 
                :class="{'background--red': pointsItem.Attendance === 1,'background--green': pointsItem.Attendance === 2,'background--orange': pointsItem.Attendance === 0}">  
            </div>
        </div>
</template>

<style scoped>
    .points-block{
        text-align: center !important;

        font-size: 19px !important;
    }
    .note-presence-block .points-block{
        width: 15px;
        height: 18px;
        margin-left: 2px;
        margin-top: 3px;
    }
    .points-block.presence-block{
        width: 15px;
        height: 12px;
        margin-left: 2px;
        margin-top: 2px;
    }
</style>