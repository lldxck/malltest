<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      @click="tabControlClick(index)"
    >
      <span :class="{activeStyle:currentIndex==index}">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods:{
    tabControlClick(index){
      this.currentIndex=index;
      this.$emit('tabClick',index)
    }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  display: inline-block;
  padding: 5px;
  font-size: 18px;
}
.activeStyle {
  border-bottom: 2px solid var(--color-tint);
  color: var(--color-high-text);
}
</style>
