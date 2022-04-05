<template>
  <div>
    <div class="title">热销推荐</div>
    <ul v-for="item of list" :key="item.id">
      <li class="item border-bottom">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data() {
    return {}
  }
}
</script>

<style lang='stylus' scoped>
@import '../assets/styles/mixins.styl';

.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  text-indent: 0.2rem;
  background-color: #eee;
}

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;
  }

  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipsis();
  }

  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
    ellipsis();
  }

  .item-btn {
    line-height: 0.44rem;
    margin-top: 0.16rem;
    color: #fff;
    border-radius: 0.06rem;
    padding: 0 0.2rem;
    background-color: #ff8602;
  }
}
</style>
