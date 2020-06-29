<template>
<div class="recommend">
  <div v-for="(item,index) in recommend" :key="index" class="recommend-item">
    <img :src="item.image" alt="">
    <div>{{item.title}}</div>
  </div>

</div>
  
</template>

<script>
export default {
  props:{
    recommend:{
      type:Array,
      default:[]
    }
  }
}
</script>

<style>
.recommend{
  display: flex;
  margin-top: 10px;
  padding-bottom: 15px;
  border-bottom: 8px solid #eee ;
}
.recommend-item{
  flex:1;
  text-align: center;
}
.recommend-item img{
  width: 66px;
  height: 66px;
}
.recommend-item div{
  margin-top: 5px;
  color:#999;
  font-size: 16px;
}

</style>