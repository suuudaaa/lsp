<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <transition :name="transitionName">
      <router-view class="Router"></router-view>
    </transition>
  </div>
</template>

<script>
import navTab from './components/nav.vue'
export default {
  components:{
    navTab:navTab
  },
  name: "App",
  data() {
    return {
      transitionName: "fade",// 默认动态路由变化为slide-right
      notice:'write some what you want'
    };
  },
  methods:{
    noted(){
      
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100%;
  /* overflow: hidden; */
  width: 100vw;
  height: 100vh;
}
.fade-enter-active, .fade-leave-active {
  transition: all 4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform:scale(30%)
}
</style>
