<template>
  <div id="searchBar">
    <h1>view by category</h1>
    <input type="text" name="searchKey" id="searchInput" />
    <div>
      <span>All</span>
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

<style lang="css">
.searchBar {
  width: 100vw;
  height: 10vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: antiquewhite;
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
