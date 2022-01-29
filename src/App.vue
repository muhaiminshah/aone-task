<template>
  <div id="app">
    <!--    <div id="nav">-->
    <!--      <router-link to="/">Home</router-link> |-->
    <!--      <router-link to="/about">About</router-link>-->
    <!--    </div>-->
    <Sidebar />
    <div id="content-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
export default {
  name: "App",
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
#content-container {
  padding: 0;
  padding-left: 255px;
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #f7f8fC;
}
</style>
