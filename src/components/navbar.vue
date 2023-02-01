<template>



  <div id="navbar">

    <ul class="shell">

      <!-- Logo -->
      <li class="nav_button" @click="goto('home')">
        <span><img src="../assets/img/组 183.png" alt="" class="catlogo"></span>
      </li>

      <li class="empty_space">
        <span></span>
      </li>

      <li class="empty_space">
        <span></span>
      </li>

      <!-- Restaurant -->
      <li class="nav_button" @click="goto('restaurant')">
        <div class="size_set_pic"><img src="https://img.icons8.com/doodle/48/null/cottage--v1.png" /></div>
        <div class="size_set">restaurant</div>
        <ul class="detail">
          <li><img src="https://img.icons8.com/doodle/48/null/noodles--v1.png" />view by category</li>
          <li><img src="https://img.icons8.com/doodle/48/null/fire-element--v1.png" />hot restaurants</li>
        </ul>
      </li>

      <!-- Drinks -->
      <li class="nav_button" @click="goto('drinks')">
        <div class="size_set_pic"><img src="https://img.icons8.com/doodle/48/null/lemonade.png" /></div>
        <div class="size_set">drink</div>
        <ul class="detail">
          <li><img src="https://img.icons8.com/doodle/48/null/cafe--v1.png" />view by category</li>
          <li><img src="https://img.icons8.com/doodle/48/null/fire-element--v1.png" />hot drinks</li>
        </ul>
      </li>

      <!-- Favorite shop -->
      <li class="nav_button" @click=showFavorite() type="primary" >
        <div class="size_set_pic"><img src="https://img.icons8.com/doodle/48/null/likes-folder.png" /></div>
        <div class="size_set">favorite</div>
        
        <el-drawer title="我是标题" :visible.sync="drawer" direction="btt" :append-to-body="true"
          :modal-append-to-body="false" size="50" :modal="true">
          
            <Contents :items="items" />
          
        </el-drawer>
      </li>

      <li class="empty_space" id="empty_space">
        <span></span>
      </li>

      <li class="nav_button">
        <div class="size_set_pic"><img src="https://img.icons8.com/doodle/48/null/name.png" /></div>
        <div class="size_set">Me</div>
        <!-- <ul class="information detail">
                    <li>profile picture</li>
                    <li>username</li>
                    <li>review count</li>
                    <li>log out</li>
                </ul> -->
      </li>
    </ul>

  </div>
</template>

<script>
import Contents from './Contents.vue';
export default {
  data() {
    return {
      drawer: false,
      direction: 'btt',
      items: [],
    }
  },
  methods: {
    goto(where) {
      this.$router.push(where);
    },
    showFavorite() {
      this.$axios.get("http://127.0.0.1:3007/shop/like")
        .then(res => {
          // console.log(res.data)
          this.items = res.data.data
          this.drawer = true
          console.log(this.items)
        })

    }
  },
  components:{
    Contents
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  color: #804C1A;
}

#navbar {
  width: 100%;
  height: 70px;
  background-color: white;
  position: sticky;
  top: 0px;
  list-style: none;
  font-size: 20px;
  display: flex;
  z-index: 998;

  box-shadow: 0px 0px 3px 0px black;
}

#navbar img {
  width: 30px;
  vertical-align: middle;
}

#navbar ul {
  list-style: none;
}

.shell {
  display: flex;
  justify-content: center;
}

.nav_button {
  background-color: white;
  width: 200px;
  text-align: center;
  line-height: 55px;
  transition: 0.3s;
  cursor: pointer;
}

.empty_space {
  width: 120px;
}

#empty_space {
  width: 180px;
}

.nav_button:hover {
  background-color: rgb(246, 229, 229);
}

.nav_button li:hover {
  background-color: rgb(246, 229, 229);
}

.nav_button ul li {
  height: 0;
  transition: 0.2s;
  opacity: 0;
  transform: translateY(-65px);
  background-color: rgb(246, 229, 229);
}

.nav_button:hover li {
  height: 65px;
  opacity: 1;
  transform: translateY(0);
}

.size_set_pic {
  height: 30px;
}

.detail {
  font-size: 18px;
}

.detail li img {
  width: 1px;
}

.catlogo {
  width: 100px;
  transform: scale(6, 6)
}

/* 抽屉 */
/*1.显示滚动条：当内容超出容器的时候，可以拖动：*/
.el-drawer__body {
  overflow: auto;
  /* overflow-x: auto; */
}

/*2.隐藏滚动条，太丑了*/
.el-drawer__container ::-webkit-scrollbar {
  display: none;
}

/* .dr {
  z-index: 9;
} */



</style>
