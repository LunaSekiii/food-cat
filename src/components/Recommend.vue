<template>
    <div>
        <div class="title" v-if="type_num === 0">Restaurant</div>
        <div class="title" v-else>Drinks</div>
        
        <Contents :items="items" />
    </div>


</template>

<script>
import Contents from "../components/Contents";
export default {
    data() {
        return {
            // type_num: ''
        };

    },
    props: ['items', 'type_num'],
    mounted(){
        // console.log(type_num)

    },

    methods:{
       


    },

    components: {
        Contents
    }

}
</script>

<style scoped>
.title {
    font-size: 40px;
    margin-top: 90px;
    
}
</style>