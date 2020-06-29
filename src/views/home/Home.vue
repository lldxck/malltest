<template>
  <div class="homePage">
    <nav-bar class="nav-bar">
      <div slot="center">首页</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend :recommend="recommend"></recommend>
    <feature></feature>
    <tab-control :titles="titles"></tab-control>
    <goods-list :goods="goods"></goods-list>

  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/common/goods/GoodsList'
import HomeSwiper from './childComponents/HomeSwiper'
import Recommend from './childComponents/Recommend'
import Feature from './childComponents/Feature'


import {GetHomeData,GetGoodsData} from 'network/home.js'
export default {
  data(){
    return{
      banner:[],
      recommend:[],
      titles:['流行','新款','精选'],
      goods:[],

    }
  },
  created(){
    this.getHomeData();
    this.getGoodsData();
  },
  methods:{
    getHomeData(){
      GetHomeData().then(res => {
        console.log(res)
        this.banner=res.data.banner.list;
        this.recommend=res.data.recommend.list;
      })
    },
    getGoodsData(){
      GetGoodsData('pop',1).then(res => {
        console.log(res);
        this.goods=res.data.list;
      })
    }
  },
  components: {
    NavBar,
    TabControl,
    GoodsList,
    HomeSwiper,
    Recommend,
    Feature
  },
};
</script>

<style>
.homePage{
  padding-top: 44px;
  padding-bottom: 49px;
}
.nav-bar {
  background-color: var(--color-tint);
}
</style>
