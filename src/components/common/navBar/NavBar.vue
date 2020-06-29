<template>
  <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav-bar{
  display: flex;
  height: 44px;
  line-height: 44px;
  position: fixed;
  top:0;
  right:0;
  left: 0;
  z-index: 99;
}
.left,.right{
  width: 60px;
  /* background-color: pink; */
}
.center{
  flex:1;
  /* background-color: yellow; */
  text-align: center;
  color: #fff;
  font-size: 24px;
}
</style>