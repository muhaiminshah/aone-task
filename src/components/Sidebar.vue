<template>
  <div class="sidebar">
    <div id="top-sidebar">
      <img
        id="company-logo"
        src="../assets/aonelearn-logo.png"
        alt="aone-logo"
      />
      <span id="company-name">AOne</span>
    </div>
    <div class="menu">
      <b-nav vertical>
        <b-nav-item exact-active-class="active" class="pointer">
          <router-link to="/about" custom v-slot="{ navigate }">
            <span @click="navigate" @keypress.enter="navigate" role="link">
              <font-awesome-icon icon="info-circle" />
              <span class="menu-link ml-5">About</span>
            </span>
          </router-link>
        </b-nav-item>
        <b-nav-item active-class="active" class="pointer">
          <router-link to="/users" custom v-slot="{ navigate }">
            <span @click="navigate" @keypress.enter="navigate" role="link">
              <font-awesome-icon icon="user-friends" />
              <span class="menu-link ml-2 pl-2">Users</span>
            </span>
          </router-link>
        </b-nav-item>
      </b-nav>
    </div>
<!--    <div>-->
<!--      <b-list-group>-->
<!--        <b-list-group-item>Button Text Avatar</b-list-group-item>-->
<!--        <b-list-group-item>Button Image Avatar</b-list-group-item>-->
<!--      </b-list-group>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;700&display=swap");

.sidebar {
  background-color: #363740;
  position: absolute;
  width: 255px;
  height: 100vh;
  /*height: 608px;*/
  left: 0;
  top: 0;
  z-index: 1;
}

#top-sidebar {
  position: absolute;
  width: 143px;
  height: 90px;
  left: 23px;
  top: 15px;
}

#company-logo {
  position: absolute;
  left: 0;
  right: 53.85%;
  top: 0;
  bottom: 0;
}

#company-name {
  position: absolute;
  left: 54.55%;
  right: 0;
  top: 34.44%;
  bottom: 32.22%;

  /* Bold 24 (0.3 px) */

  font-family: Mulish, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.3px;

  color: #ffffff;
}

.menu {
  /*background-color: red;*/
  position: absolute;
  width: 255px;
  height: auto;
  left: 0px;
  top: 128px;
}

.menu ul {
  padding: 0;
  text-align: left;
}

.menu ul li {
  list-style: none;
  font-family: Mulish;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.2px;
  padding: 20px 33px;
  border-bottom: thin solid white;
}

.menu ul li.active {
  background-color: green;
}

.menu ul li:first-child {
  padding-top: 0;
}

.menu ul li a {
  font-family: "Mulish";
  text-decoration: none;
  font-weight: lighter;
  color: #a4a6b3;
}

.menu-link {
  margin-left: 20px;
}
</style>
