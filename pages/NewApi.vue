<template>
  <div>
    <div>hello this is main page</div>
  </div>
</template>

<script>
export default {
  name: "NewApi",
  data() {
    return {
      homeData: null,
    };
  },

  //SSR
  /*  async asyncData({$axios}) {
    const {data} = await $axios.get('/home')
    return {
      data: data
    }
  },*/
  //SSR
  async fetch() {
    if (process.client) {
      //thực thi các lệnh thuộc về trình duyệt
    }
    this.homeData = await this.$repositories.home.getHome(); //await this.$axios.get('/home');
  },
  fetchOnServer: false,
};
</script>
