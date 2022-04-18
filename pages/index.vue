<template>
  <div>
    <div>
      <input
        type="text"
        placeholder="typing here to search"
        @keyup.enter="startShowing()"
        v-model="sreach"
        class="flex flex-auto text-between"
      />
    </div>
    <div>
      <div class="show-product" v-for="(item, index) in homeData" :key="index">
        <div>{{ item.author }}</div>
        <div>{{ item.content }}</div>
        <div><img :src="item.urlToImage" /></div>
        <div>{{ item.description }}</div>
        <a class="bg-red-500 text-2xl font-semibold" :href="item.url"
          >Click here to see detail articles</a
        >
        <div class="flex justify-center">
          <div class="bg-blue-500 w-72">
            <a href="#" @click="AddToFavorites(item)">Add to Favorites</a>
          </div>
        </div>
        <div class="m-3">
          <a
            class="mt-20 w-full px-5 text-center bg-yellow-400 py-2 rounded-lg"
            :href="'https://www.facebook.com/sharer/sharer.php?u=' + item.url"
            ><i class="fa-solid fa-share"></i> facebook</a
          >
        </div>
        <div class="m-3">
          <a
            class="mt-20 w-full px-5 text-center bg-yellow-400 py-2 rounded-lg"
            :href="
              'http://twitter.com/share?text=text&url=http://' +
              item.url +
              '&hashtags=hashtag1,hashtag2,hashtag3'
            "
            ><i class="fa-solid fa-share"></i> twitter</a
          >
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      homeData: null,
      //  looking: "",
      sreach: "",
    };
  },

  /* async fetch() {
    if (process.client) {
    }
    this.homeData = await this.$repositories.home.getList();
    this.homeData = this.homeData.articles;
    console.log(this.homeData);
  }, */
  fetchOnServer: false,
  methods: {
    start() {
      console.log("hello world");
    },
  },
  methods: {
    async startShowing() {
      if (this.sreach) {
        if (process.client) {
          console.log(this.sreach);
          this.homeData = await this.$repositories.home.getList(this.sreach);
          this.homeData = this.homeData.articles;
          console.log(this.homeData);
        }
      }
    },
  },
};
</script>
