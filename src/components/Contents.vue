<template>
  <div id="contentBox">
    <div class="item" v-for="item in items" :key="item.shop_id" @click="showModal = true">
      <h1>{{ item.name }}</h1>
      <img v-bind:src="'http://127.0.0.1:3007/api/pic/' + item.logo" alt="" />
    </div>
  </div>
</template>

<script>
import detail from './detail.vue';
export default {
  data() {
    return {
      showModal: false
    }
  },

  props: {
    items: {
      default: []
    }
  },
  mounted() {
    console.log(this.items)
  },

  methods: {
    goto(where) {
      this.$router.replace(where);
    },

    // showModal(item) {
    //   console.log("showModal method is called")
    //   this.show = true
    //   console.log("show variable value", this.show)
    //   this.selectedItem = item
    // }
  },

  components: {
    detail

  }
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

img {
  width: 200px;
}
</style>
