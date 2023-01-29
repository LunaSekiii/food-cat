<template>
  <div id="navbar">
    <ul class="shell">
      <li @click="goto(home)" class="nav_button">
        <span>logo</span>
      </li>

      <li class="empty_space">
        <span></span>
      </li>

      <li class="empty_space">
        <span></span>
      </li>

      <li @click="goto('restaurant')" class="nav_button">
        <div class="size_set_pic">
          <img src="https://img.icons8.com/doodle/48/null/cottage--v1.png" />
        </div>
        <div class="size_set">restaurant</div>
        <ul class="detail">
          <li @click="goto('restaurant')">
            <img
              src="https://img.icons8.com/doodle/48/null/noodles--v1.png"
            />view by category
          </li>
          <li>
            <img
              src="https://img.icons8.com/doodle/48/null/fire-element--v1.png"
            />hot restaurants
          </li>
        </ul>
      </li>

      <li @click="goto('drinks')" class="nav_button">
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
            <img
              src="https://img.icons8.com/doodle/48/null/fire-element--v1.png"
            />hot drinks
          </li>
        </ul>
      </li>

      <li class="nav_button">
        <div class="size_set_pic">
          <img src="https://img.icons8.com/doodle/48/null/likes-folder.png" />
        </div>
        <div class="size_set">favorite</div>
        <ul class="detail">
          <li>view by category</li>
          <li>hot restaurant</li>
        </ul>
      </li>

      <li class="empty_space" id="empty_space">
        <span></span>
      </li>

      <li class="nav_button">
        <div class="size_set_pic">
          <img src="https://img.icons8.com/doodle/48/null/name.png" />
        </div>
        <div class="size_set">favorite</div>
        <ul class="information detail">
          <li>profile picture</li>
          <li>username</li>
          <li>review count</li>
          <li @click="goto('login')">log out</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    goto(where) {
      this.$router.push(where);
    },
  },
};
</script>

<style>
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
</style>
