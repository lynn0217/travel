<template>
  <div>
    <div class="title">周末去哪儿游</div>
    <ul v-for="item of list" :key="item.id">
      <li class="item border-bottom">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data() {
    return {}
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/styles/mixins.styl';

.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  text-indent: 0.2rem;
  background-color: #eee;
}

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 37.6%;

  .item-img {
    width: 100%;
  }
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
</style>
