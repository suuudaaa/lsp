<template>
  <div class="editContainer">
    <div class="breadCrumb">
      <bread-crumb></bread-crumb>
    </div>
    <div class="content">
      <el-form
        :inline="true"
        :model="formObject"
        status-icon
        :rules="rules"
        ref="formObject"
        :label-position="'left'"
        label-width="70px"
      >
        <el-row class="marginBottom40">
          <el-col>
            <el-form-item label="上级部门">
              <div class="levelContainer">
                <span v-for="(item, index) in superiorArr" :key="index">
                  <el-tag
                    class="level"
                    :class="{'thisLevel':(index+1) == superiorArr.length}"
                  >{{item}}</el-tag>
                  <i
                    class="el-breadcrumb__separator el-icon-arrow-right"
                    v-if="(index+1) != superiorArr.length"
                  ></i>
                </span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row class="marginBottom40">
          <el-col>
            <el-form-item label="部门名称" prop="department">
              <el-input
                type="text"
                v-model="formObject.department"
                auto-complete="off"
                placeholder="请输入部门名称"
              ></el-input>

              <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div class="matchBtn2" @click="showToBrand2">品牌分配</div>
              <div class="matchBtn2" @click="showToCustomer2">客户分配</div>
              <div class="matchBtn2" @click="showToPower2">权限管理</div> -->
              
            </el-form-item>
          </el-col>
        </el-row>

        <el-row
          class="marginTop24"
          v-for="(subDepartment, index) in formObject.subDepartment"
          :key="subDepartment.key"
        >
          <el-col>
            <div class="diyLabelContainer">
              <span v-show="index===0">下级部门</span>
            </div>
            <el-form-item :prop="'subDepartment.' + index + '.name'" :rules="rules.subDepartment">
              <el-input
                type="text"
                v-model="subDepartment.name"
                auto-complete="off"
                placeholder="请输入下级部门名称"
              ></el-input>
              <div class="delSonBtn">
                <i
                  class="icon iconfont icongongsiguanli-shanchuanniu"
                  @click.prevent="removeSubDepartment(subDepartment)"
                ></i>
              </div>
              <div class="matchBtn2" @click="showToBrand(subDepartment,index)">品牌分配</div>
              <div class="matchBtn2" @click="showToCustomer(subDepartment,index)">客户分配</div>
              <div class="matchBtn2" @click="showToPower(subDepartment,index)">权限管理</div>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row class="marginTop24">
          <el-col>
            <el-form-item class="diyFormItem">
              <i
                class="icon iconfont icongongsiguanli-xinjianbumen marginLeft70 addSonBtn"
                @click="addSubDepartment"
              ></i>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row class="marginTop60">
          <el-col>
            <el-form-item>
              <el-button
                class="formBtn marginLeft70"
                type="primary"
                @click="submitForm('formObject')"
              >保存</el-button>
              <el-button class="formBtn cancelBtn" @click="cancel">取消</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <!--品牌分配 dialog begin -->
    <el-dialog
      :custom-class="'popupContainer'"
      :width="'300'"
      :show-close="false"
      :visible.sync="visibleToBrand"
      :modal="false"
    >
      <i class="iconfont icongongsiguanli-shanchuanniu diyClose" @click="closeToBrand"></i>
      <el-row class="diyContainer">
        <el-col>
          <div class="diyHead">
            <span>品牌分配</span>
          </div>
          <div class="diyBody">
            <el-form>
              <el-row>
                <el-col class="selectAllCol">
                  <el-checkbox
                    :indeterminate="isNoToBrand"
                    v-model="checkAllToBrand"
                    @change="checkAllChangeToBrand"
                  >全选</el-checkbox>
                </el-col>
              </el-row>

              <div class="scrollBody">
                <el-checkbox-group v-model="checkedToBrand" @change="handleCheckedToBrand">
                  <el-row>
                    <el-col
                      v-for="item in dataToBrand"
                      :label="item.name"
                      :key="item.name"
                      :span="8"
                    >
                      <el-checkbox :label="item.name">{{item.name}}</el-checkbox>
                    </el-col>
                  </el-row>
                </el-checkbox-group>
              </div>
            </el-form>
          </div>
        </el-col>
      </el-row>

      <el-row class="btnLine">
        <el-col>
          <el-button type="primary" class="formBtn commitBtn" @click="commitToBrand">提交</el-button>
          <el-button class="formBtn resetBtn" @click="resetToBrand">清除</el-button>
        </el-col>
      </el-row>
    </el-dialog>
    <!-- 品牌分配 dialog end -->

    <!--客户分配 dialog begin -->
    <el-dialog
      :custom-class="'popupContainer'"
      :width="'300'"
      :show-close="false"
      :visible.sync="visibleToCustomer"
      :modal="false"
    >
      <i class="iconfont icongongsiguanli-shanchuanniu diyClose" @click="closeToCustomer"></i>
      <el-row class="diyContainer">
        <el-col>
          <div class="diyHead">
            <span>客户分配</span>
          </div>
          <div class="diyBody">
            <el-form>
              <el-row>
                <el-col class="selectAllCol">
                  <el-checkbox
                    :indeterminate="isNoToCustomer"
                    v-model="checkAllToCustomer"
                    @change="checkAllChangeToCustomer"
                  >全选</el-checkbox>
                </el-col>
              </el-row>

              <div class="scrollBody">
                <el-checkbox-group v-model="checkedToCustomer" @change="handleCheckedToCustomer">
                  <el-row>
                    <el-col
                      v-for="item in dataToCustomer"
                      :label="item.name"
                      :key="item.name"
                      :span="8"
                    >
                      <el-checkbox :label="item.name">{{item.name}}</el-checkbox>
                    </el-col>
                  </el-row>
                </el-checkbox-group>
              </div>
            </el-form>
          </div>
        </el-col>
      </el-row>

      <el-row class="btnLine">
        <el-col>
          <el-button type="primary" class="formBtn commitBtn" @click="commitToCustomer">提交</el-button>
          <el-button class="formBtn resetBtn" @click="resetToCustomer">清除</el-button>
        </el-col>
      </el-row>
    </el-dialog>
    <!-- 客户分配 dialog end -->

    <!--权限管理分配 dialog begin -->
    <el-dialog
      :custom-class="'popupContainer'"
      :width="'300'"
      :show-close="false"
      :visible.sync="visibleToPower"
      :modal="false"
    >
      <i class="iconfont icongongsiguanli-shanchuanniu diyClose" @click="closeToPower"></i>
      <el-row class="diyContainer">
        <el-col>
          <div class="diyHead">
            <span>客户分配</span>
          </div>
          <div class="diyBody">
            <el-form>
              <el-row>
                <el-col class="selectAllCol">
                  <el-checkbox
                    :indeterminate="isNoToPower"
                    v-model="checkAllToPower"
                    @change="checkAllChangeToPower"
                  >全选</el-checkbox>
                </el-col>
              </el-row>

              <div class="scrollBody">
                <el-checkbox-group v-model="checkedToPower" @change="handleCheckedToPower">
                  <el-row>
                    <el-col
                      v-for="item in dataToPower"
                      :label="item.name"
                      :key="item.name"
                      :span="8"
                    >
                      <el-checkbox :label="item.name">{{item.name}}</el-checkbox>
                    </el-col>
                  </el-row>
                </el-checkbox-group>
              </div>
            </el-form>
          </div>
        </el-col>
      </el-row>

      <el-row class="btnLine">
        <el-col>
          <el-button type="primary" class="formBtn commitBtn" @click="commitToPower">提交</el-button>
          <el-button class="formBtn resetBtn" @click="resetToPower">清除</el-button>
        </el-col>
      </el-row>
    </el-dialog>
    <!-- 权限管理分配 dialog end -->

    <!--品牌分配222 dialog begin -->
    <el-dialog
      :custom-class="'popupContainer'"
      :width="'300'"
      :show-close="false"
      :visible.sync="visibleToBrand2"
      :modal="false"
    >
      <i class="iconfont icongongsiguanli-shanchuanniu diyClose" @click="closeToBrand2"></i>
      <el-row class="diyContainer">
        <el-col>
          <div class="diyHead">
            <span>品牌分配</span>
          </div>
          <div class="diyBody">
            <el-form>
              <el-row>
                <el-col class="selectAllCol">
                  <el-checkbox
                    :indeterminate="isNoToBrand2"
                    v-model="checkAllToBrand2"
                    @change="checkAllChangeToBrand2"
                  >全选</el-checkbox>
                </el-col>
              </el-row>

              <div class="scrollBody">
                <el-checkbox-group v-model="checkedToBrand2" @change="handleCheckedToBrand2">
                  <el-row>
                    <el-col
                      v-for="item in dataToBrand"
                      :label="item.name"
                      :key="item.name"
                      :span="8"
                    >
                      <el-checkbox :label="item.name">{{item.name}}</el-checkbox>
                    </el-col>
                  </el-row>
                </el-checkbox-group>
              </div>
            </el-form>
          </div>
        </el-col>
      </el-row>

      <el-row class="btnLine">
        <el-col>
          <el-button type="primary" class="formBtn commitBtn" @click="commitToBrand2">提交</el-button>
          <el-button class="formBtn resetBtn" @click="resetToBrand2">清除</el-button>
        </el-col>
      </el-row>
    </el-dialog>
    <!-- 品牌分配222 dialog end -->

    <!--客户分配222 dialog begin -->
    <el-dialog
      :custom-class="'popupContainer'"
      :width="'300'"
      :show-close="false"
      :visible.sync="visibleToCustomer2"
      :modal="false"
    >
      <i class="iconfont icongongsiguanli-shanchuanniu diyClose" @click="closeToCustomer2"></i>
      <el-row class="diyContainer">
        <el-col>
          <div class="diyHead">
            <span>客户分配</span>
          </div>
          <div class="diyBody">
            <el-form>
              <el-row>
                <el-col class="selectAllCol">
                  <el-checkbox
                    :indeterminate="isNoToCustomer2"
                    v-model="checkAllToCustomer2"
                    @change="checkAllChangeToCustomer2"
                  >全选</el-checkbox>
                </el-col>
              </el-row>

              <div class="scrollBody">
                <el-checkbox-group v-model="checkedToCustomer2" @change="handleCheckedToCustomer2">
                  <el-row>
                    <el-col
                      v-for="item in dataToCustomer"
                      :label="item.name"
                      :key="item.name"
                      :span="8"
                    >
                      <el-checkbox :label="item.name">{{item.name}}</el-checkbox>
                    </el-col>
                  </el-row>
                </el-checkbox-group>
              </div>
            </el-form>
          </div>
        </el-col>
      </el-row>

      <el-row class="btnLine">
        <el-col>
          <el-button type="primary" class="formBtn commitBtn" @click="commitToCustomer2">提交</el-button>
          <el-button class="formBtn resetBtn" @click="resetToCustomer2">清除</el-button>
        </el-col>
      </el-row>
    </el-dialog>
    <!-- 客户分配222 dialog end -->

    <!--权限管理分配22 dialog begin -->
    <el-dialog
      :custom-class="'popupContainer'"
      :width="'300'"
      :show-close="false"
      :visible.sync="visibleToPower2"
      :modal="false"
    >
      <i class="iconfont icongongsiguanli-shanchuanniu diyClose" @click="closeToPower2"></i>
      <el-row class="diyContainer">
        <el-col>
          <div class="diyHead">
            <span>权限管理</span>
          </div>
          <div class="diyBody">
            <el-form>
              <el-row>
                <el-col class="selectAllCol">
                  <el-checkbox
                    :indeterminate="isNoToPower2"
                    v-model="checkAllToPower2"
                    @change="checkAllChangeToPower2"
                  >全选</el-checkbox>
                </el-col>
              </el-row>

              <div class="scrollBody">
                <el-checkbox-group v-model="checkedToPower2" @change="handleCheckedToPower2">
                  <el-row>
                    <el-col
                      v-for="item in dataToPower"
                      :label="item.name"
                      :key="item.name"
                      :span="8"
                    >
                      <el-checkbox :label="item.name">{{item.name}}</el-checkbox>
                    </el-col>
                  </el-row>
                </el-checkbox-group>
              </div>
            </el-form>
          </div>
        </el-col>
      </el-row>

      <el-row class="btnLine">
        <el-col>
          <el-button type="primary" class="formBtn commitBtn" @click="commitToPower2">提交</el-button>
          <el-button class="formBtn resetBtn" @click="resetToPower2">清除</el-button>
        </el-col>
      </el-row>
    </el-dialog>
    <!-- 权限管理分配22 dialog end -->
  </div>
</template>
<script>
import BreadCrumb from "@/components/commonComponents/BreadCrumb";
import {
  subDepartment,
  editDepartment,
  companyCustomer,
  getBrand,
  getMenu,
  getCompanyInfo
} from "@/api/getData";
export default {
  components: {
    BreadCrumb
  },
  data() {
    let validateDepartment = (rule, value, callback) => {
        if (!value) {
          return callback(new Error("部门名称不能为空"));
        } else {
          callback();
        }
      },
      validateSubDepartment = (rule, value, callback) => {
        if (!value) {
          return callback(new Error("下级部门名称不能为空"));
        } else {
          callback();
        }
      };
    return {
      id: "",

      thisObject: {
        goodsBrandInfo: [],
        shipperInfo: [],
        menuInfo: []
      },

      formObject: {
        department: "",
        subDepartment: [] //下级列表 列表容器
      },
      rules: {
        department: [{ validator: validateDepartment, trigger: "blur" }],
        subDepartment: [{ validator: validateSubDepartment, trigger: "blur" }]
      },
      superiorArr: [], //上级部门

      /* 品牌分配的属性 特殊标识toBrand begin */
      dataToBrand: [], //data
      visibleToBrand: false, //show开关
      checkAllToBrand: false, //全选开关
      checkedToBrand: [], //选中的
      isNoToBrand: true, //是否
      thisIndexToBrand: 0, //当前操作的容器 下标
      /* 品牌分配的属性 end */

      /* 客户分配的属性 特殊标识toCustomer begin */
      dataToCustomer: [], //data
      visibleToCustomer: false, //show开关
      checkAllToCustomer: false, //全选开关
      checkedToCustomer: [], //选中的
      isNoToCustomer: true, //是否
      thisIndexToCustomer: 0, //当前操作的容器 下标
      /* 客户分配的属性 end */

      /* 权限管理分配的属性 特殊标识toPower begin */
      dataToPower: [], //data
      visibleToPower: false, //show开关
      checkAllToPower: false, //全选开关
      checkedToPower: [], //选中的
      isNoToPower: true, //是否
      thisIndexToPower: 0, //当前操作的容器 下标
      /* 权限管理分配的属性 end */

      /* 品牌分配22的属性 特殊标识toBrand begin */
      // dataToBrand: [], //data 不用
      visibleToBrand2: false, //show开关
      checkAllToBrand2: false, //全选开关
      checkedToBrand2: [], //选中的
      isNoToBrand2: true, //是否
      // thisIndexToBrand2: 0, //当前操作的容器 下标 不用
      /* 品牌分配22的属性 end */

      /* 客户分配22的属性 特殊标识toCustomer begin */
      // dataToCustomer: [], //data
      visibleToCustomer2: false, //show开关
      checkAllToCustomer2: false, //全选开关
      checkedToCustomer2: [], //选中的
      isNoToCustomer2: true, //是否
      // thisIndexToCustomer: 0, //当前操作的容器 下标
      /* 客户分配22的属性 end */

      /* 权限管理分配22的属性 特殊标识toPower begin */
      // dataToPower: [], //data
      visibleToPower2: false, //show开关
      checkAllToPower2: false, //全选开关
      checkedToPower2: [], //选中的
      isNoToPower2: true //是否
      // thisIndexToPower: 0 //当前操作的容器 下标
      /* 权限管理分配22的属性 end */
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    /* 品牌分配 begin */
    //打开窗口
    showToBrand(item, index) {
      this.thisIndexToBrand = index;
      this.checkedToBrand = new Array();
      this.formObject.subDepartment[this.thisIndexToBrand][
        "goodsBrandInfo"
      ].forEach((v, i, l) => {
        this.checkedToBrand.push(v.name);
      });
      this.visibleToBrand = !this.visibleToBrand;
    },
    //关闭窗口
    closeToBrand() {
      this.visibleToBrand = false;
    },
    //处理所有选中的更改
    checkAllChangeToBrand(val) {
      this.checkAllToBrand = !!this.checkAllToBrand;
      let _checked = this.dataToBrand.map(item => {
        return item.name;
      });
      this.checkedToBrand = this.checkAllToBrand ? _checked : [];
      this.isNoToBrand = false;
    },
    //处理选中的更改
    handleCheckedToBrand(value) {
      let checkedCount = value.length;
      this.checkAllToBrand = checkedCount === this.dataToBrand.length;
      this.isNoToBrand =
        checkedCount > 0 && checkedCount < this.dataToBrand.length;
    },
    //提交按钮
    commitToBrand() {
      let result = [];
      this.checkedToBrand.forEach(name => {
        result.push({
          id: "",
          name: name
        });
      });
      this.formObject.subDepartment[this.thisIndexToBrand][
        "goodsBrandInfo"
      ] = result;
      this.visibleToBrand = false;
    },
    //清空
    resetToBrand() {
      (this.checkedToBrand = []), (this.isNoToBrand = false);
    },
    /* 品牌分配 end */

    /* 客户分配 begin */
    //打开窗口
    showToCustomer(item, index) {
      this.thisIndexToCustomer = index;
      this.checkedToCustomer = new Array();
      this.formObject.subDepartment[this.thisIndexToCustomer][
        "shipperInfo"
      ].forEach((v, i, l) => {
        this.checkedToCustomer.push(v.name);
      });
      this.visibleToCustomer = !this.visibleToCustomer;
    },
    //关闭窗口
    closeToCustomer() {
      this.visibleToCustomer = false;
    },
    //处理所有选中的更改
    checkAllChangeToCustomer(val) {
      this.checkAllToCustomer = !!this.checkAllToCustomer;
      let _checked = this.dataToCustomer.map(item => {
        return item.name;
      });
      this.checkedToCustomer = this.checkAllToCustomer ? _checked : [];
      this.isNoToCustomer = false;
    },
    //处理选中的更改
    handleCheckedToCustomer(value) {
      let checkedCount = value.length;
      this.checkAllToCustomer = checkedCount === this.dataToCustomer.length;
      this.isNoToCustomer =
        checkedCount > 0 && checkedCount < this.dataToCustomer.length;
    },
    //提交按钮
    commitToCustomer() {
      let result = [];
      this.checkedToCustomer.forEach(name => {
        result.push({
          id: "",
          name: name
        });
      });
      this.formObject.subDepartment[this.thisIndexToCustomer][
        "shipperInfo"
      ] = result;
      this.visibleToCustomer = false;
    },
    //清空
    resetToCustomer() {
      (this.checkedToCustomer = []), (this.isNoToCustomer = false);
    },
    /* 客户分配 end */

    /* 权限管理分配 begin */
    //打开窗口
    showToPower(item, index) {
      this.thisIndexToPower = index;
      this.checkedToPower = new Array();
      this.formObject.subDepartment[this.thisIndexToPower]["menuInfo"].forEach(
        (v, i, l) => {
          this.checkedToPower.push(v.name);
        }
      );
      this.visibleToPower = !this.visibleToPower;
    },
    //关闭窗口
    closeToPower() {
      this.visibleToPower = false;
    },
    //处理所有选中的更改
    checkAllChangeToPower(val) {
      this.checkAllToPower = !!this.checkAllToPower;
      let _checked = this.dataToPower.map(item => {
        return item.name;
      });
      this.checkedToPower = this.checkAllToPower ? _checked : [];
      this.isNoToPower = false;
    },
    //处理选中的更改
    handleCheckedToPower(value) {
      let checkedCount = value.length;
      this.checkAllToPower = checkedCount === this.dataToPower.length;
      this.isNoToPower =
        checkedCount > 0 && checkedCount < this.dataToPower.length;
    },
    //提交按钮
    commitToPower() {
      let result = [];
      this.checkedToPower.forEach(name => {
        result.push({
          id: "",
          name: name
        });
      });
      this.formObject.subDepartment[this.thisIndexToPower]["menuInfo"] = result;
      this.visibleToPower = false;
    },
    //清空
    resetToPower() {
      (this.checkedToPower = []), (this.isNoToPower = false);
    },
    /* 权限管理分配 end */

    superiorArrFun() {
      let orgData = JSON.parse(localStorage.getItem("edit_org_data"));
      // console.log("------:",orgData);
      // this.superiorArr = orgData.superiorName.split("->");
      this.superiorArr = !orgData.superiorName
        ? []
        : orgData.superiorName.split("->");
      this.superiorArr.push(orgData.label);
    },
    getInfoFun() {
      let orgData = JSON.parse(localStorage.getItem("edit_org_data"));
      let participation = orgData.isCompany
        ? {
            comId: orgData.id
          }
        : {
            roleId: orgData.id
          };
      subDepartment(participation)
        .then(res => {
          if (res.ret == "0") {
            console.log("------subDepartment-------:", res.data);
            this.formObject.subDepartment = res.data;
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        })
        .catch(err => {
          if (window.console) console.log(err);
        });
    },
    getBrandFun() {
      let orgData = JSON.parse(window.localStorage.getItem("edit_org_data"));
      let participation = orgData.isCompany
        ? {
            comId: orgData.id
          }
        : {
            roleId: orgData.id
          };
      getBrand(participation)
        .then(res => {
          if (res.ret == "0") {
            // console.log("---获取所有品牌---:", res.data.rows);
            let arr = [];
            res.data.rows.forEach((v, i, l) => {
              arr.push({
                id: v.id,
                name: v.goodsBrand
              });
            });
            this.dataToBrand = arr;
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        })
        .catch(err => {
          if (window.console) console.log(err);
        });
    },

    companyCustomerFun() {
      let orgData = JSON.parse(window.localStorage.getItem("edit_org_data"));
      let participation = orgData.isCompany
        ? {
            comId: orgData.id
          }
        : {
            roleId: orgData.id
          };
      companyCustomer(participation)
        .then(res => {
          if (res.ret == "0") {
            // console.log("---获取所有客户---:", res.data.rows);
            let arr = [];
            res.data.rows.forEach((v, i, l) => {
              arr.push({
                id: v.shipperCode,
                name: v.shipperName
              });
            });
            this.dataToCustomer = arr;
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        })
        .catch(err => {
          if (window.console) console.log(err);
        });
    },
    getMenuFun() {
      let orgData = JSON.parse(window.localStorage.getItem("edit_org_data"));
      let participation = orgData.isCompany
        ? {
            comId: orgData.id
          }
        : {
            roleId: orgData.id
          };

      getMenu(participation)
        .then(res => {
          if (res.ret == "0") {
            // console.log("---获取所有权限管理---:", res.data);
            let arr = [];
            res.data.forEach((v, i, l) => {
              arr.push({
                id: v.id,
                name: v.menuName
              });
            });
            this.dataToPower = arr;
            // console.log("this.dataToPower:", this.dataToPower);
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        })
        .catch(err => {
          if (window.console) console.log(err);
        });
    },

    getCompanyInfoFun() {
      let orgData = JSON.parse(localStorage.getItem("edit_org_data"));
      let participation = orgData.isCompany
        ? {
            comId: orgData.id
          }
        : {
            roleId: orgData.id
          };

      getCompanyInfo(participation)
        .then(res => {
          if (res.ret == "0") {
            // console.log("-getCompanyInfo-", res.data);
            this.thisObject.goodsBrandInfo = res.data.goodsBrandInfo;
            this.thisObject.shipperInfo = res.data.shipperInfo;
            this.thisObject.menuInfo = res.data.menuInfo;
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        })
        .catch(err => {
          if (window.console) console.log(err);
        });
    },

    init() {
      //非表单信息 begin
      this.id = JSON.parse(window.localStorage.getItem("edit_org_data")).id;
      this.formObject.department = JSON.parse(
        window.localStorage.getItem("edit_org_data")
      ).label;
      //非表单信息 end

      this.getCompanyInfoFun(); //获取当前部门信息

      this.superiorArrFun(); //上级显示信息

      this.getInfoFun(); //获取表单信息

      this.getBrandFun(); /* init 获取所有品牌 */
      this.companyCustomerFun(); /* init 获取所有客户 */
      this.getMenuFun(); /* init 获取所有权限管理分配 */
    },
    //保存
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          /*包装当前*/
          //品牌分配数据格式包装
          /*this.thisObject.goodsBrandInfo.forEach((item, i, l) => {
            item.id = item.name;
            item.name = "";
          });
          //客户分配数据格式包装
          this.thisObject.shipperInfo.forEach((item, i, l) => {
            item.id = item.name;
            item.name = "";
          });
          //权限管理分配数据格式包装
          this.thisObject.menuInfo.forEach((item, i, l) => {
            item.id = item.name;
            item.name = "";
          });*/


          //品牌分配数据格式包装
          this.formObject.subDepartment.forEach((v, i, l) => {
            v["goodsBrandInfo"].forEach((item, i, l) => {
              item.id = item.name;
              item.name = "";
            });
          });
          //客户分配数据格式包装
          this.formObject.subDepartment.forEach((v, i, l) => {
            v["shipperInfo"].forEach((item, i, l) => {
              item.id = item.name;
              item.name = "";
            });
          });
          //权限管理分配数据格式包装
          this.formObject.subDepartment.forEach((v, i, l) => {
            v["menuInfo"].forEach((item, i, l) => {
              // console.log("item:", item);
              item.id = item.name;
              item.name = "";
            });
          });

          //api参数
          let participation = {
            id: this.id,
            name: this.formObject.department,
            //todo 在这里传输 当前三者 暂时注释
            // goodsBrandInfo: this.thisObject.goodsBrandInfo,
            // shipperInfo: this.thisObject.shipperInfo,
            // menuInfo: this.thisObject.menuInfo,
            subRole: this.formObject.subDepartment //传输下级部门
          };
          //提交api
          editDepartment(participation)
            .then(res => {
              if (res.ret == "0") {
                // console.log("-editDepartment-", res.data);
                this.$message({
                  message: "保存成功",
                  type: "success"
                });
                this.$router.push({ path: "/power/company/org" });
              } else {
                this.$message({
                  message: res.msg,
                  type: "error"
                });
              }
            })
            .catch(err => {
              if (window.console) console.log(err);
            });
        } else {
          return false;
        }
      });
    },
    cancel() {
      this.$router.push({ path: "/power/company/org" });
    },
    removeSubDepartment(item) {
      let index = this.formObject.subDepartment.indexOf(item);
      if (index !== -1) {
        this.formObject.subDepartment.splice(index, 1);
      }
    },
    addSubDepartment() {
      this.formObject.subDepartment.push({
        name: "",
        goodsBrandInfo: [], //品牌分配
        shipperInfo: [], //客户分配
        menuInfo: [] //权限管理分配
      });
    },

    /* 品牌分配2 begin */
    //打开窗口
    showToBrand2() {
      let container = this.thisObject;
      this.checkedToBrand2 = new Array();
      container.goodsBrandInfo.forEach((v, i, l) => {
        this.checkedToBrand2.push(v.name);
      });
      this.visibleToBrand2 = !this.visibleToBrand2;
    },
    //关闭窗口
    closeToBrand2() {
      this.visibleToBrand2 = false;
    },
    //处理所有选中的更改
    checkAllChangeToBrand2(val) {
      this.checkAllToBrand2 = !!this.checkAllToBrand2;
      let _checked = this.dataToBrand.map(item => {
        return item.name;
      });
      this.checkedToBrand2 = this.checkAllToBrand2 ? _checked : [];
      this.isNoToBrand2 = false;
    },
    //处理选中的更改
    handleCheckedToBrand2(value) {
      let checkedCount = value.length;
      this.checkAllToBrand2 = checkedCount === this.dataToBrand.length;
      this.isNoToBrand2 =
        checkedCount > 0 && checkedCount < this.dataToBrand.length;
    },
    //提交按钮
    commitToBrand2() {
      let container = this.thisObject;
      let result = [];
      this.checkedToBrand2.forEach(name => {
        result.push({
          id: "",
          name: name
        });
      });
      container.goodsBrandInfo = result;
      this.visibleToBrand2 = false;
    },
    //清空
    resetToBrand2() {
      (this.checkedToBrand2 = []), (this.isNoToBrand2 = false);
    },
    /* 品牌分配2 end */

    /* 客户分配222 begin */
    //打开窗口
    showToCustomer2() {
      let container = this.thisObject;
      this.checkedToCustomer2 = new Array();
      container.shipperInfo.forEach((v, i, l) => {
        this.checkedToCustomer2.push(v.name);
      });
      this.visibleToCustomer2 = !this.visibleToCustomer2;
    },
    //关闭窗口
    closeToCustomer2() {
      this.visibleToCustomer2 = false;
    },
    //处理所有选中的更改
    checkAllChangeToCustomer2(val) {
      this.checkAllToCustomer2 = !!this.checkAllToCustomer2;
      let _checked = this.dataToCustomer.map(item => {
        return item.name;
      });
      this.checkedToCustomer2 = this.checkAllToCustomer2 ? _checked : [];
      this.isNoToCustomer2 = false;
    },
    //处理选中的更改
    handleCheckedToCustomer2(value) {
      let checkedCount = value.length;
      this.checkAllToCustomer2 = checkedCount === this.dataToCustomer.length;
      this.isNoToCustomer2 =
        checkedCount > 0 && checkedCount < this.dataToCustomer.length;
    },
    //提交按钮
    commitToCustomer2() {
      let container = this.thisObject;
      let result = [];
      this.checkedToCustomer2.forEach(name => {
        result.push({
          id: "",
          name: name
        });
      });
      container.shipperInfo = result;
      this.visibleToCustomer2 = false;
    },
    //清空
    resetToCustomer2() {
      (this.checkedToCustomer2 = []), (this.isNoToCustomer2 = false);
    },
    /* 客户分配 end */

    /* 权限管理分配 begin */
    //打开窗口
    showToPower2() {
      let container = this.thisObject;
      this.checkedToPower2 = new Array();
      container.menuInfo.forEach((v, i, l) => {
        this.checkedToPower2.push(v.name);
      });
      this.visibleToPower2 = !this.visibleToPower2;
    },
    //关闭窗口
    closeToPower2() {
      this.visibleToPower2 = false;
    },
    //处理所有选中的更改
    checkAllChangeToPower2(val) {
      this.checkAllToPower2 = !!this.checkAllToPower2;
      let _checked = this.dataToPower.map(item => {
        return item.name;
      });
      this.checkedToPower2 = this.checkAllToPower2 ? _checked : [];
      this.isNoToPower2 = false;
    },
    //处理选中的更改
    handleCheckedToPower2(value) {
      let checkedCount = value.length;
      this.checkAllToPower2 = checkedCount === this.dataToPower.length;
      this.isNoToPower2 =
        checkedCount > 0 && checkedCount < this.dataToPower.length;
    },
    //提交按钮
    commitToPower2() {
      let container = this.thisObject;
      let result = [];
      this.checkedToPower2.forEach(name => {
        result.push({
          id: "",
          name: name
        });
      });
      container.menuInfo = result;
      this.visibleToPower2 = false;
    },
    //清空
    resetToPower2() {
      (this.checkedToPower2 = []), (this.isNoToPower2 = false);
    }
    /* 权限管理分配 end */
  }
};
</script>

<style lang="scss">
@import "~@/view/power//styles/editContainer";
@import "~@/assets/scss/form";

/* native begin */
.popupContainer {
  border-radius: 8px;
  .el-dialog__header {
    display: none;
  }
  .el-dialog__body {
    padding: 25px 22px 20px 22px;
    .el-button {
      padding: 0px;
    }
    .el-button + .el-button {
      margin-left: 24px;
    }
  }
}
/* native end */
.popupContainer {
  .diyClose {
    z-index: 1;
    cursor: pointer;
    position: absolute;
    right: 24px;
    top: 24px;
    font-size: 16px;
  }
  .diyHead {
    text-align: center;
    width: 100%;
    line-height: 30px;
    span {
      color: #2b3d51;
      font-size: 20px;
      font-weight: bold;
    }
  }
  .diyBody {
    padding: 14px 0px 0px 0px;
    .scrollBody {
      margin: 20px 0px 10px 0px;
      overflow-y: auto;
      min-height: 30px;
      max-height: 180px;
      padding: 10px;
      .el-checkbox {
        margin-bottom: 24px;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .selectAllCol {
      text-align: center;
    }
  }
  .btnLine {
    text-align: center;
    margin: 0px 0px 20px 0px;
    .formBtn {
      width: 144px;
      height: 36px;
    }
    .resetBtn {
      border-color: #12bd7b;
      color: #12bd7b;
    }
  }
}
</style>