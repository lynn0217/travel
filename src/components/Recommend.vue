<template>
  <div>
    <div class="title">热销推荐</div>
    <ul v-for="item of recommendList" :key="item.id">
      <li class="item border-bottom">
        <img class="item-img" :src="item.imgURL" />

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
  data() {
    return {
      recommendList: [
        {
          id: '0001',
          imgURL: 'https://imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg',
          title: '三亚自由行',
          desc: '洲际品牌三亚湾皇冠假日'
        },
        {
          id: '0002',
          imgURL:
            'https://imgs.qunarzz.com/vs_ceph_b2c_001/379fa552-b68b-438c-863d-a8c38265066e.jpg',
          title: '三亚自由行',
          desc: '洲际品牌三亚湾皇冠假日'
        },
        {
          id: '0003',
          imgURL:
            'https://imgs.qunarzz.com/vs_ceph_vs_tts/9e81fcbe-ff03-4a99-b51b-3065f5857ee5.jpg',
          title: '三亚自由行',
          desc: '洲际品牌三亚湾皇冠假日'
        },
        {
          id: '0004',
          imgURL:
            'https://imgs.qunarzz.com/vs_ceph_vs_tts/8a16c989-8206-4ab5-8d54-7dd02fed5203.jpg',
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
