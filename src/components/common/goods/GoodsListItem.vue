<template>
  <div class="goods-list-item">
    <img :src="goodsItem.show.img" alt="">
    <div class="content">
      <div class="title">{{goodsItem.title}}</div>
      <div class="priceAndAgree">
        <span class="price">{{goodsItem.price}}</span>
        <span class="agree">{{goodsItem.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goodsItem:{
      type:Object,
      default:{}
    }
  }

}
</script>

<style>
.goods-list-item{
  width: 48%;
}
.goods-list-item img{
  width: 100%;
}
.content{
  margin-top: 8px;
  margin-bottom: 10px;
}
.title{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  
}
.priceAndAgree{
  text-align: center;
  margin-top: 3px;
}
.price{
  color:var(--color-high-text)
}
.agree::before{
  content:'';
  display: inline-block;
  width: 14px;
  height: 14px;
  background:url('~assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>