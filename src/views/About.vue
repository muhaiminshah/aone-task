<template>
  <div class="about">
    <PageHeader :page-title="pageTitle" :username="username"/>
    <div class="d-flex flex-row mt-5 mx-5">
      <div class="left-container w-50 pr-3 mr-3">
        <h5 class="text header">Lorem ipsum dolor sit amet</h5>
        <br>
        <p class="text para para-content-1">consectetur adipiscing elit. Nulla vel turpis turpis. Sed mauris mauris, aliquam sed ante ut, ullamcorper laoreet erat. Duis eu rutrum purus. Ut luctus bibendum tellus ut congue. Ut dolor nisi, maximus aliquam nulla sed, venenatis consequat arcu. Nulla hendrerit vehicula arcu. In consectetur, purus sed consequat posuere, orci nunc consequat ipsum, ut sodales urna massa at neque.</p>
        <br>
        <p class="text para para-content-2">Nulla eget tellus sodales, venenatis lacus eget, lobortis libero. Cras scelerisque metus non mi condimentum, ac lacinia enim fermentum. Sed arcu tortor, hendrerit a eros ac, eleifend porta enim. Suspendisse molestie enim quam, a maximus massa faucibus nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer tortor odio, iaculis eget lobortis iaculis, tempor nec ante. Aliquam venenatis nisl at ipsum commod</p>
      </div>
      <div class="right-container">
        <img src="@/assets/buildings.png" alt="buildings">
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
export default {
  name: "About",
  components: { PageHeader },
  data() {
    return {
      pageTitle: "About",
      username: "",
    };
  },
  mounted() {
    this.username = this.$store.getters.getUsername;
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;700&display=swap");
.text {
  font-family: "Mulish", sans-serif;
}

.header {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.2px;
}

.para {
  font-style: normal;
  font-size: 14px;
}

.left-container {
  padding: 0 70px 0 0;
}
</style>
