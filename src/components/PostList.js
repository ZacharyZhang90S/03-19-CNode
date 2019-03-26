import pagination from "./Pagination";
export default {
  name: "PostList",
  data() {
    return {
      isLoading: true,
      posts: [] //代表页面的列表数组
    };
  },
  components: {
    pagination
  },
  methods: {
    getData() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: this.postpage,
            limit: 20
          }
        })
        .then(res => {
          this.isLoading = false;
          this.posts = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    renderList(value) {
      this.postpage = value;
      this.getData();
    }
  },
  beforeMount() {
    this.getData();
  }
};

