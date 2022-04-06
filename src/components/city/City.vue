<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList :cities="cities" :hotCities="hotCities"></CityList>
    <Alf :cities="cities"></Alf>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './CityHeader.vue'
import CitySearch from './CitySch.vue'
import CityList from './CityList.vue'
import Alf from './Alf.vue'

export default {
  data() {
    return {
      cities: {},
      hotCities: []
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    Alf
  },
  mounted() {
    this.getCityInfo()
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json/').then(this.getCityInfoScc)
    },
    getCityInfoScc(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
      // console.log(res)
    }
  }
}
</script>

<style lang='stylus' scoped></style>
