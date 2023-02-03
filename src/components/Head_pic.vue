<template>
  <div id="toppicture">
    <div class="hands">

      <el-popover placement="left" width="180" trigger="hover" content="Login click HERE!">
        <img src="../assets/img/maozhua1.png" alt="" slot="reference" @click="goto('login')">
      </el-popover>

      <el-popover placement="left" width="240" trigger="hover" content="Restaurant review click HERE!" class="hand1">
        <img src="../assets/img/maozhua3.png" alt="" slot="reference" @click="goto('restaurant')">
      </el-popover>

      <el-popover placement="left" width="240" trigger="hover" content="Drink review click HERE!" class="hand2">
        <img src="../assets/img/maozhua4.png" alt="" slot="reference" @click="goto('drinks')">
      </el-popover>

    </div>
    <div id="cat1">
      <div class="changeState" @mouseover="handleMouseover" @mouseleave="handleMouseleave"></div>
      <img v-bind:src="imgSrc" alt="">
    </div>
    <div class="top">
      <img src="../assets/img/组 182.png" alt="" v-if="hover" class="conversation">
      <!-- <div class="head_pic"> -->
      <ul>
        <li><img src="../assets/img/bowl-1850039_1920.jpg" alt="" /></li>
        <li><img src="../assets/img/pancakes-5989144_1920.jpg" alt="" /></li>
        <li><img src="../assets/img/platter-2009590_1920.jpg" alt="" /></li>
        <li><img src="../assets/img/cheese-4731862_1920.jpg" alt="" /></li>
        <li id="last">
          <img src="../assets/img/eclair-3366430_1920.jpg" alt="" />
        </li>
      </ul>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  data() {
    return {
      hover: false,
      imgSrc: require('../assets/img/cat2.svg')
    }
  },
  created(){

  },
  methods: {
    goto(where) {
      this.$router.push(where);
    },
    mouseover() {
      hover = true;
    },
    handleMouseover() {
      this.hover = true
      this.imgSrc = require('../assets/img/cat1.svg')
    },
    handleMouseleave() {
      this.hover = false
      this.imgSrc = require('../assets/img/cat2.svg')
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#toppicture {
  position: relative;
}

.top {
  /* margin: 100px auto; */
  /* border: 3px solid paleturquoise; */
  border-radius: 0px 0px 70px 0px;
  width: 1250px;
  height: 100vh;
  overflow: hidden;

}

.top ul {
  /* 把ul设置为弹性布局 */
  display: flex;
}

.top li {
  width: 40px;
  height: 780px;
  border-radius: 0px 0px 70px 0px;
  list-style: none;
  border-left: 1px solid rgb(255, 252, 223);
  box-shadow: 0 0 25px #000;
  transition: all 1.5s;
}

.top li img {
  /* 将img设置为块元素，并设置宽高 */
  display: block;
  width: 1100px;
  height: 100vh;
  /* object-fit: cover; */
}

.top ul:hover li {
  width: 40px;
}

.top ul li:hover {
  width: 1100px;
}

#cat1 {
  position: absolute;
  bottom: -250px;
  right: 100px;
  z-index: 999;
}

#cat1 img {
  width: 350px;
}





.changeState {
  position: absolute;
  bottom: 230px;
  right: 125px;
  width: 170px;
  height: 400px;
  background-color: blueviolet;
  z-index: 998;
  opacity: 0;
}

.conversation {
  position: absolute;
  width: 700px;
  right: 300px;
  top: 100px;
}

.hands {
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0px;
  overflow: hidden;
}

.hands img {
  margin-top: 30px;
  width: 260px;
  transform: translate(30px);
  z-index: 1000;
  transition: .3s;
}

.hands img:first-child {
  margin-top: 5px;
}

.hands img:hover {
  transform: translate(10px);
}

.hand1 {
  margin-top: 30px;
}

.hand2 {
  margin-top: 30px;
}
</style>
