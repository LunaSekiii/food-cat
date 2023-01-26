<template>
  <div class="top">
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
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "top",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
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
</style>
