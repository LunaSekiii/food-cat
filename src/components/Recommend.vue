<template>
    <div>
        <div class="title">Restaurant</div>
        <Contents :items="items" />
    </div>


</template>

<script>
import Contents from "../components/Contents";
export default {
    data() {
        return {

        };

    },
    props: ['items'],

    components:{
        Contents

    }

}
</script>

<style scoped>
.title {
    font-size: 40px
}
</style>