<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="input-search" type="text" placeholder="请输入城市名或拼音" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCity(item.name)"
        >{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoDate">没有匹配的结果</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search)
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoDate() {
      return !this.list.length
    }
  },
  watch: {
    keyword() {
      if (!this.keyword) {
        this.list = []
        return
      }
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const res = []
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              res.push(value)
            }
          })
        }
        this.list = res
      }, 100)
    }
  },
  methods: {
    handleCity(city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
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

.search-content {
  overflow: hidden;
  z-index: 1;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eee;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
    background-color: #fff;
  }
}
</style>
