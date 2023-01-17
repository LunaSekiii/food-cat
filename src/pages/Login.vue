<template>
  <!-- 最外层的大盒子 -->
  <div class="box">
    <!-- 滑动盒子 -->
    <div class="pre-box">
      <h1>WELCOME</h1>
      <p>JOIN US!</p>
      <!-- <div class="img-box">
                <img src="./img/waoku.jpg" alt="">
            </div> -->
    </div>

    <!-- 注册盒子 -->
    <div class="register-form">
      <!-- 标题盒子 -->
      <div class="title-box">
        <h1>Sign up</h1>
      </div>
      <!-- 输入框盒子 -->
      <div class="input-box">
        <input type="text" placeholder="username" />
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="enter again your password" />
      </div>
      <!-- 按钮盒子 -->
      <div class="btn-box">
        <button>OK!</button>
        <!-- 绑定点击事件 -->
        <p onclick="mySwitch()">Have account? Login HERE!</p>
      </div>
    </div>
    <!-- 登录盒子 -->
    <div class="login-form">
      <!-- 标题盒子 -->
      <div class="title-box">
        <h1>Login</h1>
      </div>
      <!-- 输入框盒子 -->
      <div class="input-box">
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
      </div>
      <!-- 按钮盒子 -->
      <div class="btn-box">
        <button>OK!</button>
        <!-- 绑定点击事件 -->
        <p onclick="mySwitch()">No account? Sign up</p>
      </div>
    </div>
  </div>
</template>

<script>
// 滑动的状态
let flag = true;
const mySwitch = () => {
  if (flag) {
    // 获取到滑动盒子的dom元素并修改它移动的位置
    $(".pre-box").css("transform", "translateX(100%)");
  } else {
    $(".pre-box").css("transform", "translateX(0%)");
  }
  flag = !flag;
};
</script>
