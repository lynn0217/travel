<template>
  <div class="list">
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
    </div>
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

.border-topbottom {
  &:before {
    border-color: #cccccc;
  }

  &:after {
    border-color: #cccccc;
  }
}

.title {
  background-color: #eeeeee;
  line-height: 0.44rem;
  padding-left: 0.2rem;
  color: #666;
  font-size: 0.26rem;
}
</style>
