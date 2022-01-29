<template>
  <div class="users">
    <PageHeader :page-title="pageTitle" :username="username" />
    <div class="mt-5 mx-5">
      <b-card title="All users" class="mb-2">
        <table class="table mt-4">
          <thead>
            <tr>
              <th></th>
              <th><span>Full Name</span></th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td style="vertical-align: center"><b-avatar :src="user.avatar"></b-avatar></td>
              <td style="vertical-align: center">{{ user.first_name + " " + user.last_name }}</td>
              <td>{{ user.email }}</td>
              <td class="text-right">
                <div class="btn-group">
                  <router-link
                    :to="{ name: 'UserDetail', params: { id: user.id } }"
                    tag="button"
                    class="btn btn-primary btn-sm edit"
                  >
                    <span class="button-text">VIEW DETAIL</span>
                  </router-link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </b-card>
    </div>
    <div class="d-flex justify-content-end mt-5 mx-5">
      <b-pagination v-model="currentPage" :total-rows="totalItems" align="right"></b-pagination>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import axios from "axios";

export default {
  name: "Users",
  components: { PageHeader },
  data: function () {
    return {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: 0,
      queryCount: null,
      pageTitle: "Users",
      username: "",
      fields: [
        { key: "name", label: "Full Name" },
        { key: "email", label: "Email" },
      ],
      users: [],
    };
  },
  async mounted() {
    this.username = this.$store.getters.getUsername;
    await this.retrieveAllUsers();
  },
  methods: {
    async retrieveAllUsers() {
      await axios
        .get("https://reqres.in/api/users/", null)
        .then((res) => {
          this.users = res.data.data;
          this.totalItems = this.users.length;
        })
        .catch(() => {
          console.log("Error retrieving users data.");
        });
    },
  },
};
</script>

<style scoped>
b-avatar {
  border-width: 4px;
  border-color: #a4a6b3;
  border-style: solid;
}

.text-right {
  text-align: end;
}

button {
  width: 100px;
  vertical-align: center;
  background-color: #65a7db;
  border: none;
}

.button-text {
  font-family: "Mulish", sans-serif;
  font-size: 11px;
}

td {
  vertical-align: center;
}
</style>
