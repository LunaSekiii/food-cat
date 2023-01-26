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
            type_str: ' '
        };

    },
    props: ['items', 'type'],

    methods: {
        // setType(type) {
        //     console.log(type)
        //     switch (type) {
        //         case '0':
        //             this.type_str = 'Restaurant';
        //             break;
        //         case '1':
        //             this.type_str = 'Drink';
        //             break;
        //         default:
        //             this.type_str = 'Restaurant';
        //     }
        // }
    },

    // created() {
    //     this.setType(this.type);
    // },

    components: {
        Contents
    }

}
</script>

<style scoped>
.title {
    font-size: 40px
}
</style>