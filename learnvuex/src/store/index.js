import Vue from 'vue'
import Vuex from 'vuex'

// vuex是一个插件 通过Vue.use使用
Vue.use(Vuex)

// 实例化store
const store = new Vuex.Store({
  state:{
    //state里面定义状态量
    count: 999
  },
  mutations:{
    //mutations里面定义方法
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  },
})

// 导出store
export default store