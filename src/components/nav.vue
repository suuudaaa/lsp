<template>
  <div id="tab">
    <ul class="nav">
      <li class="nav-tab" v-for="item in nav" :key="item.tab" @click="tabChange(item.path)">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      nav:[
        {tab:0,name:'tab1',path:'/coma'},
        {tab:1,name:'tab2',path:'/comc'},
        {tab:2,name:'tab3',path:'/comd'}
      ]
    }
  },
  methods:{
    tabChange(tab){
      this.$router.push({path:tab});
    }
  }
}
</script>
<style scoped>
ul,li{
  list-style: none;
  margin: 0;
  padding:0;
}
.nav{
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  width: 100%;
  background: #fff;
  border-top: 1px solid #333;
}
.nav-tab{
  float: left;
  width: 30%;
  height: 30px;
  justify-content: space-between;
  padding-top: 10px;
}
</style>


