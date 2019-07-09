<template>
  <div id="home">
    <header v-if="show">
      <span>头部</span>
    </header>
    <section class="main">
      <aside class="tree" v-if="show">
        侧边，树状结构
      </aside>
      <section class="content">
        <aside>内容侧边</aside>
        <section class="aa">
          <button @click="change">隐藏/显示</button>
          <p v-for='(index,item) in data' :key='item'>内容部分</p>
        </section>
        <article v-for='(index,item) in data' :key='item' class="article">
          一些文章.http爬虫 ， http web 服务器渲染数据发送前台， 中文乱码
          http模块 数据请求：get request post
          案例：后端爬虫
          流程：后端请求数据—》 数据分析 —》数据清洗—》数据前台发送
        </article>
      </section>
      <aside class="right" v-if="show">
        侧边，加备注
      </aside>
    </section>
  </div>
</template>
<script>
export default {
  data(){
    return{
      show:false,
      data:[1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,,3,3,3,,3,3,3,3,3,3,3,3,3,3,3,33,3,3,3,3]
    }
  },
  methods:{
    change(){
      this.show = !this.show;
    }
  }
}
</script>
<style lang='scss'>
  *{margin:0;padding:0}
  #home{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    header{
      width: 100vw;
      height: 30px;
      background-color: aqua;
    }
    .main{
      flex: 1;
      display: flex;
      overflow: hidden;
    }
    .tree{
      float: left;
      width: 20vw;
      height: inherit;
      overflow: hidden;
      background-color: #ccc;
    }
    .content{
      // float: left;
      overflow: scroll;
      flex:1;
      margin: 0 auto;
    }
    .aa{
      width: 50vw;
      height: 199px;
      border: 1px solid #ddd;
      overflow: scroll;
    }
    .right{
      float: right;
      width: 20vw;
      height: inherit;
      overflow: hidden;
      background-color: #ccc;
    }
    .article{
      width: 80vw;
    }

  }
</style>

