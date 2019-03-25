export default {
    name: "Article",
    data() {
        return {
            post: {},
            isLoading: false,//是否正在加载
        }
    },
    methods: {
        getArticalData() {
            this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
                .then(res => {
                    this.post = res.data.data;
                    this.isLoading = false;
                })
                .catch(err => { console.log(err) })
        }
    },
    beforeMount() {
        this.isLoading = true;
        this.getArticalData()
    },
    watch:{
        '$route'(to,from){
            this.isLoading = true;
            this.getArticalData()
        }
    }
};
