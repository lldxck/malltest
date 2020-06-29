<template>
  <swiper>
    <swiper-item v-for="(item,index) in banner" :key="index">
      <img :src="item.image" alt="">
    </swiper-item>
  </swiper>
  
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper';
export default {
  props:{
    banner:{
      type:Array,
      defalut:[],
    }
  },
  components:{
    Swiper,
    SwiperItem,
  }

}
</script>

<style>

</style>