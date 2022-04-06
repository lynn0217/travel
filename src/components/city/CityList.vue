<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleCity(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-topbottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCity(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: 'CityHeader',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleCity(city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true
    })
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['city'])
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
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

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  .title {
    background-color: #eeeeee;
    line-height: 0.44rem;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.3%;

      .button {
        margin: 0.1rem;
        text-align: center;
        padding: 0.1rem 0;
        border-radius: 0.06rem;
        border: 0.02rem solid #ccc;
      }
    }
  }

  .item-list {
    line-height: 0.76rem;
    padding: 0 0.2rem;
  }
}
</style>
