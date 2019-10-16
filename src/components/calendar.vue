<template>
  <div id="calendar">
    <div class="calendarM">
      <div class="cal_background"></div>
      <div class="content">
        <div class="selectedTime">
          <div :class="{active:cal_current_index==0}" @click="taggleSelectedTime(0)">
            <p>开始时间</p>
            <input type="text" placeholder="选择开始时间" readonly v-model="params.GT_orderTime" />
          </div>
          <div :class="{active:cal_current_index==1}" @click="taggleSelectedTime(1)">
            <p>结束时间</p>
            <input type="text" placeholder="选择结束时间" readonly v-model="params.LT_orderTime" />
          </div>
        </div>
        <el-card shadow="never">
          <Calendar ref="Calendar1" v-show="cal_current_index==0" v-on:choseDay="clickStartDay"></Calendar>
          <Calendar ref="Calendar2" v-show="cal_current_index==1" v-on:choseDay="clickEndDay"></Calendar>
        </el-card>
        <!-- <button
          @click="selectedTimeOK()"
          :class="{active:params.GT_orderTime && params.LT_orderTime }"
        >确定</button>-->
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from "vue-calendar-component";
import { df } from "../../modules/filters/orderFilter";
export default {
  components: {
    Calendar
  },
  data() {
    return {
      value1: [new Date(), new Date()],
      cal_current_index: 0, //当前选择的时间
      params: {
        GT_orderTime: "", //df(new Date(new Date().setHours(0, 0, 0, 0)), "yyyy-mm-dd"), //订单开始时间
        LT_orderTime: "" //df(new Date(), "yyyy-mm-dd") //订单结束时间
      },
      chooseTimer2: null,
      chooseTimer1: null
    };
  },
  methods: {
    taggleSelectedTime(index) {
      this.cal_current_index = index; //手动切换所选择的时间
      switch (index) {
        case 0:
          if (this.params.GT_orderTime) {
            this.$refs.Calendar1.ChoseMonth(this.params.GT_orderTime);
          }
          break;
        case 1:
          if (this.params.LT_orderTime) {
            this.$refs.Calendar2.ChoseMonth(this.params.LT_orderTime);
          }
          break;
      }
    },
    selectedTimeOK() {
      let startT = new Date(this.params.GT_orderTime).getTime();
      let endT = new Date(this.params.LT_orderTime).getTime();
      if (!this.params.GT_orderTime) {
        this.$toast.bottom("请选择开始时间！");
        return;
      }
      if (!this.params.LT_orderTime) {
        this.$toast.bottom("请选择结束时间！");
        return;
      }
      if (startT > endT) {
        this.$toast.bottom("结束日期不能在开始日期之前！");
        return;
      } else if (startT == endT) {
        this.$toast.bottom("结束日期与开始日期不能是同一天！");
        return;
      }
      this.timeArrFilter[2].name = this.setTimeText();
      this.params.pageNum = 1;
      this.reqGetOrderList();
    },
    clickStartDay(data) {
      clearTimeout(this.chooseTimer2);
      this.params.GT_orderTime = df(data, "yyyy-mm-dd");
      let startT = new Date(this.params.GT_orderTime).getTime();
      let endT = new Date(this.params.LT_orderTime).getTime();
      if (this.params.LT_orderTime && this.params.GT_orderTime) {
        if (startT > endT) {
          this.$message({
            message: "结束日期不能在开始日期之前！",
            type: "warning"
          });
          return;
        } else {
          let params = {
            chooseDay1: this.params.GT_orderTime,
            chooseDay2: this.params.LT_orderTime
          };
          this.$emit("choose-order-day", params);
        }
      }
    },
    clickEndDay(data) {
      clearTimeout(this.chooseTimer1);
      this.params.LT_orderTime = df(data, "yyyy-mm-dd");
      let startT = new Date(this.params.GT_orderTime).getTime();
      let endT = new Date(this.params.LT_orderTime).getTime();
      if (this.params.GT_orderTime != "") {
        if (startT > endT) {
          this.$message({
            message: "结束日期不能在开始日期之前！",
            type: "warning"
          });
          return;
        } else {
          let params = {
            chooseDay1: this.params.GT_orderTime,
            chooseDay2: this.params.LT_orderTime
          };
          this.$emit("choose-order-day", params);
        }
      } else {
        this.$message({
          message: "请选择开始日期！",
          type: "warning"
        });
        return;
      }
    }
  },
  mounted() {}
};
</script>
<style lang='scss'>
.wh_container {
  max-width: none !important;
}
.time-picker p {
  display: inline-block;
}
#calendar {
  width: 360px;
  height: 430px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  .calendarM .content {
    background: #ffffff;
  }
  .calendarM .selectedTime {
    width: 100%;
    height: 74px;
    margin-bottom: 5px;
  }

  .calendarM .selectedTime > div {
    width: 50%;
    float: left;
    height: 100%;
    text-align: center;
    border-bottom: 1px solid #e8e8e8;
  }

  .calendarM .selectedTime > div.active {
    border-bottom: 2px solid #12bd7b;
    border-radius: 1px;
  }

  .calendarM .selectedTime p {
    padding-top: 10px;
    font-size: 14px;
    color: #586777;
    line-height: 37px;
    margin: 0px;
  }

  .calendarM .selectedTime input {
    border: 0px;
    color: #2b3d51;
    font-size: 16px;
    margin: 0px;
    width: 100%;
    text-align: center;
  }

  input::-webkit-input-placeholder {
    color: #999999;
  }
  .calendarM button {
    height: 48px;
    border-radius: 8px;
    background: #ededed;
    color: #ffffff;
    font-size: 18px;
    text-align: center;
    margin: 16px 18px 32px 15px;
    border: 0px;
  }

  .calendarM button.active {
    background: #12bd7b;
  }

  .wh_content {
    padding: 0px !important;
    margin: 0 auto;
  }

  .wh_jiantou1 {
    border-top: 2px solid #000000 !important;
    border-left: 2px solid #000000 !important;
  }

  .wh_jiantou2 {
    border-top: 2px solid #000000 !important;
    border-right: 2px solid #000000 !important;
  }

  .wh_content_li {
    color: #333333 !important;
    font-size: 18px;
  }
  .wh_content_item {
    width: 14.2857% !important;
    height: 105% !important;
    padding: 0 !important;
  }

  .wh_top_tag {
    color: #333333;
  }

  .wh_item_date {
    color: #333333 !important;
    font-size: 14px;
    margin: 0px !important;
    width: 100% !important;
    height: 100% !important;
  }

  .wh_item_date.wh_isToday {
    background: #fff !important;
    border-radius: 0px !important;
  }
  .wh_content_all {
    background: #fff !important;
  }
  .wh_item_date.wh_chose_day {
    background: #12bd7b !important;
    border-radius: 0px !important;
    color: #ffffff !important;
  }

  .wh_item_date.wh_other_dayhide {
    color: #fff !important;
  }
}
.cal_background {
  background: #000000;
  opacity: 0.4;
}
</style>

