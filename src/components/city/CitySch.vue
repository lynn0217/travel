<template>
  <div class="search">
    <input class="input-search" type="text" placeholder="请输入城市名或拼音" />
  </div>
</template>

<script>
export default {
  name: 'CitySearch',
  data() {
    return {}
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/styles/varibles.styl';

.search {
  background-color: $bgColor;
  padding: 0 0.1rem;
  height: 0.72rem;

  .input-search {
    box-sizing: border-box;
    padding: 0 0.2rem;
    text-align: center;
    height: 0.62rem;
    line-height: 0.63rem;
    width: 100%;
    border-radius: 0.06rem;
    color: #666;
  }
}
</style>
