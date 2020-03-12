export default {
  data() {
    return {
      isScroll: true, // 是否可以滚动
    };
  },
  methods: {
    canScrollMoreData() {
      const scrollTopHeight =
        document.documentElement.scrollTop || document.body.scrollTop; // 滚动高度
      const clientHeight =
        document.documentElement.clientHeight || window.screen.availHeight; // 屏幕可用工作区高度
      const offsetHeight =
        document.documentElement.offsetHeight || document.body.offsetHeight; // 网页可见区域高（包含边线的高）

      if (
        scrollTopHeight + clientHeight + 50 >= offsetHeight &&
        this.isScroll
      ) {
        console.log('竟來了');
        this.queryListData(); // 请求数据
      }
    },
    handleMonitorScroll() {
      document.addEventListener('scroll', this.canScrollMoreData, false);
    },
  },
  mounted() {
    this.handleMonitorScroll();
  },
  destroyed() {
    document.removeEventListener('scroll', this.canScrollMoreData, false);
  },
};
