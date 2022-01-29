<template>
  <div class="d-flex justify-content-between mt-5 mx-5">
    <h3 class="page-title">{{ pageTitle }}</h3>
    <div style="text-align: right">
      <span class="mr-2 user-name">{{ username }}</span>
      <b-avatar src="https://placekitten.com/300/300" size="3rem"></b-avatar>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader.vue",
  props: ["pageTitle", "username"],
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;700&display=swap");
b-avatar {
  border-width: 5px;
  border-color: #a4a6b3;
  border-style: solid;
}

h3 {
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30.12px;
}

.user-name {
  margin-right: 15px;
  font-family: "Mulish", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
</style>
