<template>
  <div id="app">
      <h2>----------------content in componment1----------------</h2>
      <h2>{{$store.state.count}}</h2>
      <button @click="add">+</button>
      <button @click="sub">-</button>
      <vuex/>
  </div>
</template>

<script>
import vuex from './components/vuex'
export default {
  name: 'App',
  components: {
    vuex
  },

  methods:{
    add(){
      this.$store.commit('increment')
    },
    sub(){
      this.$store.commit('decrement')
    }
  }
}
</script>

<style>

</style>
