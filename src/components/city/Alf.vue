<template>
  <div>
    <ul class="list">
      <li class="item" v-for="(item,key) of cities" :key="key" @click="handlePosi">{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Alf',
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false
    }
  },
  methods: {
    handlePosi(e) {
      this.$emit('change', e.target.innerText)
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../assets/styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    line-height: 0.4rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
