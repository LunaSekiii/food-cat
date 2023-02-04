<template>
  <div class="bigbox">
    <el-popover
      placement="top-start"
      width="224"
      trigger="hover"
      content="Click on me and I can take you back to the homepage"
    >
      <img
        src="../assets/img/VCG211363988914.png"
        alt=""
        id="cat"
        slot="reference"
        @click="goto('home')"
      />
    </el-popover>
    <div class="centerBox">
      <!-- 最外层的大盒子 -->
      <div class="box">
        <!-- 滑动盒子 -->
        <div class="pre-box" :style="preBoxStyle">
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
            <input type="text" placeholder="username" v-model="username" />
            <input type="text" placeholder="email" v-model="email" />
            <input type="password" placeholder="password" v-model="password" />
            <input
              type="password"
              placeholder="enter again your password"
              v-model="password2"
            />
          </div>
          <!-- 按钮盒子 -->
          <div class="btn-box">
            <button @click="register">OK!</button>
            <!-- 绑定点击事件 -->
            <p @click="mySwitch()">Have account? Login HERE!</p>
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
            <input type="text" placeholder="email" v-model="email1" />
            <input type="password" placeholder="password" v-model="password1" />
          </div>
          <!-- 按钮盒子 -->
          <div class="btn-box">
            <button @click="login">OK!</button>
            <!-- 绑定点击事件 -->
            <p @click="mySwitch()">No account? Sign up</p>
          </div>
        </div>
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

import QueryString from "qs";
import Cookies from "js-cookie";
export default {
  data() {
    return {
      isLogin: true,
      username: "",
      password: "",
      password2: "",
      email: "",
      email1: "",
      password1: "",
    };
  },

  methods: {
    mySwitch() {
      this.isLogin = !this.isLogin;
    },
    goto(where) {
      this.$router.push(where);
    },

    register() {
      this.$axios.post(
        "http://uz6mb8.natappfree.cc/api/reguser",
        QueryString.stringify(
          {
            username: this.username,
            email: this.email,
            password: this.password,
            password2: this.password2,
          },
          { headers: { "content-type": "application/x-www-form-urlencoded" } }
        ).then((res) => {
          console.log(res);
        })
      );
    },

    login() {
      this.$axios
        .post(
          "http://uz6mb8.natappfree.cc/api/login",
          QueryString.stringify({
            email: this.email1,
            password: this.password1,
          })
        )
        .then((res) => {
          if (res.data.status === 0) {
            console.log(res);
            // window.localStorage.setItem('token', res.data.token)
            // window.localStorage.setItem('username', res.data.username)
            Cookies.set("token", res.data.token, { expires: 1 });
            console.log(Cookies.get("token"));
            alert("login successfully");
            this.$router.push("/home");
          } else {
            alert("Login fail, try again later");
          }
        })
        .catch((err) => {
          console.log(err);
          console.log("请求错误");
        });
    },
  },
  //创建前设置
  beforeCreate() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color: #FFFDED;");
  },
  // 销毁前清除（非必须,不清除的话完全可以,这块只不过告诉您可以这么玩）
  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  },

  computed: {
    preBoxStyle() {
      return !this.isLogin
        ? { transform: "translateX(100%)" }
        : { transform: "translateX(0%)" };
    },
  },
};
</script>

<style scoped>
.bigbox {
  position: relative;
  overflow: hidden;
}

#cat {
  position: absolute;
  z-index: 999;
  width: 200px;
  left: 40%;
  bottom: -60px;
}

/* 去除input的轮廓 */
input {
  outline: none;
}

.centerBox {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-content: center;
}

.box {
  width: 1050px;
  height: 600px;
  display: flex;
  /* 相对定位 */
  position: relative;
  z-index: 2;
  background-color: #fff5e9;
  margin: auto;
  /* 设置圆角 */
  border-radius: 50px;
  /* 设置盒子阴影 */
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.1);
}

.login-form,
.register-form {
  /* 平分盒子？ */
  flex: 1;
  height: 100%;
}

.register-form .title-box {
  position: relative;
  height: 200px;
  line-height: 300px;
}

.login-form .title-box {
  position: relative;
  height: 250px;
  line-height: 400px;
}

.title-box h1 {
  position: absolute;
  text-align: center;
  letter-spacing: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* 50%为自身尺寸的一半 */
}

.input-box {
  display: flex;
  /* 垂直排列 */
  flex-direction: column;
  align-items: center;
}

input {
  width: 60%;
  height: 40px;
  margin-bottom: 20px;
  text-indent: 4px;
  border: 1px solid white;
  border-radius: 10px;
}

.btn-box {
  display: flex;
  justify-content: center;
}

p {
  display: block;
}

button {
  display: block;
  width: 100px;
  height: 30px;
  line-height: 30px;
  border: none;
  border-radius: 4px;
  background-color: #ffd6af;
  color: #a56221;
}

/* 按钮悬停时 */
button:hover {
  /* 鼠标小手 */
  cursor: pointer;
  /* 透明度 */
  opacity: 0.8;
}

/* 按钮文字 */
.btn-box p {
  height: 30px;
  line-height: 30px;
  /* 禁止选中 */
  user-select: none;
  font-size: 14px;
  color: rgb(121, 119, 119);
}

.btn-box p:hover {
  cursor: pointer;
  border-bottom: 1px solid white;
}

/* 滑动的盒子 */
.pre-box {
  /* 宽度为大盒子的一半 */
  width: 50%;
  /* width: var(--width); */
  height: 100%;
  /* 绝对定位 */
  position: absolute;
  /* 距离大盒子左侧为0 */
  left: 0;
  /* 距离大盒子顶部为0 */
  top: 0;
  z-index: 99;
  border-radius: 4px;
  /* background-color: #edd4dc; */
  background-image: url(../assets/img/logincatbackground.jpg);
  box-shadow: 2px 1px 19px rgba(0, 0, 0, 0.1);
  /* 动画过渡，先加速再减速 */
  transition: 0.5s ease-in-out;
}

/* 滑动盒子的标题 */
.pre-box h1 {
  margin-top: 150px;
  text-align: center;
  /* 文字间距 */
  letter-spacing: 5px;
  color: rgb(254, 146, 92);
  /* 禁止选中 */
  user-select: none;
  /* 文字阴影 */
  text-shadow: 4px 4px 3px rgba(0, 0, 0, 0.1);
}

/* 滑动盒子的文字 */
.pre-box p {
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin: 20px 0;
  /* 禁止选中 */
  user-select: none;
  font-weight: bold;
  color: rgb(120, 38, 38);
  text-shadow: 4px 4px 3px rgba(0, 0, 0, 0.1);
}

/* 聚焦时隐藏文字 输入框*/
input:focus::placeholder {
  opacity: 0;
}
</style>
