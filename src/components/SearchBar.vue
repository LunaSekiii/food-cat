<template>
  <div id="searchBar">
    <!-- <h1>view by category</h1> -->
    <h1>All Shops</h1>
    <div><img src="../assets/img/icons8-search-192.png" alt=""><input type="text" name="searchKey" id="searchInput" /></div>
    <div>
      <!-- <span>All</span> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Ctype: String,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    goto(where) {
      this.$router.replace(where);
    },
  },
  computed: {
    type() {
      return this.$props.Ctype | "restaurant";
    },
  },
};
</script>

<style lang="css" scoped>
*{
  color: #804C1A;
}
.searchBar {
  width: 100vw;
  height: 20vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: antiquewhite;
  margin-top: 900px;
}

#searchInput{
  width: 800px;
  height: 60px;
  border-radius: 100px;;
  border: 1.5px solid #A56221;
}
img{
  width: 55px;
}
nav {
  width: 20vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav > div {
  width: 200px;
  /* height: 100%; */
  line-height: 100%;
  text-align: center;
}

#fav:hover {
  background-color: rgb(127, 117, 103);
}

#fav > #item {
  position: absolute;
  /* width: 0px; */
  height: 0px;
  overflow: hidden;
}

#fav:hover #item {
  width: 100px;
  height: 100px;
  transition: 0.5s;

  background-color: rgb(127, 117, 103);
}
</style>
