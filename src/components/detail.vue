<template>
    
    <!-- 模态框（Modal） -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- <div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
					&times;
				</button>
				<h4 class="modal-title" id="myModalLabel">
					模态框（Modal）标题
				</h4>
			</div> -->
                <div class="modal-body">
                    <img src="../assets/img/cheese-4731862_1920.jpg" alt="" id="logo">
                    <div class="head">
                        <div class="name">restaurant name</div>
                        <div class="cate">category</div>
                        <div class="open_hour">Mon – Fri:
                            11.30 am – 3 pm 4.30 pm – 9.30 pm
                        </div>
                    </div>

                    <div class="description">
                        <div id="description_title">
                            <img
                                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-description-internet-marketing-flaticons-lineal-color-flat-icons.png" />
                            <span>Description</span>
                        </div>
                        <div id="description">There is chicken. And then there is Popeyes chicken. All that crunch. All
                            that juiciness. Our chicken is pure joy! </div>
                    </div>

                    <div class="menu_container">
                        <div id="menu_title">
                            <img src="https://img.icons8.com/doodle/48/null/folded-booklet.png" />
                            <span>Menu</span>
                        </div>
                        <img src="../assets/img/cheese-4731862_1920.jpg" alt="" id="menu">
                    </div>

                    <div class="review_container">
                        <div id="review_title">
                            <img src="https://img.icons8.com/doodle/48/null/comments.png" />
                            <span>Rating and Review</span>
                        </div>

                        <div class="avg_rate"><img src="https://img.icons8.com/doodle/48/null/star--v1.png" />5.0</div>

                        <div class="addReview">
                            <div class="userinfo">
                                <img src="../assets/img/logincatbackground.jpg" alt="">
                                <div id="username">username</div>
                            </div>
                            <div class="review">
                                <div id="text">

                                    <div>
                                        <!-- xingxing -->
                                        <ul>
                                            <li><img src="https://img.icons8.com/doodle/48/000000/star--v1.png" alt="">
                                            </li>
                                            <li><img src="https://img.icons8.com/doodle/48/000000/star--v1.png" alt="">
                                            </li>
                                            <li><img src="https://img.icons8.com/doodle/48/000000/star--v1.png" alt="">
                                            </li>
                                            <li><img src="https://img.icons8.com/doodle/48/000000/star--v1.png" alt="">
                                            </li>
                                            <li><img src="https://img.icons8.com/doodle/48/000000/star--v1.png" alt="">
                                            </li>
                                        </ul>
                                    </div>

                                    <input type="text" placeholder="write your comment here">

                                    <img src="../assets/img/send.png" alt="" id="submit">
                                </div>
                            </div>
                        </div>


                    </div>

                </div>



                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭
                    </button>
                    <button type="button" class="btn btn-primary">
                        提交更改
                    </button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal -->
    </div>
</template>

<script>

export default {
    data() {
        return {
            showModal: false
        };
    },
}
</script>

<style>
* {
    padding: 0px;
    margin: 0px;
}

.modal-dialog {
    width: 70%;
    background-color: #FFF5E9;
}

.modal-content {
    background-color: #FFF5E9;
}

.modal-body {
    position: flex;
    /* position: absolute; */
    /* width: 120px; */
    /* height: 120px; */
    /* top: 50%; */
    /* left: 50%; */
    /* margin-top: -60px; */
    /* margin-left: -60px; */
    /* background-color: #ACC; */
}


#logo {
    position: relative;
    left: 50%;
    /* margin: 0 auto; */
    width: 300px;
    border: 1px solid #A56221;
    border-radius: 40px;
    margin-left: -150px;
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

#description_title,
#menu_title,
#review_title {
    position: relative;
    width: 300px;
    margin: 0 auto;
    padding-bottom: 20px;
    font-size: 32px;
    margin-top: 70px;
}

#description {
    position: relative;
    /* margin: 0 auto; */
    padding: 30px 30px;
    width: 90%;
    height: 200px;
    border-radius: 60px;
    background-color: #fff;
    font-size: 34px;
    font-family: 'Gabriola';
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
}


#menu_title {
    width: 200px;

}

.menu_container {
    margin-top: 70px;
}

#menu {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 700px;
    border-radius: 30px;
    object-fit: cover;
}


#review_title {
    width: 360px;
}

.avg_rate {
    position: relative;
    margin: 0 auto;
    text-align: center;
    font-size: 40px;
}

.addReview {
    position: relative;
    width: 80%;
    height: 200px;
    background-color: #fff;
    border-radius: 30px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 20px;
    overflow: hidden;
}

.userinfo {
    position: relative;
    width: 20%;
    height: 100%;
    /* background-color: darkseagreen; */
    float: left;
}

.review {
    position: relative;
    width: 80%;
    height: 100%;
    /* background-color: hotpink; */
    float: right;
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

.review {
    display: flex;
}

#text {
    width: 90%;
    height: 80%;
    margin: auto;
    border: 1px solid #A56221;
    border-radius: 30px;
    /* background-color: rgb(189, 85, 85); */

}

#text input {
    margin-top: 2px;
    margin-left: 5px;
    width: 90%;
    height: 50%;
    border-style: none;
    outline:none;
    /* background-color:rgba(220,38,38,0.2); */
}

#text #submit{
    position: absolute;
    right:5px;
    bottom:5px;
    width: 70px;
    transform: rotateY(180deg);
}



#text ul {
    padding-left: 0;
    overflow: hidden;
}

#text img{
    width: 45px;

}

#text ul li {
    float: left;
    list-style: none;
    margin-left: 3px;
    width: 40px;
    opacity: 0.2;
}

#text ul li:hover {
    float: left;
    list-style: none;
    margin-left: 3px;
    width: 40px;
    opacity: 1;
}



#text ul li.light {
    opacity: 1;
}
</style>