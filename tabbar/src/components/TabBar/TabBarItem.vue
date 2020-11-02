<template>
<div class="tab-bar-item" @click="itemClick">
  <div v-if="!isActive"><slot name="icon-de"></slot></div>
  <div v-else><slot name="icon-active"></slot></div>
  <div :style="activeStyle" ><slot name="text"></slot></div>
</div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path: String,
    activeColor:{
      type: String,
      default: 'rgb(26, 123, 187)'
    }
  },
  data() {
    return {
      // isActive: true,
    };
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick(){
      if(this.$route.matched[0].path != this.path)
        this.$router.push(this.path)
      console.log(this.$route);
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  height: 49px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
.tab-bar-item div {
  text-align: center;
}

.active {
  color: rgb(26, 123, 187);
}
</style>