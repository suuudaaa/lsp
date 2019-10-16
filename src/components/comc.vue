<template>
  <div id="comc">
    <div class="header">test demo</div>
    <div class @click="aa">dfkjdgkfjkgljhljghk</div>
    <div class="coma">
      <happy-scroll color="rgba(51,51,51,0.2)" size="8">
        <div>
          <p v-for="item in 100" :key="item">你好吗，我很好</p>
        </div>
      </happy-scroll>
    </div>
    <div style="height:200px;width:300px;background-color:#ccc;">
      <!-- 这里的标签名称要和main.js文件中定义的组件名称保持一致 -->
      <happy-scroll color="rgba(0,0,0,0.5)" size="5">
        <!-- 内层盒子——内容区 -->
        <div class="con">
          <p>士大夫撒入个任务二个人合同不大废物个人都怕顺风耳个二级gap所爱速发sure欧若尔奥沙是否</p>
          <p>士大夫撒入个任务二个人合同不大废物个人都怕顺风耳个二级gap所爱速发sure欧若尔奥沙是否</p>
          <p>士大夫撒入个任务二个人合同不大废物个人都怕顺风耳个二级gap所爱速发sure欧若尔奥沙是否</p>
          <p>士大夫撒入个任务二个人合同不大废物个人都怕顺风耳个二级gap所爱速发sure欧若尔奥沙是否</p>
          <p>士大夫撒入个任务二个人合同不大废物个人都怕顺风耳个二级gap所爱速发sure欧若尔奥沙是否</p>
          <p>士大夫撒入个任务二个人合同不大废物个人都怕顺风耳个二级gap所爱速发sure欧若尔奥沙是否</p>
          <p>士大夫撒入个任务二个人合同不大废物个人都怕顺风耳个二级gap所爱速发sure欧若尔奥沙是否</p>
          <p>士大夫撒入个任务二个人合同不大废物个人都怕顺风耳个二级gap所爱速发sure欧若尔奥沙是否</p>
          <p>士大夫撒入个任务二个人合同不大废物个人都怕顺风耳个二级gap所爱速发sure欧若尔奥沙是否</p>
          <p>士大夫撒入个任务二个人合同不大废物个人都怕顺风耳个二级gap所爱速发sure欧若尔奥沙是否</p>
        </div>
      </happy-scroll>
    </div>
  </div>
</template>
<script>
import { HappyScroll } from "vue-happy-scroll";
// 引入css，推荐将css放入main入口中引入一次即可。
import "vue-happy-scroll/docs/happy-scroll.css";
import axios from 'axios'
export default {
  components: { HappyScroll },
  data() {
    return {};
  },
  methods: {
    aa() {
      let obj = {
        userName: "xlei@lordstar.net",
        password: "8dbf04ae17cbc8240c45d53b92c8d43a8a97fe58"
      };
      axios
        .get("https://api.douban.com//v2/movie/top250")
        .then(res => {
          console.log(JSON.stringify(res))
        });
      // accountLogin({ obj })
      //   .then(res => {
      //     console.log(JSON.stringify(res));
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    },
    // 下载
     dd() {
      let params = {
        sort: "realInDate",
        order: "desc",
        search_GTE_createTime: "2019-09-12",
        search_LTE_createTime: df(new Date(), "yyyy-mm-dd"),
        search_EQ_orderTypeCode: this.params.search_EQ_orderTypeCode,
        search_EQ_warehouseType: this.params.search_EQ_warehouseType,
        search_LIKE_sysOrderNo: this.params.search_LIKE_sysOrderNo,
        search_LIKE_custOrderNo: this.params.search_LIKE_custOrderNo,
        search_LIKE_customerName: this.params.search_LIKE_customerName,
        search_LIKE_goodsModel: this.params.search_LIKE_goodsModel,
        search_LIKE_goodsName: this.params.search_LIKE_goodsName,
        search_LIKE_supplyName: this.params.search_LIKE_supplyName,
        search_LIKE_goodsBrand: this.params.search_LIKE_goodsBrand,
        search_LIKE_bgBillNo: this.params.search_LIKE_bgBillNo,
        search_LIKE_goodsNumber: this.params.search_LIKE_goodsNumber,
        search_LIKE_dateCode: this.params.search_LIKE_dateCode,
        search_LIKE_binCode: this.params.search_LIKE_binCode,
        search_LIKE_cpn: this.params.search_LIKE_cpn,
        search_LIKE_description: this.params.search_LIKE_description,
        search_selectCols:
          "gcbBillNo,warehouseName,customerName,custOrderNo,goodsName,goodsModel"
      };
      let url =
        "http://192.168.8.188:10016/server2/inOrderReport/exportInOrderReport";
      window.open(`${url}?${QS.stringify(params)}`, "_blank");
    },
    ddd() {
      this.selectCols =
        "gcbBillNo,warehouseName,customerName,custOrderNo,goodsName,goodsModel";
      let param = {
        sort: "realInDate",
        order: "desc",
        search_GTE_createTime: "2019-09-12",
        search_LTE_createTime: df(new Date(), "yyyy-mm-dd"),
        search_EQ_orderTypeCode: this.params.search_EQ_orderTypeCode,
        search_EQ_warehouseType: this.params.search_EQ_warehouseType,
        search_LIKE_sysOrderNo: this.params.search_LIKE_sysOrderNo,
        search_LIKE_custOrderNo: this.params.search_LIKE_custOrderNo,
        search_LIKE_customerName: this.params.search_LIKE_customerName,
        search_LIKE_goodsModel: this.params.search_LIKE_goodsModel,
        search_LIKE_goodsName: this.params.search_LIKE_goodsName,
        search_LIKE_supplyName: this.params.search_LIKE_supplyName,
        search_LIKE_goodsBrand: this.params.search_LIKE_goodsBrand,
        search_LIKE_bgBillNo: this.params.search_LIKE_bgBillNo,
        search_LIKE_goodsNumber: this.params.search_LIKE_goodsNumber,
        search_LIKE_dateCode: this.params.search_LIKE_dateCode,
        search_LIKE_binCode: this.params.search_LIKE_binCode,
        search_LIKE_cpn: this.params.search_LIKE_cpn,
        search_LIKE_description: this.params.search_LIKE_description,
        search_selectCols:
          "gcbBillNo,warehouseName,customerName,custOrderNo,goodsName,goodsModel"
      };
      console.log(param);
      let url =
        "http://192.168.8.188:10016/server2/inOrderReport/exportInOrderReport";
      const postDownloadFile = (action, param) => {
        const form = document.createElement("form");
        form.action = action;
        form.method = "post";
        form.target = "blank";
        Object.keys(param).forEach(item => {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = item;
          input.value = param[item];
          form.appendChild(input);
        });
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
      };

      postDownloadFile(url, param);
    },
    dddd() {
      // axios
      //   .post(url, QS.stringify(param), {
      //     responseType: "blob"
      //   })
      //   .then(res => {
      //     console.log("res", res);
      //     const blob = res.data;
      //     const reader = new FileReader();
      //     reader.readAsDataURL(blob);
      //     reader.onload = e => {
      //       const a = document.createElement("a");
      //       a.download = `入库报表`;
      //       // 后端设置的文件名称在res.headers的 "content-disposition": "form-data; name=\"attachment\"; filename=\"20181211191944.zip\"",
      //       a.href = e.target.result;
      //       document.body.appendChild(a);
      //       a.click();
      //       document.body.removeChild(a);
      //     };
      //   })
      //   .catch(err => {
      //     console.log(err.message);
      //   });

      // axios
      //   .request({
      //     method: "post",
      //     url: "/server2/inOrderReport/exportInOrderReport?",
      //     data: QS.stringify(params),
      //     responseType: "blob"
      //   })
      //   .then(response => {
      //     this.download(response, "入库报表");
      //   })
      //   .catch(error => {});
    },
    // excelOut() {
    //   console.log(this.selectCols);
    //   let params = {
    //     sort: "realInDate",
    //     order: "desc",
    //     search_GTE_createTime: this.params.search_GTE_createTime,
    //     search_LTE_createTime: this.params.search_LTE_createTime,
    //     search_EQ_orderTypeCode: this.params.search_EQ_orderTypeCode,
    //     search_EQ_warehouseType: this.params.search_EQ_warehouseType,
    //     search_LIKE_sysOrderNo: this.params.search_LIKE_sysOrderNo,
    //     search_LIKE_custOrderNo: this.params.search_LIKE_custOrderNo,
    //     search_LIKE_customerName: this.params.search_LIKE_customerName,
    //     search_LIKE_goodsModel: this.params.search_LIKE_goodsModel,
    //     search_LIKE_goodsName: this.params.search_LIKE_goodsName,
    //     search_LIKE_supplyName: this.params.search_LIKE_supplyName,
    //     search_LIKE_goodsBrand: this.params.search_LIKE_goodsBrand,
    //     search_LIKE_bgBillNo: this.params.search_LIKE_bgBillNo,
    //     search_LIKE_goodsNumber: this.params.search_LIKE_goodsNumber,
    //     search_LIKE_dateCode: this.params.search_LIKE_dateCode,
    //     search_LIKE_binCode: this.params.search_LIKE_binCode,
    //     search_LIKE_cpn: this.params.search_LIKE_cpn,
    //     search_LIKE_description: this.params.search_LIKE_description,
    //     search_selectCols: this.selectCols
    //   };
    //   let url = this.exportUrl;
    //   let fileName = this.labelData[this.reportType];
    //   if (this.fileName == '收发货溯源报表') {
    //     let obj = {
    //       search_EQ_orderType:this.search_EQ_orderType
    //     }
    //     params = Object.assign(params,obj)
    //   }
    //   fileOut(url, params,'d')
    //     .then(res => {
    //       console.log('download',res)
    //       this.download(res, this.fileName);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },
    download(data, filename, type) {
      if (!data) {
        return;
      }
      let url = window.URL.createObjectURL(new Blob([data]));
      let link = document.createElement("a");
      link.style.display = "none";
      link.href = url;
      // link.setAttribute("download", filename + ".xlsx");
      link.setAttribute("download", filename + ".xlsx");
      // if (type) {
      //   link.setAttribute("download", filename + ".xlsx");
      // } else {
      //   link.setAttribute("download", filename + ".xls");
      // }
      document.body.appendChild(link);
      link.click();
    }
  },
  created(){
    this.$loading.show()
    setInterval(()=>{
      this.$loading.hide();
    },3000)
  }
};
</script>
<style lang="scss" scoped>
.header {
  color: yellow;
  font-size: 2.5rem;
}
.coma {
  height: 400px;
  width: 200px;
  overflow: hidden;
}
</style>


