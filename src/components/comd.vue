<template>
  <div class="order-detail-page3">
    <!-- 暂无数据 -->
    <div @click="downloadFile('')">下载啊下载</div>
    <!-- <a download="http://www.gaoxiaogif.com/d/file/201604/db9974a4fe8df9e66a568cdeb6c43b34.jpg">下载测试</a> -->
    <div class="down-cont" v-show="isData">
      <el-row :gutter="12">
        <el-col
          :span="6"
          v-for="(item,index) in downFiles"
          :key="index+'down'"
          style="margin:20px 0;"
        >
          <el-card shadow="hover" @click.native="downloadFile(item.filePath)">
            <i class="iconfont iconfujianxiazai-word" v-if="index == 0"></i>
            <i
              class="iconfont iconfujianxiazai-excl"
              v-else-if="index == 1"
            ></i>
            <i
              class="iconfont iconfujianxiazai-ppt"
              v-else-if="index == 2"
            ></i>
            <img src="../../static/img/downJpg.png" alt class="down-img" v-else />
            <div class="download-name">
              <p>{{item.fileName}}</p>
              <span>{{item.createTime}}</span>
            </div>
            <i class="iconfont iconshuju-xiajiang"></i>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="no-data" v-show="!isData">
      <div class="blank-page">
        <img src="../../static/img/no_data.png" alt />
        <!-- <i class="iconfont iconbaobiaozhongxin-zanwushuju"></i> -->
        <p class="no-data-text">暂无下载文件</p>
      </div>
    </div>
  </div>
</template>

<script>
// import { inOrderGetBsrcdFiles, outOrderGetBsrcdFiles } from "@/api/getData";
export default {
  data() {
    return {
      isWord: true,
      isPpt: false,
      isExcel: false,
      params: {
        billNo: "BWI1808030003",
        page: 1,
        pageSize: 20
      },
      downFiles: [
        {
          attachmentId: "6dc51664-abc7-4143-a55e-1dbc4e3c6d2a",
          attachmentType: 150,
          attachmentTypeName: "保税入仓报关单",
          createBy: "0",
          createByName: "wms",
          createTime: "2019-10-14 22:07:07",
          deleted: false,
          fileName: "QD521319I000019957_1.pdf",
          filePath:
            "//customs_wms_files/LS1067/upload/989/815/11094391176506792170//QD521319I000019957_1.pdf",
          id: "3045f798-9329-436a-8721-11ea4268e018",
          isFtp: true,
          operationId: "c07ae631-921f-4f3f-87d5-f00975c5a3e6",
          orderId: "e8d16d3b-a2fe-4824-92ba-c65564508e49",
          updateBy: "0",
          updateByName: "wms",
          updateTime: "2019-10-14 22:07:07",
          version: 0
        },
        {
          attachmentId: "2c73894d-841d-4588-8538-7d3614924ec5",
          attachmentType: 150,
          attachmentTypeName: "保税入仓报关单",
          createBy: "0",
          createByName: "wms",
          createTime: "2019-10-14 22:07:07",
          deleted: false,
          fileName: "QD521319I000019957_2.pdf",
          filePath:
            "//customs_wms_files/LS1067/upload/725/994/1109699477441378617//QD521319I000019957_2.pdf",
          id: "f7a4ee79-c84f-4a1e-a56b-b64b0297fa68",
          isFtp: true,
          operationId: "c07ae631-921f-4f3f-87d5-f00975c5a3e6",
          orderId: "e8d16d3b-a2fe-4824-92ba-c65564508e49",
          updateBy: "0",
          updateByName: "wms",
          updateTime: "2019-10-14 22:07:07",
          version: 0
        },
        {
          attachmentId: "6dc51664-abc7-4143-a55e-1dbc4e3c6d2a",
          attachmentType: 150,
          attachmentTypeName: "保税入仓报关单",
          createBy: "0",
          createByName: "wms",
          createTime: "2019-10-14 22:07:07",
          deleted: false,
          fileName: "QD521319I000019957_1.pdf",
          filePath:
            "//customs_wms_files/LS1067/upload/989/815/11094391176506792170//QD521319I000019957_1.pdf",
          id: "3045f798-9329-436a-8721-11ea4268e018",
          isFtp: true,
          operationId: "c07ae631-921f-4f3f-87d5-f00975c5a3e6",
          orderId: "e8d16d3b-a2fe-4824-92ba-c65564508e49",
          updateBy: "0",
          updateByName: "wms",
          updateTime: "2019-10-14 22:07:07",
          version: 0
        },
        {
          attachmentId: "2c73894d-841d-4588-8538-7d3614924ec5",
          attachmentType: 150,
          attachmentTypeName: "保税入仓报关单",
          createBy: "0",
          createByName: "wms",
          createTime: "2019-10-14 22:07:07",
          deleted: false,
          fileName: "QD521319I000019957_2.pdf",
          filePath:
            "//customs_wms_files/LS1067/upload/725/994/1109699477441378617//QD521319I000019957_2.pdf",
          id: "f7a4ee79-c84f-4a1e-a56b-b64b0297fa68",
          isFtp: true,
          operationId: "c07ae631-921f-4f3f-87d5-f00975c5a3e6",
          orderId: "e8d16d3b-a2fe-4824-92ba-c65564508e49",
          updateBy: "0",
          updateByName: "wms",
          updateTime: "2019-10-14 22:07:07",
          version: 0
        }
      ],
      isData: true
    };
  },
  methods: {
    downloadFile(path) {
      console.log("附件下载", path);
      // let url;
      // if (location.hostname === "localhost") {
      //   url = process.env.API_HOST_DEV + "/scmApi/view/" + path;
      // } else if (location.hostname === "10.8.8.49") {
      //   url = process.env.API_HOST_TEST + "/scmApi/view/" + path;
      // } else if (location.hostname === "lsp.lordstar.com.cn") {
      //   url = process.env.API_HOST_PROD + "/scmApi/view/" + path;
      // }
      // const postDownloadFile = action => {
      //   const form = document.createElement("form");
      //   form.action = action;
      //   form.method = "post";
      //   form.target = "blank";
      //   document.body.appendChild(form);
      //   form.submit();
      //   document.body.removeChild(form);
      // };
      // postDownloadFile(url);
      let baseUrl = 'http://www.gaoxiaogif.com/d/file/201604/db9974a4fe8df9e66a568cdeb6c43b34.jpg'
      window.open(
        baseUrl
      );
    },
    getPage3Data() {
      let that = this;
      that.isData = true;
      let ids = that.$route.query.id;
      if (ids == 0) {
        inOrderGetBsrcdFiles(that.params).then(res => {
          that.dataProcess(res);
        });
      } else {
        outOrderGetBsrcdFiles(that.params).then(res => {
          that.dataProcess(res);
        });
      }
    },
    dataProcess(res) {
      let that = this;
      if (res.ret == 0) {
        let data = res.data.rows;
        data = data.map((item, idx) => {
          let arr = item.fileName.split(".");
          let idxs = arr.length - 1;
          let str = arr[idxs].toLowerCase();
          item.fileType = str;
          return item;
        });
        console.log(data);
        that.downFiles = data;
        if (data.length == 0) {
          that.isData = false;
        }
      } else {
        that.isData = false;
      }
    }
  },
  mounted() {
    // this.params.billNo = this.$route.query.billNo;
    // this.getPage3Data();
  }
};
</script>

<style lang='scss' scoped>
.order-detail-page3 {
  width: 100vw;
  .ld-download-card {
    width: 296px;
    height: 100px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
  }
  .iconfont {
    display: inline-block;
  }
  .iconfujianxiazai-word {
    font-size: 48px;
    color: #13c2c3;
  }
  .iconfujianxiazai-excl {
    font-size: 48px;
    color: #e96737;
  }
  .iconfujianxiazai-ppt {
    font-size: 48px;
    color: #219857;
  }
  .iconshuju-xiajiang {
    font-size: 24px;
    color: #586777;
    border-radius: 50%;
    border: 1px solid #7e8c9b;
    vertical-align: super;
    // margin-left: 18px;
    float: right;
    margin-top: 12px;
  }
  .down-img {
    width: 48px;
    height: 48px;
  }
  .download-name {
    display: inline-block;
    width: 76%;
    p {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(43, 61, 81, 1);
      line-height: 24px;
    }
    span {
      color: #586777;
      font-size: 12px;
    }
  }
}
</style>