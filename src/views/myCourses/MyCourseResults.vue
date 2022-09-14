<script setup>
    import { RouterLink } from 'vue-router';
    import MyCoursePoints from './MyCoursePoints.vue';

    const props = defineProps({
        item: {
            type: Object
        }
    })
</script>

<template>
    <b-card>
        <b-card-header><RouterLink class="a--custom-2" :to="{name: 'CourseDetails', params: {id: item.Course.ID}}">{{item.Course.Name}}</RouterLink></b-card-header>
        <b-card-body>
            <div class='points-list-tag'><span>Ćwiczenia</span> <RouterLink v-for="points in item.Points" :to="{name: 'LaboratoriesDetails', params: {id: points.Laboratory.ID}}" class="points-tag"> {{points.LaboratoryNumber}}<span> ({{points.MaxPoints}})</span> </RouterLink> </div>
                <hr class="hr-points-1"/>
                    <MyCoursePoints :points="item.Points" :maxPoints="item.Course.MaxPoints"/>
                <hr class="hr-points-2"/>

                <div class="project-tab" v-if="item.Project">{{item.Project.Name}}
                    <div class='points-block'> 
                        {{item.Project.Points}} / {{item.Course.ProjectMaxPoints}}
                    </div>
                </div> 
                <span v-else>nie ustalono tematu projektu</span> 
        </b-card-body>
    </b-card>
</template>

<style scoped>
    .card{
        margin-top: 20px;
    }
    .project-tab{
        margin-left: 15px;
    }
    .points-block{
        width: 100px;
        height: 25px;
        margin: 0;
        text-align: center;
    }
    span{
        color: 'red';
        font-size: 15px;
        margin-left: 15px;
    }
    .hr-points-1{
        margin-top: 8px;
        margin-bottom: 8px;
    }
    .hr-points-2{
        margin-top: 8px;
    }
</style>