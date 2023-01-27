<template>
  <div id="contentBox">
    <div class="item" v-for="item in items" :key="item.shop_id" >
      <h1>{{ item.name }}</h1>
  
      <Dialog :item="item"/>
    </div>
  </div>
</template>

<script>
import Dialog from './Dialog.vue';
export default {
  data() {
    return {
      show: true,
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
    openModal () {
        this.$modal.show('as-modal')
      }



  },

  components: {
    Dialog
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
