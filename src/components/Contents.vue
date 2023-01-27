<template>
  <div id="contentBox">
    <div
      class="item"
      v-for="item in items"
      :key="item.shop_id"
      @click="dialogVisible = true">
    
      <h1>{{ item.name }}</h1>
      <img v-bind:src="'http://127.0.0.1:3007/api/pic/' + item.logo" alt="" />
      <!-- <Dialog /> -->
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="80%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Dialog from "./Dialog.vue";
export default {
  data() {
    return {
      dialogVisible: false,
      show: true,
      items: [
        {
          shop_id: 1,
          logo: 0,
          name: "qwe",
        },
        {
          shop_id: 2,
          logo: 0,
          name: "q1e",
        },
        {
          shop_id: 3,
          logo: 0,
          name: "qwe",
        },
      ],
    };
  },

  props: {
    // items: {
    //   default: []
    // }
  },
  mounted() {
    console.log(this.items);
  },

  methods: {
    goto(where) {
      this.$router.replace(where);
    },
    openModal() {
      this.$modal.show("as-modal");
    },
  },

  components: {
    Dialog,
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

.item:hover {
  background-color: rgb(146, 123, 101);
  transition: all 0.5s;
}

img {
  width: 200px;
}
</style>
