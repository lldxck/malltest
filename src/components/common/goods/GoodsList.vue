<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  props:{
    goods:{
      type:Array,
      default:[],
    }
  },
  components:{
    GoodsListItem
  }

}
</script>

<style>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding:0 8px;
}
</style>