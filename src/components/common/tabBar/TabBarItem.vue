<template>
  <div class="tab-bar-item" @click="itemClick">
      <div v-if="!active"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data(){
        return{
            // active:false
        }
    },
    computed:{
        active(){
            return this.$route.path.indexOf(this.path)!==-1
        },
        activeStyle(){
            return this.active?{color:this.activeColor}:{}
        }
    },
    methods:{
        itemClick(){
            // console.log('点击'+this.path)
            this.$router.push(this.path)
        }
    }

}
</script>

<style>
.tab-bar-item{
    flex:1;

}
.tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 3px;
    margin-bottom: 2px;
}
</style>