<template>
  <div>
    <div class="banner" @click="showGal">
      <img
        class="banner-img"
        src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
        alt
      />
      <div class="banner-Info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-icon">
          <span class="iconfont">&#xe632;</span>
          39
        </div>
      </div>
    </div>
    <BannerGallary :imgs="imgs" v-show="showGallary"></BannerGallary>
  </div>
</template>

<script>
import BannerGallary from '../common/gallary/Gallary.vue'
export default {
  data() {
    return {
      showGallary: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg',
        'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg'
      ]
    }
  },
  methods: {
    showGal() {
      this.showGallary = true
    }
  },
  components: {
    BannerGallary
  },
  updated() {
    this.refs.swiper.refresh()
  }
}
</script>

<style lang='stylus' scoped>
.banner {
  overflow: hidden;
  position: relative;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }
}

.banner-Info {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  display: flex;
  align-content: flex-end;

  .banner-title {
    color: white;
    font-size: 0.3rem;
    padding: 0.04rem;
  }

  .banner-icon {
    margin-left: 2.2rem;
    width: 1.36rem;
    text-align: center;
    color: white;
    background-color: black;
    border-radius: 0.2rem;
    background: rgba(0, 0, 0, 0.8);
  }
}
</style>
