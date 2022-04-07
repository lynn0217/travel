<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeSwiper :list="swiperList"></HomeSwiper>
    <HomeIcons :list="iconList"></HomeIcons>
    <HomeRecommend :list="recommendList"></HomeRecommend>
    <HomeWeekend :list="weekendList"></HomeWeekend>
  </div>
</template>

<script>
import HomeHeader from '../components/home/Header.vue'
import HomeSwiper from '../components/home/Swiper.vue'
import HomeIcons from '../components/home/Icons.vue'
import HomeRecommend from '../components/home/Recommend.vue'
import HomeWeekend from '../components/home/Weekend.vue'
import axios from 'axios'
export default {
  data() {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },

  methods: {
    getHomeInfo() {
      axios.get('/api/city.json?city' + this.city).then(this.getHomeInfoSucc)
      axios.get('/api/index.json').then(this.getHomeInfoSwiperList)
      axios.get('/api/index.json').then(this.getHomeIcon)
      axios.get('/api/index.json').then(this.getHomeRecList)
      axios.get('/api/index.json').then(this.getPicList)
    },

    getHomeInfoSwiperList(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
      }
      // console.log(res)
    },
    getHomeIcon(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.iconList = data.iconList
      }
      // console.log(res)
    },
    getHomeRecList(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.recommendList = data.recommendList
      }
      // console.log(res)
    },
    getPicList(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.weekendList = data.weekendList
      }
    }
  },
  mounted() {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>
</style>
