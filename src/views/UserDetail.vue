<template>
  <div>
    <PageHeader :page-title="pageTitle" :username="username" />
    <div class="mt-5 mx-5"><b-spinner v-if="isFetching"></b-spinner></div>
    <div v-if="!isFetching" class="mt-5 mx-5">
      <b-card class="mb-2" style="max-width: 50%; padding-right: 5rem !important">
        <b-card-title class="text p-3"><span class="text-fullname">{{ getFullname }}</span></b-card-title>
        <div class="d-flex mb-3">
          <div class="d-flex flex-grow-1"><img :src="user.avatar"></div>
          <div class="d-flex flex-column justify-content-between py-3">
            <div class="mb-3">
              <p class="text pb-0 m-0">First Name</p>
              <span class=" text text-user-detail">{{ user.first_name }}</span>
            </div>
            <div class="mb-3">
              <p class="text pb-0 m-0">Last Name</p>
              <span class="text text-user-detail">{{ user.last_name }}</span>
            </div>
            <div class="mb-3">
              <p class="text pb-0 m-0">Email</p>
              <span class="text text-user-detail">{{ user.email }}</span>
            </div>
          </div>
        </div>
      </b-card>
    </div>
    <div class="mt-5 mx-5">
      <b-button pill @click="previousPage()"><span id="button-text">BACK</span></b-button>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import axios from "axios";

export default {
  name: "UserDetail.vue",
  components: { PageHeader },
  data: function () {
    return {
      pageTitle: "Users",
      username: "",
      user: {},
      isFetching: false,
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.id) {
        vm.retrieveUserDetails(to.params.id);
      }
    });
  },
  computed: {
    getFullname: function () {
      return this.user.first_name + " " + this.user.last_name;
    },
  },
  methods: {
    async retrieveUserDetails(id) {
      this.isFetching = true;
      await axios.get(`https://reqres.in/api/users/${id}`, null).then((res) => {
        this.user = res.data.data;
        this.isFetching = false;
      });
    },
    previousPage() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.username = this.$store.getters.getUsername;
  },
};
</script>

<style scoped>
img {
  margin: 15px;
  border-radius: 8px;
  width: 80%;
  height: auto;  ;
}

.text {
  font-family: "Mulish", sans-serif;
}

#button-text {
  color: white;
  font-family: "Mulish", sans-serif;
  font-size: 11px;
  vertical-align: center;
}

button {
  width: 100px;
  vertical-align: center;
  background-color: #65A7DB;
  border: none;
}

.text-user-detail {
  color: #828282;
}

.text {
  font-family: "Mulish", sans-serif;
  font-size: 16px;
  letter-spacing: 0.2px;
  line-height: 20px;
}

.text-fullname {
  font-size: 24px;
}
</style>
