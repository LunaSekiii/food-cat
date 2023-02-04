<template>
  <div id="navbar">
    <ul class="shell">
      <!-- Logo -->
      <li class="nav_button" @click="goto('home')">
        <span><img src="../assets/img/组 183.png" alt="" class="catlogo" /></span>
      </li>

      <li class="empty_space">
        <span></span>
      </li>

      <li class="empty_space">
        <span></span>
      </li>

      <!-- Restaurant -->
      <li class="nav_button" @click="goto('restaurant')">
        <div class="size_set_pic">
          <img src="https://img.icons8.com/doodle/48/null/cottage--v1.png" />
        </div>
        <div class="size_set">restaurant</div>
        <ul class="detail">
          <li>
            <img src="https://img.icons8.com/doodle/48/null/noodles--v1.png" />view by category
          </li>
          <li>
            <img src="https://img.icons8.com/doodle/48/null/fire-element--v1.png" />hot restaurants
          </li>
        </ul>
      </li>

      <!-- Drinks -->
      <li class="nav_button" @click="goto('drinks')">
        <div class="size_set_pic">
          <img src="https://img.icons8.com/doodle/48/null/lemonade.png" />
        </div>
        <div class="size_set">drink</div>
        <ul class="detail">
          <li>
            <img src="https://img.icons8.com/doodle/48/null/cafe--v1.png" />view
            by category
          </li>
          <li>
            <img src="https://img.icons8.com/doodle/48/null/fire-element--v1.png" />hot drinks
          </li>
        </ul>
      </li>

      <!-- Favorite shop -->
      <li class="nav_button" :plain="true" @click="showFavorite()" type="primary">
        <div class="size_set_pic">
          <img src="https://img.icons8.com/doodle/48/null/likes-folder.png" />
        </div>
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
        <div class="size_set_pic">
          <img src="https://img.icons8.com/doodle/48/null/name.png" />
        </div>
        <div class="size_set">Me</div>
        <ul class="information detail" v-if="haveToken">

          <li type="text" @click="dialogFormVisible = true">Change Username</li>
          <el-dialog title="Change username" :visible.sync="dialogFormVisible" append-to-body="true">
            <input type="text" placeholder="New Username" v-model="username">
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">Cancle</el-button>
              <el-button type="primary" @click="changeUserName()">Submit</el-button>
            </div>
          </el-dialog>

          <li type="text" @click="dialogFormVisible1 = true">Change Password</li>
          <el-dialog title="Change password" :visible.sync="dialogFormVisible1" append-to-body="true">
            <input type="passowrd" placeholder="old password" v-model="oldpassword">
            <input type="passowrd" placeholder="new password" v-model="newpassword">
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible1 = false">Cancle</el-button>
              <el-button type="primary" @click="changePwd()">Submit</el-button>
            </div>
          </el-dialog>

          <li @click="logOut">log out</li>
        </ul>
        <ul class="information detail" v-if="!haveToken">
          <li @click="goto('login')">Login Now</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import Contents from "./Contents.vue";
import Cookies from 'js-cookie';
import QueryString from "qs";
export default {
  data() {
    return {
      drawer: false,
      direction: "btt",
      items: [],
      haveCookie: false,
      dialogFormVisible: false,
      username: '',
      dialogFormVisible1: false,
      oldpassword: '',
      newpassword: '',
    };
  },
  mounted() {
    if (!document.cookie) {
      console.log('Cookie is empty')
      this.haveCookie = false
    } else {
      console.log('Cookie is not empty')
      this.haveCookie = true
    }
  },
  computed: {
    haveToken() {
      return document.cookie.includes('token');
    },
  },
  methods: {
    goto(where) {
      this.$router.push(where);
    },
    showFavorite() {
      if (!this.haveToken) {
        this.$message({
          message: 'Login to access more features.',
          type: 'warning'
        });
        return;
      }
      this.$axios.get("http://127.0.0.1:3007/shop/like").then((res) => {
        // console.log(res.data)
        this.items = res.data.data;
        this.drawer = true;
        console.log(this.items);
      });
    },
    logOut() {
      Cookies.remove('token');
      this.$router.go(0)
location.reload()
    },
    changeUserName() {
      if (this.value != "") {
        this.$axios
          .put(
            "http://127.0.0.1:3007/my/userinfo",
            QueryString.stringify({
              username: this.username,
            })
          )
          .then((res) => {
            if (res.data.status === 0) {
              console.log(res);
              this.$message({
                message: 'Change username successfully',
                type: 'success'
              });

            } else {
              this.$message({
                message: 'Change fail, try again later',
                type: 'warning'
              });
            }
          })
          .catch((err) => {
            console.log(err);
            console.log("请求错误");
          });
      } else {
        this.$message({
          message: 'Every kitten should have its own name! The username is not allowed to be empty, give yourself a cool name!',
          type: 'warning'
        });
      }
      this.dialogFormVisible = false

    },
    changePwd() {
      if (this.value != "") {
        this.$axios
          .post(
            "http://127.0.0.1:3007/my/updatepwd",
            QueryString.stringify({
              oldPwd: this.oldpassword,
              newPwd: this.newpassword,
            })
          )
          .then((res) => {
            if (res.data.status === 0) {
              console.log(res);
              this.$message({
                message: 'Change password successfully',
                type: 'success'
              });

            } else {
              this.$message({
                message: 'Change fail, try again later',
                type: 'warning'
              });
            }
          })
          .catch((err) => {
            console.log(err);
            console.log("请求错误");
          });
      } else {
        this.$message({
          message: 'Every kitten should have its own name! The username is not allowed to be empty, give yourself a cool name!',
          type: 'warning'
        });
      }
      this.dialogFormVisible1 = false

    }
  },
  components: {
    Contents,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  color: #804c1a;
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
  transform: scale(6, 6);
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
