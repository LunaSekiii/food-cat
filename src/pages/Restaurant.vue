<template>
  <div>
    <navbar />
    <SearchBar type="resturant" id="bar"/>
    <!-- Restaurant -->
    <Contents v-bind:items="items"/>
  </div>
</template>

<script>

import SearchBar from "../components/SearchBar";
import Contents from "../components/Contents";
import navbar from "../components/navbar.vue";
export default {
  data() {
    return {
      items:[]
    };
  },
  mounted(){
    this.$axios.get("http://127.0.0.1:3007/api/all/0")
    .then(res => {
      console.log(res.data)
      this.items = res.data.data
    })

  },
  components: {
    navbar,
    SearchBar,
    Contents,
  },

  
};
</script>

<style>
#bar{
  margin-top: 30px;
}

</style>
