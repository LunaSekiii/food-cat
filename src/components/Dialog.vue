<template>
    <div>
        <!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button> -->
        <img v-bind:src="'http://127.0.0.1:3007/api/pic/' + item.logo" alt="" @click="dialogVisible = true" />
        <el-dialog title="提示" :visible.sync="dialogVisible" width="90%">


            <div class="modal-body">
                <img v-bind:src="'http://127.0.0.1:3007/api/pic/' + item.logo" alt="" id="logo" />

                <div class="head">
                    <div class="name">{{ item.name }}</div>
                    <div class="cate">{{ item.category }}</div>
                    <div class="open_hour">{{ item.open_hour }}</div>
                </div>

                <div class="description">
                    <div id="description_title">
                        <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-description-internet-marketing-flaticons-lineal-color-flat-icons.png"
                            class="icon" />
                        <span>Description</span>
                    </div>
                    <div id="description">{{ item.description }}</div>
                </div>

                <div class="menu_container">
                    <div id="menu_title">
                        <img src="https://img.icons8.com/doodle/48/null/folded-booklet.png" class="icon" />
                        <span>Menu</span>
                    </div>
                    <!-- <img v-bind:src="'http://127.0.0.1:3007/api/menu/' + item.menu" alt="" id="menu"> -->
                    <img src="../assets/img/cheese-4731862_1920.jpg" alt="" id="menu">
                </div>

                <div class="review_container">
                    <div id="review_title">
                        <img src="https://img.icons8.com/doodle/48/null/comments.png" class="icon" />
                        <span>Rating and Review</span>
                    </div>

                    <div class="avg_rate"><img src="https://img.icons8.com/doodle/48/null/star--v1.png"
                            class="icon" />5.0</div>

                    <div class="addReview">
                        <div class="userinfo">
                            <img src="../assets/img/pancakes-5989144_1920.jpg" alt="">
                            <div id="username">username</div>
                        </div>

                        <div class="review">
                                <div id="text">

                                    <div>
                                        <!-- xingxing -->
                                        <ul>
                                            <li><img src="https://img.icons8.com/doodle/48/000000/star--v1.png" alt=""></li>
                                            <li><img src="https://img.icons8.com/doodle/48/000000/star--v1.png" alt=""></li>
                                            <li><img src="https://img.icons8.com/doodle/48/000000/star--v1.png" alt=""></li>
                                            <li><img src="https://img.icons8.com/doodle/48/000000/star--v1.png" alt=""></li>
                                            <li><img src="https://img.icons8.com/doodle/48/000000/star--v1.png" alt=""></li>
                                        </ul>
                                    </div>

                                    <input type="text" placeholder="write your comment here">

                                    <img src="../assets/img/send.png" alt="" id="submit">
                                </div>
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
export default {
    data() {
        return {
            dialogVisible: false
        };
    },
    props: {
        item: {
            default: () => []
        }
    },
    methods: {

    },
    mounted() {
        console.log(this.item)
    }
};
</script>

<style>
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
    height: 200px;
    background-color: #fff;
    border-radius: 30px;
    margin: 0 auto;
    margin-top: 20px;
    overflow: hidden;
}

.userinfo {
    position: relative;
    width: 20%;
    height: 100%;
    background-color: darkseagreen;
    float: left;
}

.userinfo img {
    position: relative;
    margin-top: 30%;
    width: 50%;
    border-radius: 50%;
    border: 1px solid #A56221;
    left: 50%;
    transform: translateX(-50%);
}

#username {
    font-size: 20px;
    text-align: center;
}
</style>