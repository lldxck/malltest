<template>
  <div class="homePage">
    <nav-bar class="nav-bar">
      <div slot="center">首页</div>
    </nav-bar>
    <scroll class="scrollWrapper">
      <home-swiper :banner="banner"></home-swiper>
      <recommend :recommend="recommend"></recommend>
      <feature></feature>
      <tab-control
        :titles="titles"
        @tabClick="tabClick"
        class="tabControl"
      ></tab-control>
      <goods-list :goods="goods[currentGoodsType].list"></goods-list>
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/common/goods/GoodsList";
import HomeSwiper from "./childComponents/HomeSwiper";
import Recommend from "./childComponents/Recommend";
import Feature from "./childComponents/Feature";
import Scroll from "components/common/bScroll/BScroll";

import { GetHomeData, GetGoodsData } from "network/home.js";
export default {
  data() {
    return {
      banner: [],
      recommend: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentGoodsType: "pop",
    };
  },
  created() {
    this.getHomeData();
    this.getGoodsData("pop");
    this.getGoodsData("new");
    this.getGoodsData("sell");
  },
  methods: {
    getHomeData() {
      GetHomeData().then((res) => {
        console.log(res);
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    // getGoodsData(){
    //   GetGoodsData('pop',1).then(res => {
    //     console.log(res);
    //     this.goods=res.data.list;
    //   })
    // }
    getGoodsData(type) {
      const page = this.goods[type].page + 1;
      GetGoodsData(type, page).then((res) => {
        console.log(res);
        this.goods[type].page += 1;
        this.goods[type].list.push(...res.data.list);
      });
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentGoodsType = "pop";
          break;
        case 1:
          this.currentGoodsType = "new";
          break;
        case 2:
          this.currentGoodsType = "sell";
          break;
      }
    },
  },
  components: {
    NavBar,
    TabControl,
    GoodsList,
    HomeSwiper,
    Recommend,
    Feature,
    Scroll,
  },
};
</script>

<style>
.homePage {
  padding-top: 44px;
  padding-bottom: 49px;
  height:100%;
}
.nav-bar {
  background-color: var(--color-tint);
}
.tabControl {
  position: sticky;
  top: 44px;
  background-color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
}
.scrollWrapper{
  height:100vh;
  overflow: hidden;
}
</style>
