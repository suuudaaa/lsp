<template>
  <div class="container">
    <el-row class="indexContainer">
      <header-example></header-example>
      <el-col :span="24" class="contentContainer">
        <!--nav bvegin-->
        <aside class="sidebarContainer" :class="{ 'sidebarChange': sidebarChange === true }">
          <!-- <div @click="sidebarChangeFun">@@@</div> -->
          <el-menu
            :router="true"
            :default-active="$route.path"
            class="el-menu-vertical"
            background-color="#fff"
            text-color="#7E8C9B"
            active-text-color="#12BD7B"
          >
            <el-menu-item index="/main">
              <!-- <i class="el-icon-location"></i> -->
              <i class="icon iconfont icondingwei"></i>
              <span slot="title">业务看板</span>
            </el-menu-item>
            <!-- :class="{ 'footerDivSelect': $route.name === 'index' || $route.name === 'default'}" -->
            <el-menu-item index="/data">
              <!-- <i class="el-icon-menu"></i> -->
              <i class="icon iconfont iconzuocelan-zongcaikanban-xuanzhong dataIcon"></i>
              <span slot="title">总裁看板</span>
            </el-menu-item>
            <el-menu-item index="/report">
              <!-- <i class="el-icon-document"></i> -->
              <i class="icon iconfont iconzuocelan-baobiaokanban-xuanzhong reportIcon"></i>
              <span slot="title">报表看板</span>
            </el-menu-item>
            <el-menu-item index="/help">
              <!-- <i class="el-icon-setting"></i> -->
              <i class="icon iconfont iconzuocelan-bangzhuzhongxin-xuanzhong helpIcon"></i>
              <span slot="title">帮助中心</span>
            </el-menu-item>
          </el-menu>
        </aside>
        <!--nav end-->
        <!--content begin-->
        <el-main class="mainContainer">
          <div class="grid-content bg-purple-light">
            <el-col :span="24" class="content-wrapper">
              <transition name="fade" mode="out-in">
                <router-view />
              </transition>
            </el-col>
          </div>
        </el-main>
        <!--content end-->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HeaderExample from "@/components/header";
export default {
  components: { HeaderExample },
  data() {
    return {
      sidebarChange: false
    };
  },
  methods: {
    sidebarChangeFun() {
      this.sidebarChange = !this.sidebarChange;
      console.log(this.sidebarChange);
    }
  }
};
</script>

<style scoped lang="scss">
.indexContainer {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  .contentContainer {
    min-width: 1360px;
    display: flex;
    position: absolute;
    top: 64px;
    bottom: 0px;
    overflow: hidden;
    .mainContainer {
      z-index: 1;
      flex: 1;
      background: rgba(238, 241, 246, 1);
      overflow-y: auto;
      .content-wrapper {
        box-sizing: border-box;
        padding: 32px;
      }
    }
    .sidebarContainer {
      flex: 0 0 120px;
      // width: 120px;
      width: 0px;
      ul {
        height: 100%;
        border-right: 0px !important;
        padding: 20px 20px 0px 20px;
        li {
          position: relative;
          width: 80px;
          height: 80px;
          line-height: 110px;
          margin-bottom: 16px;
          padding: 0px !important;
          padding-top: 30px;
          text-align: center;
          i {
            position: absolute;
            font-size: 24px;
            display: block;
            left: 50%;
            margin-left: -12px;
            top: 28px;
            line-height: 1px;
          }
          .dataIcon {
            font-size: 28px;
            margin-left: -14px;
          }
          .reportIcon {
            font-size: 32px;
            margin-left: -16px;
          }
          .helpIcon {
            font-size: 30px;
            margin-left: -15px;
          }
          span {
            margin-top: 30px;
            font-size: 14px;
          }
        }
        .is-active {
          background: rgba(238, 241, 246, 1) !important;
        }
      }
    }
    .sidebarChange {
      flex: 0 0 0px;
      width: 0px;
      animation: sidebarChange 0.1s;
      -webkit-animation: sidebarChange 0.1s;
    }
  }
}

@keyframes sidebarChange {
  0% {
    flex: 0 0 120px;
  }
  10% {
    flex: 0 0 108px;
  }
  20% {
    flex: 0 0 96px;
  }
  30% {
    flex: 0 0 84px;
  }
  40% {
    flex: 0 0 72px;
  }
  50% {
    flex: 0 0 60px;
  }
  60% {
    flex: 0 0 48px;
  }
  70% {
    flex: 0 0 36px;
  }
  80% {
    flex: 0 0 24px;
  }
  90% {
    flex: 0 0 12px;
  }
  100% {
    flex: 0 0 0px;
  }
}
</style>