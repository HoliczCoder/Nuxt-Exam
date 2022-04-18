export default ($axios) => ({
  getHome() {
    return $axios.get("home");
  },
  getProducts() {
    return $axios.get("products");
  },
  getList() {
    return $axios.get("");
  },
});
