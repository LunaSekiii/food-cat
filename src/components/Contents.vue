<template>
  <div id="contentBox">
    <div class="item" v-for="item in items" :key="item.shop_id" @click="openDialog(item)">

      <img v-bind:src="'http://127.0.0.1:3007/api/pic/' + item.logo" alt="" />
      <div id="shopname">{{ item.name }}</div>
      <!-- <Dialog /> -->
    </div>
    <el-dialog title="Details" :visible.sync="dialogVisible" width="70%">


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
                  <el-rate v-model="value" :colors="colors" class="star"></el-rate>
                  <input type="text" placeholder="write your comment here" v-model="text" class="text">
                  <div id="submit"> <img src="../assets/img/send.png" alt="" @click="addReview"></div>
                </div>



              </div>
            </div>
          </div>

          <div class="shopReview">
            <div v-for="review in reviews" :key="review._id" class="review">
              <p id="review_username">{{ review.username }}</p>
              <div id="review_star"><el-rate v-model="review.stars" disabled text-color="#ff9900"
                  style="margin-left:auto"></el-rate></div>
              <p id="review_text">{{ review.text }}</p>
              <p id="review_date">{{ review.date }}</p>
              <div class="delete-update-container">
                <span v-if="userid === review.user_user_id" id="delete">

                  <el-popover placement="top" width="353" v-model="visible">
                    <p>Are you sure you wanna delete your comment... that's valuable to us TvT</p>
                    <div style="text-align: right; margin: 0">
                      <el-button size="mini" type="text" @click="visible = false">No</el-button>
                      <el-button type="primary" size="mini" @click="deleteReview(review)">Yes</el-button>
                    </div>
                    <img src="../assets/img/icons8-empty-trash-96.png" alt="" slot="reference">
                  </el-popover>

                </span>
                <el-popover v-if="userid === review.user_user_id" placement="button" width="600" trigger="click">
                  <div><el-rate v-model="new_value" :colors="colors"></el-rate></div>
                  <div><input type="text" v-model="reviewText" :placeholder="review.text"></div>
                  <el-button @click="updateReview(review)">update</el-button>
                  <span slot="reference" id="update"><img src="../assets/img/icons8-多重编辑-96.png" alt=""></span>
                </el-popover>
              </div>


            </div>
          </div>

        </div>

      </div>



      <span slot="footer" class="dialog-footer">

        <el-button type="primary" @click="dialogVisible = false">close</el-button>
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
      user: [],
      visible: false,


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
      if (this.value != '') {
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
      } else {
        alert("please give the rate")
      }

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
        .then(response => {
          // 回调函数
          console.log(response);
          this.visible = false;
          this.showReview();
        })
        .catch(error => {
          console.log(error);
        });
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

<style lang="css" scoped>
* {
  color: #804C1A;
}

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
  font-family: 'Trebuchet MS';
}

.item {
  width: 300px;
  height: 280px;
  margin: 40px;
  background-color: #FFF5E9;
  border-radius: 30px;
  text-align: center;
}



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
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
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
  background-color: #fff;
}

#pro_pic {
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50%;
  border: 1px solid #A56221;
}

#username {
  width: 100%;
  font-size: 26px;
  text-align: center;
  margin: auto;
  font-family: 'Trebuchet MS';
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

.myreview .star {
  margin-top: 20px;
  margin-left: 15px;
  float: left;
}

.myreview .text {
  margin-top: 2px;
  margin-left: 5px;
  width: 90%;
  height: 50%;
  border-style: none;
  outline: none;

}

#submit {
  position: absolute;
  bottom: 10px;
  right: 10px;
}


#text {
  width: 90%;
  height: 80%;
  margin: auto;
  border: 1px solid #A56221;
  border-radius: 30px;
  position: relative;

}
.delete-update-container{
  position: absolute;
  bottom: 0px;
  right: 30px;
}


.review {
  margin: 0 auto;
  margin-top: 10px;
  border-bottom: 1px dashed #A56221;
  width: 80%;

}

#review_username {
  font-weight: 500;
  font-size: 28px;
  font-family: 'Trebuchet MS';
  color: #7c4b1c;


}


#delete img {
  width: 50px;
}

#review_text {
  font-size: 20px;
  /* font-family: 'Segoe Print'; */

  font-family: 'Segoe UI Variable Small';
}

#review_date {
  color: #b36a22;
}

#update img {
  width: 50px;
}

</style>

