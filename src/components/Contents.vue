<template>
  <div id="contentBox">
    <div class="item" v-for="item in items" :key="item.shop_id" @click="openDialog(item)">

      <img v-bind:src="'http://127.0.0.1:3007/api/pic/' + item.logo" alt="" />
      <div id="shopname">{{ item.name }}</div>
      <!-- <Dialog /> -->
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="80%">


      <div class="modal-body">
        <img v-bind:src="'http://127.0.0.1:3007/api/pic/' + currentItem.logo" alt="" id="logo" />

        <div class="head">
          <div class="name">{{ currentItem.name }}</div>
          <div class="cate">{{ currentItem.category }}</div>
          <div class="open_hour">{{ currentItem.open_hour }}</div>
        </div>

        <div class="description">
          <div id="description_title">
            <img
              src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-description-internet-marketing-flaticons-lineal-color-flat-icons.png"
              class="icon" />
            <span>Description</span>
          </div>
          <div id="description">{{ currentItem.description }}</div>
        </div>

        <div class="menu_container">
          <div id="menu_title">
            <img src="https://img.icons8.com/doodle/48/null/folded-booklet.png" class="icon" />
            <span>Menu</span>
          </div>
          <img v-bind:src="'http://127.0.0.1:3007/api/menu/' + currentItem.menu" alt="" id="menu">
        </div>

        <div class="review_container">
          <div id="review_title">
            <img src="https://img.icons8.com/doodle/48/null/comments.png" class="icon" />
            <span>Rating and Review</span>
          </div>

          <div class="avg_rate">
            <el-rate v-model="avg_rate" disabled show-score text-color="#ff9900">{{
              currentItem.average_rate
            }}</el-rate>
          </div>

          <div class="addReview">

            <div class="userinfo">
              <div class="pro_pic"><img src="../assets/img/default.png" alt="" id="pro_pic"></div>
              <div id="username">{{ user.username }}</div>
            </div>

            <div class="myreview">
              <div id="text">
                <div>
                  <el-rate v-model="value" :colors="colors"></el-rate>
                </div>

                <input type="text" placeholder="write your comment here" v-model="text">

                <img src="../assets/img/send.png" alt="" id="submit" @click="addReview">
              </div>
            </div>
          </div>

          <div class="shopReview">
            <div v-for="review in reviews" :key="review._id" class="review">
              <p>{{ review.username }}</p>
              <p>{{ review.date }}</p>
              <div><el-rate v-model="review.stars" disabled show-score text-color="#ff9900" style="margin-left:auto">{{
                review.stars
              }}</el-rate></div>
              <p>{{ review.text }}</p>
              <button v-if="userid === review.user_user_id" @click="deleteReview(review)">delete</button>
              <el-popover v-if="userid === review.user_user_id" placement="right" width="400" trigger="click">
                <div><el-rate v-model="new_value" :colors="colors"></el-rate></div>
                <div><input type="text" v-model="reviewText" :placeholder="review.text"></div>
                <el-button @click="updateReview(review)">update</el-button>
                <el-button slot="reference">click 激活</el-button>
              </el-popover>


            </div>
          </div>

        </div>

      </div>



      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import jsCookie from 'js-cookie';
import QueryString from 'qs';
export default {
  data() {
    return {
      dialogVisible: false,
      show: true,
      item: '',
      currentItem: '',
      value: null,
      text: '',
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      avg_rate: 0,
      shop_id: 0,
      review: '',
      reviews: [],
      visible: false,
      reviewText: '',
      new_value: 0,
      userid: 0,
      user: []


    };
  },

  props: {
    items: {
      default: []
    }
  },
  mounted() {
    // console.log(this.items);
    // console.log(this.value);
    // console.log(this.text);
    // console.log(Headers)

  },


  watch: {
    value(star) {
      console.log(`current rate: ${star}`)
    }
  },

  methods: {
    goto(where) {
      this.$router.replace(where);
    },

    openDialog(item) {
      this.currentItem = item;
      this.dialogVisible = true;
      this.avg_rate = item.average_rate;
      this.showReview();
      this.getUserId()
    },

    addReview() {
      this.$axios.post("http://127.0.0.1:3007/review/add",
        QueryString.stringify({ text: this.text, stars: this.value, shop_shop_id: this.currentItem.shop_id }))
        .then(res => {
          if (res.data.status === 0) {
            console.log(res)
            alert("Add review successfully")
            this.value = 0
            this.text = ''
            this.showReview()
          } else {
            alert("Add fail, try again later")
          }
        })
        .catch(err => {
          console.log(err)
          console.log("请求错误")
        })
    },

    getUserId() {
      this.$axios.get("http://127.0.0.1:3007/my/userinfo")
        .then(res => {
          this.userid = res.data.data.user_id
          this.user = res.data.data
          console.log(this.userid)
        })
    },

    showReview() {
      this.$axios.get("http://127.0.0.1:3007/review/show/" + this.currentItem.shop_id)
        .then(res => {
          console.log(res.data)
          this.reviews = res.data.data

        })
        .catch(err => {
          console.log(err)
          console.log("请求错误")
        })
    },
    deleteReview(review) {
      this.$axios.delete("http://127.0.0.1:3007/review/delete/" + review.review_id)
      this.showReview()
      console.log(review.review_id)
    },
    updateReview(review) {
      if (this.reviewText === '') {
        this.reviewText = 'This cat only gave rating without any comments...'
      }
      this.$axios.post("http://127.0.0.1:3007/review/update/" + review.review_id,
        QueryString.stringify({ text: this.reviewText, stars: this.new_value, shop_shop_id: this.currentItem.shop_id }))
        .then(res => {
          if (res.data.status === 0) {
            console.log(res)
            alert("Update review successfully")
            this.reviewText = ''
            this.showReview()

          } else {
            alert("Update fail, try again later")
          }
        })
        .catch(err => {
          console.log(err)
          console.log("请求错误")
        })
    }


  },

  components: {

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
  align-items: center;
  justify-content: center;
  text-align: center;

}

#shopname {
  margin: 20px;
  font-size: 30px;
}

.item {
  width: 300px;
  height: 280px;
  margin: 40px;
  background-color: #FFF5E9;
  border-radius: 30px;
  text-align: center;
}

/* .item:hover {
  background-color: rgb(146, 123, 101);
  transition: all 0.5s;
} */

.item img {
  margin-top: 20px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  transition: .3s;
}

.item img:hover {
  border-radius: 30px;
  width: 150px;
  height: 150px;


}


.modal-body {
  background-color: #FFF5E9;
}

#logo {
  position: relative;
  width: 300px;
  margin-top: 20px;
  border: 1px solid #A56221;
  border-radius: 40px;
  box-shadow: 5px 5px #A56221;
  z-index: 999;
}

.head {
  position: relative;
  width: 80%;
  margin: 0 auto;
  padding-top: 120px;
  padding-bottom: 20px;
  background-color: #fff;
  text-align: center;
  border-radius: 60px;
  transform: translateY(-100px);
}

.name {
  font-size: 40px;
}

.cate {
  font-size: 24px;
}

.open_hour {
  margin-top: 26px;
  font-size: 26px;
}

.icon {
  width: 60px;
}

#description_title,
#menu_title,
#review_title {
  font-size: 28px;

}

#description {
  margin: 0 auto;
  width: 90%;
  /* height: 200px; */
  padding: 30px 30px;
  border-radius: 40px;
  background-color: #fff;
  font-size: 34px;
  font-family: 'Gabriola';
  text-align: center;

}

.menu_container,
.review_container {
  margin-top: 50px;
}

#menu {
  width: 80%;
  height: 700px;
  border-radius: 30px;
  object-fit: cover;
}

.avg_rate {
  text-align: center;
  font-size: 40px;
}

.addReview {
  width: 80%;
  height: 240px;
  background-color: #fff;
  border-radius: 30px;
  margin: 0 auto;
  margin-top: 20px;
  overflow: hidden;
}



#pro_pic {
  width: 100px;
  height: 100px;
  margin: auto;
}

#username {
  width: 100%;
  font-size: 26px;
  text-align: center;
  margin: auto;
}

/* review */
.myreview {
  width: 80%;
  height: 100%;
  border-radius: 30px;
  margin: 0 auto;
  padding: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

#text {
  width: 90%;
  height: 80%;
  margin: auto;
  border: 1px solid #A56221;
  border-radius: 30px;
}

.userinfo {
  position: relative;
  width: 20%;
  height: 100%;
  float: left;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: center;
}

.review{

}

.review-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.review-username {
  /* add any additional styling for the username here */
}

.review-date {
  /* add any additional styling for the date here */
  display: inline;
}

.review-stars {
  /* add any additional styling for the stars here */
}

.review-text {
  /* add any additional styling for the text here */
}
</style>
