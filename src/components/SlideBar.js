export default {
  name: "SlideBar",
  data() {
    return {
      userinfo: {}
    }
  },
  methods: {
    getData() {
      this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(res => {
          this.userinfo = res.data.data;
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  },
  beforeMount() {
    this.getData();//在页面加载之前获取数据
  },
  computed: {
    topiclimitby5() {
      if (this.userinfo.recent_topics) {
        
        return this.userinfo.recent_topics.slice(0, 5);
      }else{
        return this.userinfo.recent_topics
      }
    },
    replylimitby5() {
      if (this.userinfo.recent_replies) {
        return this.userinfo.recent_replies.slice(0, 5);
      }
    }
  },
  watch:{
    '$route'(to,from){
      this.getData();
    }
}
};