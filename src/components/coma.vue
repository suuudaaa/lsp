<template>
  <div id="coma">
    <ul>
      <li v-for="(item,index) in datas" :key="index">
        <p>{{item.customerBillNo}}</p>
        <p>{{item.orderStatusName}}</p>
        <p>{{item.amount}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
      number: null,
      reNumber: null,
      clickNum: 0,
      datas: [
        {
          customerBillNo: "9101274497/PO01119040356 S&D",
          orderStatusName: "货物入库完成",
          amount: 22914.0
        },
        {
          customerBillNo: "9101272827&25&26/PO01119050174",
          orderStatusName: "货物入库完成",
          amount: 3750.0
        },
        {
          customerBillNo: "9101275982/PO01119050185",
          orderStatusName: "货物入库完成",
          amount: 5387.0
        },
        {
          customerBillNo: "9101275985&83/PO01119040070",
          orderStatusName: "货物入库完成",
          amount: 2700.0
        },
        {
          customerBillNo: "9101275986&81/PO01119040395",
          orderStatusName: "货物入库完成",
          amount: 7800.0
        },
        {
          customerBillNo: "9101274646&44/PO01119030065",
          orderStatusName: "货物入库完成",
          amount: 41250.0
        },
        {
          customerBillNo: "9101274647&49/PO01119050079",
          orderStatusName: "货物入库完成",
          amount: 50000.0
        },
        {
          customerBillNo: "9101274648&43&45/PO01119040446&071",
          orderStatusName: "货物入库完成",
          amount: 25162.5
        },
        {
          customerBillNo: "9101274651/PO01119050135",
          orderStatusName: "货物入库完成",
          amount: 582.0
        },
        {
          customerBillNo: "9101274755&50&42/PO01119050174&40426&10435",
          orderStatusName: "货物入库完成",
          amount: 3678.0
        }
      ]
    };
  },
  methods: {
    count() {
      this.reNumber = this.number ** 3;
    },
    totalClick() {
      this.clickNum++;
    }
  },
  watch: {
    number: function(newVal, oldVal) {
      this.count();
    }
  }
};
</script>
<style scoped>
#coma {
  width: 100%;
  overflow: hidden;
}
ul,li{
  list-style: none;
  margin: 0;
  padding: 0;
}

li{
  border: 1px solid #ccc;
}
</style>


