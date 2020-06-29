<template>
  <div class="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.tab-bar{
    height:49px;
    text-align: center;
    background-color: #eee;
    display: flex;
    position: fixed;
    left:0;
    right:0;
    bottom:0;
}
</style>