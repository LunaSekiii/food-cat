<template>
  <div>
    <navbar />
    <SearchBar type="drinks" id="bar" />
    <button @click="selectCate()">种类</button>
    <!-- Drinks -->
    <Contents v-bind:items="items" />
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar";
import Contents from "../components/Contents";
import navbar from "../components/navbar.vue";
export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.$axios.get("http://9enamv.natappfree.cc/api/all/1").then((res) => {
      console.log(res.data);
      this.items = res.data.data;
    });
  },
  components: {
    navbar,
    SearchBar,
    Contents,
  },
};
</script>

<style>
#bar {
  margin-top: 30px;
}
</style>
