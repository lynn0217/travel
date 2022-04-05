<template>
  <div>
    <HomeHeader :city="city"></HomeHeader>
    <HomeSwiper :list="swiperList"></HomeSwiper>
    <HomeIcons :list="iconList"></HomeIcons>
    <HomeRecommend :list="recommendList"></HomeRecommend>
    <HomeWeekend :list="weekendList"></HomeWeekend>
  </div>
</template>

<script>
import HomeHeader from '../components/Header.vue'
import HomeSwiper from '../components/Swiper.vue'
import HomeIcons from '../components/Icons.vue'
import HomeRecommend from '../components/Recommend.vue'
import HomeWeekend from '../components/Weekend.vue'
import axios from 'axios'
export default {
  data() {
    return {
      city: '',
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
  mounted() {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo() {
      axios.get('/api/city.json').then(this.getHomeInfoSucc)
      axios.get('/api/index.json').then(this.getHomeInfoSwiperList)
      axios.get('/api/index.json').then(this.getHomeIcon)
      axios.get('/api/index.json').then(this.getHomeRecList)
      axios.get('/api/index.json').then(this.getPicList)
    },
    getHomeInfoSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
      }
      // console.log(res)
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
  }
}
</script>

<style>
</style>
