<template>
  <div id="contentBox">
    <div class="item" v-for="item in items" :key="item.shop_id">
      <img :src="'https://www.google.com/url?sa=i&url=http%3A%2F%2Fbishun.strokeorder.info%2Fmandarin.php%3Fq%3D%25E5%259B%25BE&psig=AOvVaw1hnLtrxuYBcKhfRhrWWrP6&ust=1674584432662000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOivrqOn3vwCFQAAAAAdAAAAABAE'" alt="">
      <h1>{{ item.name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  
  props:{
    items:{
      default:[]
    }
  },
  mounted(){
    console.log(this.items)
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
