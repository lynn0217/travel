<template>
  <div>
    <div class="title">周末去哪儿游</div>
    <ul v-for="item of recommendList" :key="item.id">
      <li class="item border-bottom">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgURL" />
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
  data() {
    return {
      recommendList: [
        {
          id: '0001',
          imgURL:
            '//img1.qunarzz.com/sight/p0/1712/16/16dd785ae3e2447ba3.img.jpg_256x160_78063187.jpg',
          title: '三亚自由行',
          desc: '洲际品牌三亚湾皇冠假日'
        },
        {
          id: '0002',
          imgURL:
            '//img1.qunarzz.com/wugc/p224/201207/13/f40f8a9e4327658c93835fbb.jpg_256x160_b98c31cd.jpg',
          title: '三亚自由行',
          desc: '洲际品牌三亚湾皇冠假日'
        },
        {
          id: '0003',
          imgURL:
            '//img1.qunarzz.com/sight/p0/1505/b0/b0132e78efa00572.water.jpg_256x160_917c1404.jpg',
          title: '三亚自由行',
          desc: '洲际品牌三亚湾皇冠假日'
        },
        {
          id: '0004',
          imgURL:
            '//img1.qunarzz.com/sight/p0/1505/c7/c77ffdc12cfba81d.water.jpg_256x160_c4a898ec.jpg',
          title: '三亚自由行',
          desc: '洲际品牌三亚湾皇冠假日'
        }
      ]
    }
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

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 33.6%;

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
