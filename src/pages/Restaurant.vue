<template>
  <div>
    <Header />
    <SearchBar type="resturant" />
    Restaurant
    <Contents v-bind:items="items"/>
  </div>
</template>

<script>
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Contents from "../components/Contents";
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
    Header,
    SearchBar,
    Contents,
  },

  
};
</script>
