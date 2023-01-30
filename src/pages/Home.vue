<template>
  
  <div>
    <top />
    <navbar />
    <Recommend :items="items" :type_num="0"/>
    <Recommend :items="items2" :type_num="1"/>
    <div id="about"><img src="../assets/img/组 184.png" alt=""></div>

<!-- 
    <div>Here is foodcat restaurant review website</div>
    <button @click="goto('login')">login click here!</button>
    <button @click="goto('restaurant')">restaurant review click here!</button>
    <button @click="goto('drinks')">drink review click here!</button> -->

    <!-- <div id="zhanweizhide">    </div> -->
  </div>
</template>

<script>
import top from "../components/Head_pic.vue";
import navbar from "../components/navbar.vue";
import Recommend from "../components/Recommend.vue";




export default {
  data() {
    return {
      items:[],
      items2:[],
      type_num:'',
    };
  },

  mounted(){
    this.$axios.get("http://127.0.0.1:3007/api/random/0")
    .then(res => {
      console.log(res.data)
      this.items = res.data.data
    }),

    this.$axios.get("http://127.0.0.1:3007/api/random/1")
    .then(res => {
      console.log(res.data)
      this.items2 = res.data.data
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
    Recommend,


  }
};
</script>

<style>
*{
  color: #804C1A;
}
#about{
  width: 100%;
}
#about img{
  width: 100%;
}
</style>
