<template>
  <div class="item">
    <div class="wrapper">
      <swiper :options="swiperOption" ref="swiper">
        <swiper-slide v-for="(item,key) of imgs" :key="key">
          <img class="item-img" :src="item" alt />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    imgs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observe: true
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
.item >>> .swiper-container {
  overflow: inherit;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  background-color: black;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;

  .wrapper {
    background-color: #fff;
    height: 0;
    width: 100%;
    padding-bottom: 100%;

    .item-img {
      width: 100%;
    }

    .swiper-pagination {
      color: #fff;
      bottom: -1rem;
    }
  }
}
</style>
