<template>
  <div id="contentBox">
    <div class="item" v-for="item in items" :key="item.name">
      <h1>{{ item.name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "restaurant1",
          img: "",
          marked: false,
        },
        {
          name: "restaurant2",
          img: "",
          marked: false,
        },
        {
          name: "restaurant3",
          img: "",
          marked: false,
        },
        {
          name: "restaurant4",
          img: "",
          marked: false,
        },
        {
          name: "restaurant5",
          img: "",
          marked: false,
        },
        {
          name: "restaurant6",
          img: "",
          marked: false,
        },
      ],
    };
  },
  methods: {
    goto(where) {
      this.$router.replace(where);
    },
  },
};
</script>

<style lang="css">
#contentBox {
  width: 100%;
  height: 60vh;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: left;
}
.item {
  width: 350px;
  height: 250px;
  margin: 10px;
  background-color: #ffe6cf;
  border-radius: 10px;
}
</style>
