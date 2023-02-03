<template>
  <div>
    <navbar />
    <SearchBar type="resturant" id="bar" />

    <!-- <button @click="selectCate()">种类</button> -->
    <div @click="selectAll()" id="cateAll">All</div>
    <div class="cateBox">
      <!-- Restaurant -->
      <div
        class="cate"
        v-for="cate in cates"
        :key="cate.category_id"
        @click="selectCate((cate.category_id))"
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
    this.$axios.get("http://127.0.0.1:3007/api/all/0").then((res) => {
      console.log(res.data);
      this.items = res.data.data;
    }),
      this.$axios.get("http://127.0.0.1:3007/api/shop/0").then((res) => {
        console.log(res.data);
        this.cates = res.data.data;
      });
  },
  methods: {
    selectCate(cateId) {
      this.$axios.get(`http://127.0.0.1:3007/shop/cate/${cateId}`).then((res) => {
        console.log(res.data);
        this.items = res.data.data;
      });
    },
    selectAll(){
      this.$axios.get("http://127.0.0.1:3007/api/all/0").then((res) => {
        console.log(res.data);
        this.items = res.data.data;
      })
    }
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
  padding: 5px 14px 5px 14px;
  background-color: #fff8e1;
  border-radius: 100px;
  text-align: center;
  font-size: 24px;
}

#cateAll{
  height: 40px;
  margin: 10px auto;
  padding: 5px 10px 0px 10px;
  background-color: #fff8e1;
  border-radius: 100px;
  text-align: center;
  width: fit-content;
  font-size: 22px;
}
</style>
