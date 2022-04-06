<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList></CityList>
  </div>
</template>

<script>
import CityHeader from './CityHeader.vue'
import CitySearch from './CitySch.vue'
import CityList from './CityList.vue'

export default {
  data() {
    return {}
  },
  components: {
    CityHeader,
    CitySearch,
    CityList
  }
}
</script>

<style lang='stylus' scoped></style>
