<template>
  <div id="g1">
    <select>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="opel">Opel</option>
      <option value="audi">Audi</option>
    </select>
    <ul class="popup">
      <li v-for="(item,index) in datas" :key="index">
        <span class="circle"></span>
        <p class="order-name">{{item.orderStatusName}}</p>
        <p class="order-time">{{item.operationTime}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "massage",
      datas: [
        {orderStatusName: "入仓申报(已放行)",operationTime: "2019-06-12 16:16:31"},
        {orderStatusName: "入仓申报(待放行)", operationTime: "2019-06-12 16:16:24"},
        {orderStatusName: "仓库指令生效",operationTime: "2019-06-12 13:40:16"},
        {orderStatusName: "仓库已接单", operationTime: "2019-06-12 13:33:59" },
        {orderStatusName: "订单已受理", operationTime: "2019-06-12 11:43:34" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
  *{
    margin: 0;
    padding:0;    
  }
  ul,li{
    list-style-type: none;
  }
  .popup{
    width: 100%;
    padding: 3rem;
    background-color: #fff;
  }
  .popup li{
    border-left: 1px solid #ddd;
    position:relative;
    padding-bottom: 1rem;
  }
  .popup p {
    text-align: left;
    padding: .5rem 1rem;
  }
  .popup li .order-name{
    padding-top: 0;
  }
  .popup .circle{
    display: inline-block;
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
    border: 1px solid #000;
    background: #fff;
    position: absolute;
    left: -.6rem;
    // top: .1rem;
    transform: translate(50%,0);
  }
  .popup li:last-child{
    border-left: none;
  }
.change-version {
    font-family: PingFang SC;
    position: absolute;
    right: 0;
    top: 30px;
    height: 28px;
    line-height: 28px;
    background: #12bd7d;
    border-radius: 14px 0px 0px 14px;
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 4px #1bd38e;
    padding: 0 12px;
    z-index: 2;
  }

  .change-version img {
    margin-top: -3px;
    vertical-align: middle;
  }
</style>

