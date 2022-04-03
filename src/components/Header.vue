<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">输入城市/景点/游玩主题</div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang='stylus' scoped>
.header {
  line-height: 0.86rem;
  display: flex;
  background-color: #00bcd4;
  color: #fff;

  .header-left {
    float: left;
    width: 0.64rem;
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    border-radius: 0.1rem;
    margin-left: 0.2rem;
    margin-top: 0.12rem;
    background-color: #fff;
    color: #ccc;
  }

  .header-right {
    float: right;
    width: 1.24rem;
    text-align: center;
  }
}
</style>
