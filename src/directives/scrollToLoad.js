/* 滚动加载更多指令 */
const getPositionSize = (el, prop) => {
  return el === window || el === document
    ? document.documentElement[prop]
    : el[prop];
};
const getOffsetHeight = el => {
  return getPositionSize(el, 'offsetHeight');
};
const getElementTop = el => el.getBoundingClientRect().top;

const canScrollMoreData = (el, binding) => {
  const canScroll = el.getAttribute('canScroll');
  const heightBelowTop = getOffsetHeight(el) + getElementTop(el);
  const offsetHeight = getOffsetHeight(window.document.documentElement);
  const shouldTrigger = heightBelowTop - offsetHeight <= 100;
  if (shouldTrigger && canScroll) {
    binding.value(); // 请求数据
  }
};

export default {
  scrollToLoad: {
    inserted: function(el, binding) {
      el.__vueScrollToLoad__ = canScrollMoreData;
      document.addEventListener(
        'scroll',
        canScrollMoreData.bind(null, el, binding), // 可以加上节流
        false
      );
    },
    unbind: function(el) {
      // 解除时间监听
      document.removeEventListener('scroll', el.__vueScrollToLoad__, false);
      delete el.__vueScrollToLoad__;
    },
  },
};
