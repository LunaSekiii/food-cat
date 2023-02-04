<template>
  <div>
    <navbar />
    <SearchBar type="resturant" id="bar" />

    <button @click="selectCate()">种类</button>
    <div class="cateBox">
      <!-- Restaurant -->
      <div
        class="cate"
        v-for="cate in cates"
        :key="cate.category_id"
        @click="selectCate(cate)"
      >
        <div>{{ cate.category }}</div>
      </div>
    </div>

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
      cates: [],
      cate: "",
    };
  },
  mounted() {
    this.$axios.get("http://uz6mb8.natappfree.cc/api/all/0").then((res) => {
      console.log(res.data);
      this.items = res.data.data;
    }),
      this.$axios.get("http://uz6mb8.natappfree.cc/api/shop/0").then((res) => {
        console.log(res.data);
        this.cates = res.data.data;
      });
  },
  methods: {
    selectCate() {
      this.$axios.get("http://uz6mb8.natappfree.cc/shop/cate/1").then((res) => {
        console.log(res.data);
        this.items = res.data.data;
      });
    },
  },
  components: {
    navbar,
    SearchBar,
    Contents,
  },
};
</script>

<style scoped>
#bar {
  margin-top: 30px;
}

.cateBox {
  width: 100%;
  height: 3vh;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.cate {
  height: 40px;
  margin: 10px;
  padding: 5px 10px 1px 10px;
  background-color: #fff8e1;
  /* border-radius: 30px; */
  text-align: center;
}
</style>
