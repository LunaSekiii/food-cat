<template>
  
  <div>
    <top />
    <navbar />
    <Recommend :items="items"/>


    <div>Here is foodcat restaurant review website</div>
    <button @click="goto('login')">login click here!</button>
    <button @click="goto('restaurant')">restaurant review click here!</button>
    <button @click="goto('drinks')">drink review click here!</button>

    <div id="zhanweizhide">    </div>
  </div>
</template>

<script>
import top from "../components/Head_pic.vue";
import navbar from "../components/navbar.vue";
import Recommend from "../components/Recommend.vue";


export default {
  data() {
    return {
      items:[]
    };
  },

  mounted(){
    this.$axios.get("http://127.0.0.1:3007/api/random/1")
    .then(res => {
      console.log(res.data)
      this.items = res.data.data
    })

  },

  methods: {
    goto(where) {
      this.$router.push(where);
    },
  },

  components:{
    top,
    navbar,
    Recommend
  }
};
</script>

<style>
#zhanweizhide{
  height: 2000px;
}
</style>
