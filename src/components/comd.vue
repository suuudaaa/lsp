<template>
  <div id="comd">
    <button v-on:click="show = !show">click</button>
    <ul v-for="item in data" :key="item">
      <transition name="fade">
        <li v-if="show">{{item}}个货单</li>
      </transition>
    </ul>
    <div>
      <button @click="show1 = !show1">showOrhide</button>
      <transition name="fade">
        <ul v-show='show1'>
          <li>
            <span>型号</span>
            <span>BW129409000</span>
          </li>
          <li>
            <span>系统单号:</span>
            <span class="copy_btn">复制</span>
          </li>
          <li>
            <span>系统单号:</span>
            <span class="copy_btn">复制</span>
          </li>
          <li>
            <span>系统单号:</span>
            <span class="copy_btn">复制</span>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      show:false,
      show1:false,
      data:[1,2,3,4,5,6],
      resDate:[
        {name:fontprint,category:12,type:1,orderprice:123,orderIn:false,orderOut:true},
        {name:'发光二极管',category:'pcs',type:2,orderprice:122,orderIn:false,orderOut:true}
      ]
    }
  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: all 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: skew(50deg);
}
</style>


