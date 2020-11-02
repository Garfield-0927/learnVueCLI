<template>
      <tab-bar>
      <tab-bar-item path='/home'>
        <div slot="icon-de">
          <img src="../assets/img/home.png" />
        </div>
        <div slot="icon-active">
          <img src="../assets/img/home-active.png" />
        </div>
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <div slot="icon-de">
          <img src="../assets/img/category.png" />
        </div>
        <div slot="icon-active">
          <img src="../assets/img/category-active.png" />
        </div>
        <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <div slot="icon-de">
          <img src="../assets/img/shoppingCart.png" />
        </div>
        <div slot="icon-active">
          <img src="../assets/img/shoppingCart-active.png" />
        </div>
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <div slot="icon-de">
          <img src="../assets/img/my.png" />
        </div>
        <div slot="icon-active">
          <img src="../assets/img/my-active.png" />
        </div>
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "./TabBar/TabBar";
import TabBarItem from "./TabBar/TabBarItem";

export default {
  name: 'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>