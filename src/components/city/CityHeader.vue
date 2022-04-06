<template>
  <div>
    <div class="header">城市选择</div>
    <router-link to="/">
      <div class="iconfont header-icon">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  data() {
    return {}
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/styles/varibles.styl';

.header {
  position: relative;
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  color: #fff;
  text-align: center;
  background-color: $bgColor;
  font-size: 0.32rem;
}

.header-icon {
  position: absolute;
  top: 10px;
  left: 7px;
  font-size: 0.4rem;
  color: #fff;
}
</style>
