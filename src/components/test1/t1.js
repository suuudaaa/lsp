<html lang="en"><head>
    <meta charset="UTF-8" content="always" name="referrer">
    <title>路迪斯达供应链服务平台</title>
    <link rel="stylesheet" href="/static/layui/css/layui.css">
    <link rel="stylesheet" href="/static/css/page.css">
    <link rel="stylesheet" href="/static/css/warehouse.css">
    <link rel="stylesheet" href="/static/css/style.css">
    <script src="/static/js/lib/jquery.min.js"></script>
    <script src="/static/layui/layui.js"></script>
    <script src="/static/js/common.js"></script>
<link id="layuicss-layer" rel="stylesheet" href="https://lsp.roadsimple.net/static/layui/css/modules/layer/default/layer.css?v=3.1.1" media="all"><link id="layuicss-laydate" rel="stylesheet" href="https://lsp.roadsimple.net/static/layui/css/modules/laydate/default/laydate.css?v=5.0.9" media="all"></head>
<body style="">
<!--导航-->
<div class="nav" style="left: 0px;">
    <ul class="layui-nav" id="mainIndexMenu">
        <li class="layui-nav-item logo">
            <a href="javascript:;" onclick="returnHome()"><img src="/static/images/logo.svg" alt="">· 路迪斯达供应链服务平台</a>
        </li>
            <li class="layui-nav-item active">
                <a href="javascript:;" class="nav-item nav-index" onclick="openNewPage('/mainPageIndex')">首页</a>
            </li>
            <li class="layui-nav-item active">
                <a href="javascript:;" class="nav-item nav-order" onclick="openNewPage('')">订单中心<span class="layui-nav-more"></span></a>
                    <dl class="layui-nav-child layui-anim layui-anim-upbit">
                            <dd class=""><a href="javascript:;" onclick="openNewPage('/inOrder','10')">入仓订单</a>
                            </dd>
                            <dd class="layui-this"><a href="javascript:;" onclick="openNewPage('/outOrder','10')">出仓订单</a>
                            </dd>
                    </dl>
            </li>
            <li class="layui-nav-item active">
                <a href="javascript:;" class="nav-item nav-report" onclick="openNewPage('')">报表中心<span class="layui-nav-more"></span></a>
                    <dl class="layui-nav-child layui-anim layui-anim-upbit">
                            <dd><a href="javascript:;" onclick="openNewPage('/inOrderReport','10')">入仓报表</a>
                            </dd>
                            <dd><a href="javascript:;" onclick="openNewPage('/outOrderReport','10')">出仓报表</a>
                            </dd>
                            <dd class=""><a href="javascript:;" onclick="openNewPage('/stockReport','10')">库存明细报表</a>
                            </dd>
                            <dd><a href="javascript:;" onclick="openNewPage('/stockSummaryReport','10')">库存汇总报表</a>
                            </dd>
                            <dd><a href="javascript:;" onclick="openNewPage('/sourceQuery','10')">收发货溯源查询</a>
                            </dd>
                            <dd><a href="javascript:;" onclick="openNewPage('/stockSource/index4YaXun','10')">库存溯源报表</a>
                            </dd>
                    </dl>
            </li>
            <li class="layui-nav-item active">
                <a href="javascript:;" class="nav-item nav-setting" onclick="openNewPage('')">系统设置<span class="layui-nav-more"></span></a>
                    <dl class="layui-nav-child layui-anim layui-anim-upbit">
                            <dd><a href="javascript:;" onclick="openNewPage('/role','1')">角色权限管理</a>
                            </dd>
                            <dd><a href="javascript:;" onclick="openNewPage('/user','1')">用户管理</a>
                            </dd>
                            <dd><a href="javascript:;" onclick="openNewPage('/operationLog','1')">行为日志</a>
                            </dd>
                    </dl>
            </li>
        <li class="layui-nav-item ldsd-user" lay-unselect="">
            <a href="javascript:;">Hi！郑莉<span class="layui-nav-more"></span></a>
            <dl class="layui-nav-child">
                <dd><a href="javascript:;" onclick="viewUser()">个人中心</a></dd>
                <dd><a href="/sys/guide/index">新手指引</a></dd>
                <dd><a href="javascript:;" onclick="exitLogin()">退出登录</a></dd>
            </dl>
        </li>
        <li class="layui-nav-item ldsd-user depot">
            <a href="javascript:;"><em>东莞长安保税仓</em>
                <span class="layui-btn layui-btn-primary layui-btn-radius layui-btn layui-btn-xs ldsd-btn-radius">切换</span>
            </a>
        </li>
    <span class="layui-nav-bar" style="left: 0px; top: 55px; width: 0px; opacity: 0;"></span></ul>
</div>

<div id="centerMainDiv">










    <meta charset="UTF-8">
    <title>路迪斯达管理系统</title>




    <meta charset="UTF-8">
    <title>路迪斯达</title>
    <script src="/static/lordstar/common.js"></script>


<script>
    function addDaysByNow(days) {
        var d = new Date();
        d.setDate(d.getDate() + days);

        var month = d.getMonth() + 1;
        var strDate = d.getDate();

        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        return d.getFullYear() + '-' + month + '-' + strDate;
    }

    function tableDone(res, curr, count) {
        if (undefined != res.ret && res.ret > 0) {
            layer.msg(res.msg);
            if (res.retCode == 4040001) {
                window.location.href = '/login';
            }
        }
    }

    function queryByDaysAgo(days) {
        var queryDateName = document.getElementById("queryDateName");
        var paramName = queryDateName ? queryDateName.value : "createTime";
        $('#search_GTE_' + paramName).val(addDaysByNow(-days));
        $('#search_LTE_' + paramName).val(addDaysByNow(0));
    }

    function getPostData(fname) {
        var dataArr = $(fname).serializeArray();
        var sortName = document.getElementById("sortName");
        var orderByName = document.getElementById("orderByName");
        var queryDateName = document.getElementById("queryDateName");
        var sort = sortName ? sortName.value : "createTime";
        var orderBy = orderByName ? orderByName.value : "desc";
        var postJson = {sort: sort, order: orderBy};
        for (var i = 0; i < dataArr.length; i++) {
            postJson[dataArr[i].name] = dataArr[i].value;
        }
        var queryDate = queryDateName ? queryDateName.value : "createTime";
        if (postJson["search_LTE_" + queryDate]) {
            postJson["search_LTE_" + queryDate] += " 23:59:59";
        }
        return postJson;
    }

    function getPostDataToParamStr(fname) {
        var postData = getPostData(fname);
        var requestParamStr = "";
        for (var key in postData) {
            requestParamStr += key + "=" + postData[key] + "&";
        }
        requestParamStr = requestParamStr.substring(0, requestParamStr.length - 1);
        return requestParamStr;
    }

    function isValidForm() {
        var queryValue = "";
        var filter = arguments[0] ? arguments[0] : [];
        if ($("button[id='queryBtn']").length > 0) {
            $(".layui-form input[class='layui-input']").each(function (index) {
                if (filter.indexOf(this.name) == -1) {
                    queryValue += $(this).val();
                }
            });
            $(".layui-form select").each(function (index) {
                if (filter.indexOf(this.name) == -1) {
                    queryValue += $(this).val();
                }
            });
            if (queryValue == "") {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    function exportExcel(fname, url) {
        if (null == document.getElementById('exportExcelByList')) {
            var excelForm = document.createElement("form");
            excelForm.id = 'exportExcelByList';
            excelForm.target = '_blank';
            excelForm.method = 'post';
            document.getElementById('tb').appendChild(excelForm);
        }
        $('#exportExcelByList').attr('action', '/server/' + url + '?' + getPostDataToParamStr(fname));

        $('#exportExcelByList').submit();
    }

    function addFileElement(fileType, fileName, createTime, fileUrl) {
        var realUrl = '/server/scmApi/view/' + fileUrl;
        $("#downloadList").append('<li>'
                + '<p class="type fl"><img src="/static/images/order/' + fileType + '.svg" alt="">' + '</p>'
                + '<p class="tit">' + fileName + '</p>'
                + '<p class="time">' + createTime + '</p>'
                + '<a href="javascript:;" onClick="downloadFile(\'' + realUrl + '\')">' + '</a>'
                + '</li>');
    }

    function downLoadType(fileName) {
        var url = fileName;
        var type = "icon_file";
        if (url.isIgnoreCaseContain(".docx") || url.isIgnoreCaseContain(".doc")) {
            type += "01";
        } else if (url.isIgnoreCaseContain(".xlsx") || url.isIgnoreCaseContain(".xls")) {
            type += "02";
        } else if (url.isIgnoreCaseContain(".pdf")) {
            type += "03";
        } else if (url.isIgnoreCaseContain(".png") || url.isIgnoreCaseContain(".jpg")
                || url.isIgnoreCaseContain(".jpeg") || url.isIgnoreCaseContain(".bmp") || url.isIgnoreCaseContain(".gif")) {
            type += "04";
        }
        return type;
    }

    /**
     * 是否包含字符串(忽略大小)
     * @param subStr
     * @returns {boolean}
     */
    String.prototype.isIgnoreCaseContain = function (subStr) {
        var reg = new RegExp(subStr, 'i');
        return this.match(reg) != null;
    }

    function downloadFile(url) {
        if (null == document.getElementById('downloadFile')) {
            var excelForm = document.createElement("form");
            excelForm.id = 'downloadFile';
            excelForm.target = '_blank';
            excelForm.method = 'post';
            document.body.appendChild(excelForm);
        }
        $('#downloadFile').attr('action', url);
        $('#downloadFile').submit();
//        window.open(url, '_blank');
    }

    function getQianFenNum(num) {
        return Number(num).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }

    $(function () {
        $(document).keydown(function (event) {
            if (event.keyCode == 13) {
                if ($("button[id='queryBtn']").length > 0) {
                    $("button[id='queryBtn']").click();  // 执行点击
                }
            }
        });
    });
</script>


<!--主体内容-->
<div class="orderDetail">
<div class="ldsd-floating">
    <div class="ldsd-breadcrumb">
                <span class="layui-breadcrumb" style="visibility: visible;">
                    <span class="layui-badge-dot layui-bg-black"></span>
                    <a href="javascript:;" onclick="returnHome()">首页</a><span lay-separator="">/</span>
                    <a href="javascript:;">订单中心</a><span lay-separator="">/</span>
                    <a href="javascript:;">出仓订单</a><span lay-separator="">/</span>
                    <a><cite>订单详情</cite></a>
                </span>
    </div>

    <div class="outline clearfix">
        <div class="order-sn fl">
            <span class="in-tag out-tag">系统订单号</span>
            <span class="sn">BWO1908230026</span>
        </div>
        <ul class="orderTitle clearfix">
            <li class="active">订单状态</li>
            <li>订单信息</li>
            <li>货物明细</li>
        </ul>
    </div>
</div>

<div class="container ldsd-timeline">
    <div class="hd clearfix">
        <div class="tit fl">
            <p>当前</p>
            <h2 class="out-icon-s7">货物已签收</h2>
        </div>
        <div class="step fl">
            <ul class="state-line out-state-line out-state7">
                    <li class="s1 ">
                    </li>
                    <li class="s2 ">
                    </li>
                    <li class="s3 ">
                    </li>
                    <li class="s4 ">
                    </li>
                    <li class="s5 ">
                    </li>
                    <li class="s6 ">
                    </li>
                    <li class="s7 active">
                            <div>
                                <p class="info"><em class="icon"></em>货物已签收</p>
                                <p class="time">2019/08/27 23:00</p>
                            </div>
                    </li>
            </ul>
        </div>
    </div>
    <div class="step-detail">
        <div class="hd clearfix">
            <p class="state fl">订单状态</p>
            <p class="state fl">物流详情</p>
            <p class="state fr">执行时间</p>
        </div>
        <div class="bd">
                <ul class="layui-timeline">
                                <li class="layui-timeline-item">
                                    <div class="layui-timeline-content layui-text">
                                        <ul>
                                            <li>
                                                <div class="left clearfix">
                                                    <p class="main-outline fl">出仓申报(已放行)</p>
                                                    <p class="time fr">08/30<br>17:19</p>
                                                </div>
                                                <span><i class="layui-icon layui-timeline-axis"></i>出仓申报(已放行)<span class="fr step-time">2019-08-30 17:19</span></span>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <!--实心节点(不包含子节点)-->
                                <li class="layui-timeline-item">
                                    <i class="layui-icon main">  </i>
                                    <div class="layui-timeline-content layui-text">
                                        <div class="left clearfix">
                                            <p class="main-outline fl">一般贸易申报(已放行)</p>
                                            <p class="time fr">08/30<br>17:13</p>
                                        </div>
                                        <h3 class="layui-timeline-title">一般贸易申报(已放行)<span class="fr step-time">2019-08-30 17:13</span></h3>
                                    </div>
                                </li>
                                <!--实心节点(不包含子节点)-->
                                <li class="layui-timeline-item">
                                    <i class="layui-icon main">  </i>
                                    <div class="layui-timeline-content layui-text">
                                        <div class="left clearfix">
                                            <p class="main-outline fl">货物已签收</p>
                                            <p class="time fr">08/27<br>23:00</p>
                                        </div>
                                        <h3 class="layui-timeline-title">货物已签收<span class="fr step-time">2019-08-27 23:00</span></h3>
                                    </div>
                                </li>
                                <!--实心节点(不包含子节点)-->
                                <li class="layui-timeline-item">
                                    <i class="layui-icon main">  </i>
                                    <div class="layui-timeline-content layui-text">
                                        <div class="left clearfix">
                                            <p class="main-outline fl">货物已出仓</p>
                                            <p class="time fr">08/27<br>18:25</p>
                                        </div>
                                        <h3 class="layui-timeline-title">货物已出仓<span class="fr step-time">2019-08-27 18:25</span></h3>
                                    </div>
                                </li>
                                <!--实心节点(不包含子节点)-->
                                <li class="layui-timeline-item">
                                    <i class="layui-icon main">  </i>
                                    <div class="layui-timeline-content layui-text">
                                        <div class="left clearfix">
                                            <p class="main-outline fl">打包完成</p>
                                            <p class="time fr">08/27<br>16:25</p>
                                        </div>
                                        <h3 class="layui-timeline-title">打包完成<span class="fr step-time">2019-08-27 16:25</span></h3>
                                    </div>
                                </li>
                                <!--实心节点(不包含子节点)-->
                                <li class="layui-timeline-item">
                                    <i class="layui-icon main">  </i>
                                    <div class="layui-timeline-content layui-text">
                                        <div class="left clearfix">
                                            <p class="main-outline fl">拣货完成</p>
                                            <p class="time fr">08/27<br>16:17</p>
                                        </div>
                                        <h3 class="layui-timeline-title">拣货完成<span class="fr step-time">2019-08-27 16:17</span></h3>
                                    </div>
                                </li>
                                <!--实心节点(不包含子节点)-->
                                <li class="layui-timeline-item">
                                    <i class="layui-icon main">  </i>
                                    <div class="layui-timeline-content layui-text">
                                        <div class="left clearfix">
                                            <p class="main-outline fl">仓库已接单</p>
                                            <p class="time fr">08/26<br>21:00</p>
                                        </div>
                                        <h3 class="layui-timeline-title">仓库已接单<span class="fr step-time">2019-08-26 21:00</span></h3>
                                    </div>
                                </li>
                                <!--实心节点(不包含子节点)-->
                                <li class="layui-timeline-item">
                                    <i class="layui-icon main">  </i>
                                    <div class="layui-timeline-content layui-text">
                                        <div class="left clearfix">
                                            <p class="main-outline fl">订单已受理</p>
                                            <p class="time fr">08/26<br>20:09</p>
                                        </div>
                                        <h3 class="layui-timeline-title">订单已受理<span class="fr step-time">2019-08-26 20:09</span></h3>
                                    </div>
                                </li>
                </ul>
        </div>
    </div>
</div>

<div class="container ldsd-order-info">
    <h2>订单信息</h2>

    <div class="info-item">
        <div class="layui-row">
            <div class="layui-col-xs6 txt"><span>系统订单号：</span>BWO1908230026</div>
            <div class="layui-col-xs6 txt"><span>订单日期：</span>2019-8-26</div>
            <div class="layui-col-xs6 txt"><span>客户单号：</span>585104</div>
            <div class="layui-col-xs6 txt"><span>快递单号：</span></div>
        </div>
    </div>
    <div class="info-item">
        <div class="layui-row">
            <div class="layui-col-xs6 txt"><span>总数量：</span>21,000</div>
            <div class="layui-col-xs6 txt"><span>总箱数：</span>1</div>
            <div class="layui-col-xs6 txt"><span>总毛重：</span>6.7 KG</div>
            <div class="layui-col-xs6 txt"><span>总净重：</span>6.68 KG</div>
        </div>
    </div>
    <div class="info-item">
        <div class="layui-row">
            <div class="layui-col-xs6 txt"><span>收货联系人：</span>肖朴林</div>
            <div class="layui-col-xs6 txt"><span>收货联系手机：</span>13672728694</div>
            <div class="layui-col-xs6 txt"><span>收货联系电话：</span></div>
            <div class="layui-col-xs6 txt"><span>收货点：</span>东莞市路迪森宝供应链管理有限公司</div>
            <div class="layui-col-xs6 txt"><span>收货地址：</span>广东省 东莞市  长安镇上沙社区建安路安力科技园二期A区 1-4厂房</div>
        </div>
    </div>

    <div class="require">
        <span>客户要求：</span>保税转普仓，不拆包，DC一年内
    </div>
        <div class="total">
            <span class="currency">币制：USD</span>
            <span class="total-money">总价合计：</span><em>483.00</em>
        </div>
</div>

<div class="container goods-detail">
    <div class="clearfix">
        <h2 class="fl">货物明细</h2>
    </div>
    <table class="layui-hide" lay-skin="line" id="goods-order-list"></table><div class="layui-form layui-border-box layui-table-view" lay-filter="LAY-table-15" style=" "><div class="layui-table-box"><div class="layui-table-header"><table cellspacing="0" cellpadding="0" border="0" class="layui-table"><thead><tr><th data-field="number"><div class="layui-table-cell laytable-cell-15-number"><span>序号</span></div></th><th data-field="model"><div class="layui-table-cell laytable-cell-15-model"><span>规格型号</span></div></th><th data-field="brand"><div class="layui-table-cell laytable-cell-15-brand"><span>品牌</span></div></th><th data-field="goodsName"><div class="layui-table-cell laytable-cell-15-goodsName"><span>商品名称</span></div></th><th data-field="unit"><div class="layui-table-cell laytable-cell-15-unit"><span>单位</span></div></th><th data-field="quantity"><div class="layui-table-cell laytable-cell-15-quantity"><span>数量</span></div></th><th data-field="priceView"><div class="layui-table-cell laytable-cell-15-priceView" align="right"><span>单价</span></div></th><th data-field="amountView"><div class="layui-table-cell laytable-cell-15-amountView" align="right"><span>总价</span></div></th><th data-field="inCurrencyAndPrice"><div class="layui-table-cell laytable-cell-15-inCurrencyAndPrice"><span>入仓币种及单价</span></div></th><th data-field="supplyName"><div class="layui-table-cell laytable-cell-15-supplyName"><span>供应商</span></div></th><th data-field="goodsPlace"><div class="layui-table-cell laytable-cell-15-goodsPlace"><span>原产地</span></div></th><th data-field="boxQty"><div class="layui-table-cell laytable-cell-15-boxQty"><span>箱数</span></div></th><th data-field="goodsNumber"><div class="layui-table-cell laytable-cell-15-goodsNumber"><span>HS编码</span></div></th><th data-field="c_1"><div class="layui-table-cell laytable-cell-15-c_1"><span>Date Code</span></div></th><th data-field="c_40"><div class="layui-table-cell laytable-cell-15-c_40"><span>CPN</span></div></th><th data-field="c_50"><div class="layui-table-cell laytable-cell-15-c_50"><span>Cust Po</span></div></th><th data-field="c_80"><div class="layui-table-cell laytable-cell-15-c_80"><span>客户品名</span></div></th><th data-field="c_180"><div class="layui-table-cell laytable-cell-15-c_180"><span>客户厂牌</span></div></th><th data-field="c_225"><div class="layui-table-cell laytable-cell-15-c_225"><span>客户批次要求</span></div></th><th data-field="c_230"><div class="layui-table-cell laytable-cell-15-c_230"><span>客户物料描述</span></div></th><th data-field="c_240"><div class="layui-table-cell laytable-cell-15-c_240"><span>客户物料描述1</span></div></th><th data-field="c_250"><div class="layui-table-cell laytable-cell-15-c_250"><span>客户物料描述2</span></div></th><th data-field="c_260"><div class="layui-table-cell laytable-cell-15-c_260"><span>客户物料描述3</span></div></th><th data-field="c_270"><div class="layui-table-cell laytable-cell-15-c_270"><span>客户物料描述4</span></div></th><th data-field="c_280"><div class="layui-table-cell laytable-cell-15-c_280"><span>客户物料描述5</span></div></th><th data-field="c_300"><div class="layui-table-cell laytable-cell-15-c_300"><span>物料小类</span></div></th><th data-field="c_310"><div class="layui-table-cell laytable-cell-15-c_310"><span>客户型号</span></div></th><th data-field="c_330"><div class="layui-table-cell laytable-cell-15-c_330"><span>客户唯一编码</span></div></th><th data-field="c_350"><div class="layui-table-cell laytable-cell-15-c_350"><span>采购项次(客户订单行号)</span></div></th><th data-field="c_360"><div class="layui-table-cell laytable-cell-15-c_360"><span>客户单位</span></div></th><th data-field="c_370"><div class="layui-table-cell laytable-cell-15-c_370"><span>最小包装数量</span></div></th><th data-field="c_4900"><div class="layui-table-cell laytable-cell-15-c_4900"><span>客户产品编码</span></div></th></tr></thead></table></div><div class="layui-table-body layui-table-main"><table cellspacing="0" cellpadding="0" border="0" class="layui-table"><tbody><tr data-index="0"><td data-field="number"><div class="layui-table-cell laytable-cell-15-number">1</div></td><td data-field="model"><div class="layui-table-cell laytable-cell-15-model">SD15C-01FTG</div></td><td data-field="brand"><div class="layui-table-cell laytable-cell-15-brand">LITTELFUSE</div></td><td data-field="goodsName"><div class="layui-table-cell laytable-cell-15-goodsName">二极管</div></td><td data-field="unit"><div class="layui-table-cell laytable-cell-15-unit">PCS</div></td><td data-field="quantity"><div class="layui-table-cell laytable-cell-15-quantity">21000</div></td><td data-field="priceView" align="right"><div class="layui-table-cell laytable-cell-15-priceView">0.0230</div></td><td data-field="amountView" align="right"><div class="layui-table-cell laytable-cell-15-amountView">483.00</div></td><td data-field="inCurrencyAndPrice"><div class="layui-table-cell laytable-cell-15-inCurrencyAndPrice">USD/0.023</div></td><td data-field="supplyName"><div class="layui-table-cell laytable-cell-15-supplyName">SEKORM  LIMITED</div></td><td data-field="goodsPlace"><div class="layui-table-cell laytable-cell-15-goodsPlace">中国</div></td><td data-field="boxQty"><div class="layui-table-cell laytable-cell-15-boxQty">1</div></td><td data-field="goodsNumber"><div class="layui-table-cell laytable-cell-15-goodsNumber">8541100000</div></td><td data-field="c_1"><div class="layui-table-cell laytable-cell-15-c_1"></div></td><td data-field="c_40"><div class="layui-table-cell laytable-cell-15-c_40">WP70000418</div></td><td data-field="c_50"><div class="layui-table-cell laytable-cell-15-c_50">4500650699</div></td><td data-field="c_80"><div class="layui-table-cell laytable-cell-15-c_80">有源器件</div></td><td data-field="c_180"><div class="layui-table-cell laytable-cell-15-c_180">LITTELFUSE</div></td><td data-field="c_225"><div class="layui-table-cell laytable-cell-15-c_225">A10</div></td><td data-field="c_230"><div class="layui-table-cell laytable-cell-15-c_230"></div></td><td data-field="c_240"><div class="layui-table-cell laytable-cell-15-c_240"></div></td><td data-field="c_250"><div class="layui-table-cell laytable-cell-15-c_250"></div></td><td data-field="c_260"><div class="layui-table-cell laytable-cell-15-c_260"></div></td><td data-field="c_270"><div class="layui-table-cell laytable-cell-15-c_270"></div></td><td data-field="c_280"><div class="layui-table-cell laytable-cell-15-c_280"></div></td><td data-field="c_300"><div class="layui-table-cell laytable-cell-15-c_300">二极管</div></td><td data-field="c_310"><div class="layui-table-cell laytable-cell-15-c_310">SD15C-01FTG</div></td><td data-field="c_330"><div class="layui-table-cell laytable-cell-15-c_330"></div></td><td data-field="c_350"><div class="layui-table-cell laytable-cell-15-c_350"></div></td><td data-field="c_360"><div class="layui-table-cell laytable-cell-15-c_360">EA</div></td><td data-field="c_370"><div class="layui-table-cell laytable-cell-15-c_370">3000</div></td><td data-field="c_4900"><div class="layui-table-cell laytable-cell-15-c_4900">162061</div></td></tr></tbody></table></div><div class="layui-table-fixed layui-table-fixed-l"><div class="layui-table-header"><table cellspacing="0" cellpadding="0" border="0" class="layui-table"><thead><tr><th data-field="number"><div class="layui-table-cell laytable-cell-15-number"><span>序号</span></div></th><th data-field="model"><div class="layui-table-cell laytable-cell-15-model"><span>规格型号</span></div></th><th data-field="brand"><div class="layui-table-cell laytable-cell-15-brand"><span>品牌</span></div></th></tr></thead></table></div><div class="layui-table-body" style="height: auto;"><table cellspacing="0" cellpadding="0" border="0" class="layui-table"><tbody><tr data-index="0"><td data-field="number"><div class="layui-table-cell laytable-cell-15-number">1</div></td><td data-field="model"><div class="layui-table-cell laytable-cell-15-model">SD15C-01FTG</div></td><td data-field="brand"><div class="layui-table-cell laytable-cell-15-brand">LITTELFUSE</div></td></tr></tbody></table></div></div></div><div class="layui-table-page"><div id="layui-table-page15"><div class="layui-box layui-laypage layui-laypage-goods-page" id="layui-laypage-7"><a href="javascript:;" class="layui-laypage-prev layui-disabled" data-page="0"><i class="layui-icon"></i></a><span class="layui-laypage-curr"><em class="layui-laypage-em"></em><em>1</em></span><a href="javascript:;" class="layui-laypage-next layui-disabled" data-page="2"><i class="layui-icon"></i></a></div></div></div><style>.laytable-cell-15-number{ width: 60px; }.laytable-cell-15-model{ width: 225px; }.laytable-cell-15-brand{ width: 200px; }.laytable-cell-15-goodsName{ width: 230px; }.laytable-cell-15-unit{ width: 80px; }.laytable-cell-15-quantity{ width: 130px; }.laytable-cell-15-priceView{ width: 110px; }.laytable-cell-15-amountView{ width: 150px; }.laytable-cell-15-inCurrencyAndPrice{ width: 150px; }.laytable-cell-15-supplyName{ width: 130px; }.laytable-cell-15-goodsPlace{ width: 120px; }.laytable-cell-15-boxQty{ width: 130px; }.laytable-cell-15-goodsNumber{ width: 150px; }.laytable-cell-15-c_1{ width: 120px; }.laytable-cell-15-c_40{ width: 120px; }.laytable-cell-15-c_50{ width: 120px; }.laytable-cell-15-c_80{ width: 120px; }.laytable-cell-15-c_180{ width: 120px; }.laytable-cell-15-c_225{ width: 120px; }.laytable-cell-15-c_230{ width: 120px; }.laytable-cell-15-c_240{ width: 120px; }.laytable-cell-15-c_250{ width: 120px; }.laytable-cell-15-c_260{ width: 120px; }.laytable-cell-15-c_270{ width: 120px; }.laytable-cell-15-c_280{ width: 120px; }.laytable-cell-15-c_300{ width: 120px; }.laytable-cell-15-c_310{ width: 120px; }.laytable-cell-15-c_330{ width: 120px; }.laytable-cell-15-c_350{ width: 120px; }.laytable-cell-15-c_360{ width: 120px; }.laytable-cell-15-c_370{ width: 120px; }.laytable-cell-15-c_4900{ width: 120px; }</style></div>
</div>

<div class="container ldsd-order-download">
    <div class="tit clearfix">
        <h2 class="fl">附件下载</h2>
    </div>
    <div class="list-content">
        <ul id="downloadList" class="list" style="display: block;">

        <li><p class="type fl"><img src="/static/images/order/icon_file03.svg" alt=""></p><p class="tit">585104签收单.pdf</p><p class="time">2019-9-16</p><a href="javascript:;" onclick="downloadFile('/server/scmApi/view//wms_upload/2019-09-16/585104签收单.pdf')"></a></li><li><p class="type fl"><img src="/static/images/order/icon_file03.svg" alt=""></p><p class="tit">QD521319I000020537_2.pdf</p><p class="time">2019-8-27</p><a href="javascript:;" onclick="downloadFile('/server/scmApi/view///customs_wms_files/LS1067/upload/10/795/1149686174997101644//QD521319I000020537_2.pdf')"></a></li><li><p class="type fl"><img src="/static/images/order/icon_file03.svg" alt=""></p><p class="tit">QD521319I000020537_1.pdf</p><p class="time">2019-8-27</p><a href="javascript:;" onclick="downloadFile('/server/scmApi/view///customs_wms_files/LS1067/upload/755/981/1149572271596837039//QD521319I000020537_1.pdf')"></a></li></ul>
    </div>
</div>
</div>



<link rel="stylesheet" href="/static/css/page.css">
<script>
    //初始化
    $(function () {
        bindtable();
        initCss();
        initDownloadFile();
    });

    function bindtable() {
        var bondedTaxOutItems = [{"amount":483.00,"amountView":"483.00","bgAmount":483.00,"bgPrice":0.02300000,"bondedTaxInItemId":"","bondedTaxOutId":"ee40fbc8-21fb-46a3-a8d0-1b1fb2505877","boxQty":1,"brand":"LITTELFUSE","countAmtExchangeRate":0.000000,"country":2030,"createBy":"admin","createByName":"admin","createTime":"2019-08-23 12:00:15","customerGoodsCode":"","customerGoodsInfoItemId":"","customerGoodsQty":0.0000,"deleted":false,"goodsId":"e4325cd3-7549-4fe0-8e71-5001c3983c5d","goodsName":"二极管","goodsNumber":"8541100000","goodsPlace":"中国","id":"c1c82625-c097-45eb-9f6c-1cfb0387e1a2","inBgBillNo":"QD521319I000020537","inCurrencyAndPrice":"USD/0.023","isAuto":false,"model":"SD15C-01FTG","netWeight":6.6800,"number":1,"price":0.0230,"priceView":"0.0230","quantity":21000.0000,"spec":"4|3|LITTELFUSE牌|SD15C-01FTG型|||片式,15V,由单个半导体元件构成;用于电子产品","stockCurrency":1316,"stockPrice":0.02300000,"supplyId":"e50ea13c-ea35-4d16-b591-b44df085826c","supplyName":"SEKORM  LIMITED","unit":"PCS","updateBy":"admin","updateByName":"admin","updateTime":"2019-08-27 17:04:16","version":12,"weight":6.700}];
        var bondedTaxOutItemColMap = {"c1c82625-c097-45eb-9f6c-1cfb0387e1a2":[{"bondedTaxOutCol":300,"bondedTaxOutColName":"物料小类","bondedTaxOutId":"ee40fbc8-21fb-46a3-a8d0-1b1fb2505877","bondedTaxOutItemId":"c1c82625-c097-45eb-9f6c-1cfb0387e1a2","colValue":"二极管","createBy":"ld19050505","createByName":"张丹妮","createTime":"2019-08-26 20:09:39","deleted":false,"id":"0b27b95b-ec7e-4734-9bd8-8db471be814e","updateBy":"ld17060214","updateByName":"卢启飞","updateTime":"2019-08-26 21:00:19","version":3},{"bondedTaxOutCol":225,"bondedTaxOutColName":"客户批次要求","bondedTaxOutId":"ee40fbc8-21fb-46a3-a8d0-1b1fb2505877","bondedTaxOutItemId":"c1c82625-c097-45eb-9f6c-1cfb0387e1a2","colValue":"A10","createBy":"ld19050505","createByName":"张丹妮","createTime":"2019-08-26 20:09:39","deleted":false,"id":"0e0ce768-ad0d-415e-94bd-67050adb9099","updateBy":"ld17060214","updateByName":"卢启飞","updateTime":"2019-08-26 21:00:19","version":3},{"bondedTaxOutCol":280,"bondedTaxOutColName":"客户物料描述5","bondedTaxOutId":"ee40fbc8-21fb-46a3-a8d0-1b1fb2505877","bondedTaxOutItemId":"c1c82625-c097-45eb-9f6c-1cfb0387e1a2","colValue":"","createBy":"ld19050505","createByName":"张丹妮","createTime":"2019-08-26 20:09:39","deleted":false,"id":"10ef6e43-7288-4bb9-98ab-9dba06139769","updateBy":"ld17060214","updateByName":"卢启飞","updateTime":"2019-08-26 21:00:19","version":3},{"bondedTaxOutCol":1,"bondedTaxOutColName":"Date Code","bondedTaxOutId":"ee40fbc8-21fb-46a3-a8d0-1b1fb2505877","bondedTaxOutItemId":"c1c82625-c097-45eb-9f6c-1cfb0387e1a2","colValue":"","createBy":"ld19050505","createByName":"张丹妮","createTime":"2019-08-26 20:09:39","deleted":false,"id":"186dbaf5-e277-48da-bcf8-720a98b3e74e","updateBy":"ld17060214","updateByName":"卢启飞","updateTime":"2019-08-26 21:00:19","version":3},{"bondedTaxOutCol":250,"bondedTaxOutColName":"客户物料描述2","bondedTaxOutId":"ee40fbc8-21fb-46a3-a8d0-1b1fb2505877","bondedTaxOutItemId":"c1c82625-c097-45eb-9f6c-1cfb0387e1a2","colValue":"","createBy":"ld19050505","createByName":"张丹妮","createTime":"2019-08-26 20:09:39","deleted":false,"id":"1ba68ad5-744f-44d7-b2ff-939124bbdaa7","updateBy":"ld17060214","updateByName":"卢启飞","updateTime":"2019-08-26 21:00:19","version":3},{"bondedTaxOutCol":330,"bondedTaxOutColName":"客户唯一编码","bondedTaxOutId":"ee40fbc8-21fb-46a3-a8d0-1b1fb2505877","bondedTaxOutItemId":"c1c82625-c097-45eb-9f6c-1cfb0387e1a2","colValue":"","createBy":"ld19050505","createByName":"张丹妮","createTime":"2019-08-26 20:09:39","deleted":false,"id":"25326d10-a45e-4411-a5ca-0dde74f9ca04","updateBy":"ld17060214","updateByName":"卢启飞","updateTime":"2019-08-26 21:00:19","version":3},{"bondedTaxOutCol":180,"bondedTaxOutColName":"客户厂牌","bondedTaxOutId":"ee40fbc8-21fb-46a3-a8d0-1b1fb2505877","bondedTaxOutItemId":"c1c82625-c097-45eb-9f6c-1cfb0387e1a2","colValue":"LITTELFUSE","createBy":"ld19050505","createByName":"张丹妮","createTime":"2019-08-26 20:09:39","deleted":false,"id":"36e32b6b-3410-472d-b7fe-5abfc8bbe7b6","updateBy":"ld17060214","updateByName":"卢启飞","updateTime":"2019-08-26 21:00:19","version":3},{"bondedTaxOutCol":350,"bondedTaxOutColName":"采购项次(客户订单行号)","bondedTaxOutId":"ee40fbc8-21fb-46a3-a8d0-1b1fb2505877","bondedTaxOutItemId":"c1c82625-c097-45eb-9f6c-1cfb0387e1a2","colValue":"","createBy":"ld19050505","createByName":"张丹妮","createTime":"2019-08-26 20:09:39","deleted":false,"id":"42de4f4f-2fcc-4ad2-9046-ac54e5b3685c","updateBy":"ld17060214","updateByName":"卢启飞","updateTime":"2019-08-26 21:00:19","version":3},{"bondedTaxOutCol":80,"bondedTaxOutColName":"客户品名","bondedTaxOutId":"ee40fbc8-21fb-46a3-a8d0-1b1fb2505877","bondedTaxOutItemId":"c1c82625-c097-45eb-9f6c-1cfb0387e1a2","colValue":"有源器件","createBy":"ld19050505","createByName":"张丹妮","createTime":"2019-08-26 20:09:39","deleted":false,"id":"5f7c2044-b11f-4d0e-8641-64f3e5b5f96b","updateBy":"ld17060214","updateByName":"卢启飞","updateTime":"2019-08-26 21:00:19","version":3},{"bondedTaxOutCol":310,"bondedTaxOutColName":"客户型号","bondedTaxOutId":"ee40fbc8-21fb-46a3-a8d0-1b1fb2505877","bondedTaxOutItemId":"c1c82625-c097-45eb-9f6c-1cfb0387e1a2","colValue":"SD15C-01FTG","createBy":"ld19050505","createByName":"张丹妮","createTime":"2019-08-26 20:09:39","deleted":false,"id":"651b9e9b-7fcc-45ee-9e31-74c4f3d3ce32","updateBy":"ld17060214","updateByName":"卢启飞","updateTime":"2019-08-26 21:00:19","version":3},{"bondedTaxOutCol":370,"bondedTaxOutColName":"最小包装数量","bondedTaxOutId":"ee40fbc8-21fb-46a3-a8d0-1b1fb2505877","bondedTaxOutItemId":"c1c82625-c097-45eb-9f6c-1cfb0387e1a2","colValue":"3000","createBy":"ld19050505","createByName":"张丹妮","createTime":"2019-08-26 20:09:39","deleted":false,"id":"698b21f4-5944-4ead-ac47-6f8f72c43b9e","updateBy":"ld17060214","updateByName":"卢启飞","updateTime":"2019-08-26 21:00:19","version":3},{"bondedTaxOutCol":40,"bondedTaxOutColName":"CPN","bondedTaxOutId":"ee40fbc8-21fb-46a3-a8d0-1b1fb2505877","bondedTaxOutItemId":"c1c82625-c097-45eb-9f6c-1cfb0387e1a2","colValue":"WP70000418","createBy":"ld19050505","createByName":"张丹妮","createTime":"2019-08-26 20:09:39","deleted":false,"id":"71015045-2b5d-4c69-8676-23732dfb3ea1","updateBy":"ld17060214","updateByName":"卢启飞","updateTime":"2019-08-26 21:00:19","version":3},{"bondedTaxOutCol":260,"bondedTaxOutColName":"客户物料描述3","bondedTaxOutId":"ee40fbc8-21fb-46a3-a8d0-1b1fb2505877","bondedTaxOutItemId":"c1c82625-c097-45eb-9f6c-1cfb0387e1a2","colValue":"","createBy":"ld19050505","createByName":"张丹妮","createTime":"2019-08-26 20:09:39","deleted":false,"id":"865270f6-b1da-4162-a5c8-0ec46e6c640d","updateBy":"ld17060214","updateByName":"卢启飞","updateTime":"2019-08-26 21:00:19","version":3},{"bondedTaxOutCol":4900,"bondedTaxOutColName":"客户产品编码","bondedTaxOutId":"ee40fbc8-21fb-46a3-a8d0-1b1fb2505877","bondedTaxOutItemId":"c1c82625-c097-45eb-9f6c-1cfb0387e1a2","colValue":"162061","createBy":"ld19050505","createByName":"张丹妮","createTime":"2019-08-26 20:09:39","deleted":false,"id":"9c4a834a-9473-4159-a2f5-d4eaf2dce606","updateBy":"ld17060214","updateByName":"卢启飞","updateTime":"2019-08-26 21:00:19","version":3},{"bondedTaxOutCol":230,"bondedTaxOutColName":"客户物料描述","bondedTaxOutId":"ee40fbc8-21fb-46a3-a8d0-1b1fb2505877","bondedTaxOutItemId":"c1c82625-c097-45eb-9f6c-1cfb0387e1a2","colValue":"","createBy":"ld19050505","createByName":"张丹妮","createTime":"2019-08-26 20:09:39","deleted":false,"id":"a087339c-4586-4d88-8953-d14b31615c17","updateBy":"ld17060214","updateByName":"卢启飞","updateTime":"2019-08-26 21:00:19","version":3},{"bondedTaxOutCol":360,"bondedTaxOutColName":"客户单位","bondedTaxOutId":"ee40fbc8-21fb-46a3-a8d0-1b1fb2505877","bondedTaxOutItemId":"c1c82625-c097-45eb-9f6c-1cfb0387e1a2","colValue":"EA","createBy":"ld19050505","createByName":"张丹妮","createTime":"2019-08-26 20:09:39","deleted":false,"id":"ba10db46-6836-4bb0-86f9-8d10f58d5f02","updateBy":"ld17060214","updateByName":"卢启飞","updateTime":"2019-08-26 21:00:19","version":3},{"bondedTaxOutCol":50,"bondedTaxOutColName":"Cust Po","bondedTaxOutId":"ee40fbc8-21fb-46a3-a8d0-1b1fb2505877","bondedTaxOutItemId":"c1c82625-c097-45eb-9f6c-1cfb0387e1a2","colValue":"4500650699","createBy":"ld19050505","createByName":"张丹妮","createTime":"2019-08-26 20:09:39","deleted":false,"id":"d273bb0d-9e36-4a20-985c-1da02101af77","updateBy":"ld17060214","updateByName":"卢启飞","updateTime":"2019-08-26 21:00:19","version":3},{"bondedTaxOutCol":240,"bondedTaxOutColName":"客户物料描述1","bondedTaxOutId":"ee40fbc8-21fb-46a3-a8d0-1b1fb2505877","bondedTaxOutItemId":"c1c82625-c097-45eb-9f6c-1cfb0387e1a2","colValue":"","createBy":"ld19050505","createByName":"张丹妮","createTime":"2019-08-26 20:09:39","deleted":false,"id":"d6bd1621-2218-435b-b9ed-e44e550f87e8","updateBy":"ld17060214","updateByName":"卢启飞","updateTime":"2019-08-26 21:00:19","version":3},{"bondedTaxOutCol":270,"bondedTaxOutColName":"客户物料描述4","bondedTaxOutId":"ee40fbc8-21fb-46a3-a8d0-1b1fb2505877","bondedTaxOutItemId":"c1c82625-c097-45eb-9f6c-1cfb0387e1a2","colValue":"","createBy":"ld19050505","createByName":"张丹妮","createTime":"2019-08-26 20:09:39","deleted":false,"id":"f33280ce-6f27-4683-b808-31872f0c6c9e","updateBy":"ld17060214","updateByName":"卢启飞","updateTime":"2019-08-26 21:00:19","version":3}]};
        $(bondedTaxOutItems).each(function (index, element) {
            $(bondedTaxOutItemColMap[element.id]).each(function (_index, _element) {
                element['c_' + _element.bondedTaxOutCol] = _element.colValue;
            })
        })
        layui.use(['layer', 'element', 'table'], function () {
            var layer = layui.layer,
                element = layui.element,
                table = layui.table;

            element.render();
            table.render();

            var thead = [ //标题栏
                {field: 'number', title: '序号', width: 60, fixed: 'left'},
                {field: 'model', title: '规格型号', width: 225, fixed: 'left'},
                {field: 'brand', title: '品牌', width: 200, fixed: 'left'},
                {field: 'goodsName', title: '商品名称', width: 230},
                {field: 'unit', title: '单位', width: 80},
                {field: 'quantity', title: '数量', width: 130},
                {field: 'priceView', align:'right', title: '单价', width: 110},
                {field: 'amountView', align:'right', title: '总价', width: 150},
                {field: 'inCurrencyAndPrice', title: '入仓币种及单价', width: 150},
                {field: 'supplyName', title: '供应商', width: 130},
                {field: 'goodsPlace', title: '原产地', width: 120},
                {field: 'boxQty', title: '箱数', width: 130},
                {field: 'goodsNumber', title: 'HS编码', width: 150}
                ,{field: 'c_1', title: 'Date Code', width: 120}
                ,{field: 'c_40', title: 'CPN', width: 120}
                ,{field: 'c_50', title: 'Cust Po', width: 120}
                ,{field: 'c_80', title: '客户品名', width: 120}
                ,{field: 'c_180', title: '客户厂牌', width: 120}
                ,{field: 'c_225', title: '客户批次要求', width: 120}
                ,{field: 'c_230', title: '客户物料描述', width: 120}
                ,{field: 'c_240', title: '客户物料描述1', width: 120}
                ,{field: 'c_250', title: '客户物料描述2', width: 120}
                ,{field: 'c_260', title: '客户物料描述3', width: 120}
                ,{field: 'c_270', title: '客户物料描述4', width: 120}
                ,{field: 'c_280', title: '客户物料描述5', width: 120}
                ,{field: 'c_300', title: '物料小类', width: 120}
                ,{field: 'c_310', title: '客户型号', width: 120}
                ,{field: 'c_330', title: '客户唯一编码', width: 120}
                ,{field: 'c_350', title: '采购项次(客户订单行号)', width: 120}
                ,{field: 'c_360', title: '客户单位', width: 120}
                ,{field: 'c_370', title: '最小包装数量', width: 120}
                ,{field: 'c_4900', title: '客户产品编码', width: 120}
            ];

            if('0' == '1' ){

                thead = [
                    {field: 'number', title: '序号', width: 60, fixed: 'left'},
                    {field: 'model', title: '规格型号', width: 225, fixed: 'left'},
                    {field: 'brand', title: '品牌', width: 200, fixed: 'left'},
                    {field: 'goodsName', title: '商品名称', width: 230},
                    {field: 'unit', title: '单位', width: 80},
                    {field: 'quantity', title: '数量', width: 130},
                    {field: 'supplyName', title: '供应商', width: 130},
                    {field: 'goodsPlace', title: '原产地', width: 120},
                    {field: 'boxQty', title: '箱数', width: 130},
                    {field: 'goodsNumber', title: 'HS编码', width: 150}
                            ,{field: 'c_1', title: 'Date Code', width: 120}
                            ,{field: 'c_40', title: 'CPN', width: 120}
                            ,{field: 'c_50', title: 'Cust Po', width: 120}
                            ,{field: 'c_80', title: '客户品名', width: 120}
                            ,{field: 'c_180', title: '客户厂牌', width: 120}
                            ,{field: 'c_225', title: '客户批次要求', width: 120}
                            ,{field: 'c_230', title: '客户物料描述', width: 120}
                            ,{field: 'c_240', title: '客户物料描述1', width: 120}
                            ,{field: 'c_250', title: '客户物料描述2', width: 120}
                            ,{field: 'c_260', title: '客户物料描述3', width: 120}
                            ,{field: 'c_270', title: '客户物料描述4', width: 120}
                            ,{field: 'c_280', title: '客户物料描述5', width: 120}
                            ,{field: 'c_300', title: '物料小类', width: 120}
                            ,{field: 'c_310', title: '客户型号', width: 120}
                            ,{field: 'c_330', title: '客户唯一编码', width: 120}
                            ,{field: 'c_350', title: '采购项次(客户订单行号)', width: 120}
                            ,{field: 'c_360', title: '客户单位', width: 120}
                            ,{field: 'c_370', title: '最小包装数量', width: 120}
                            ,{field: 'c_4900', title: '客户产品编码', width: 120}
                ];
            };

            table.render({
                elem: '#goods-order-list'
                ,data: bondedTaxOutItems
                ,page: { //支持传入 laypage 组件的所有参数（某些参数除外，如：jump/elem） - 详见文档
                    layout: ['prev', 'page', 'next'] //自定义分页布局
                    //,curr: 5 //设定初始在第 5 页
                    , groups: 3 //只显示 1 个连续页码
                    , first: 1 //不显示首页
                    , last: 100 //不显示尾页
                    , theme: 'goods-page'
                }
                ,cols: [thead]
                ,done: function (res, curr, count) {
                }
//                , skin: 'line' //行边框风格
            });
        });
    }

    function initCss() {

        $('.orderTitle li').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            var index = $(this).index();
            var top = null;
            if (index == 0) {
                top = $('.ldsd-timeline').offset().top - 220;
            } else if (index == 1) {
                top = $('.ldsd-order-info').offset().top - 220;
            } else if (index == 2) {
                top = $('.goods-detail').offset().top - 220;
            }
            $("html,body").animate({scrollTop: top}, 300);
        });
    }

    function initDownloadFile() {
            var fileType = downLoadType('585104签收单.pdf');
            var fileUrl = '/wms_upload/2019-09-16/585104签收单.pdf';
            addFileElement(fileType, '585104签收单.pdf', '2019-9-16', fileUrl);
            var fileType = downLoadType('QD521319I000020537_2.pdf');
            var fileUrl = '//customs_wms_files/LS1067/upload/10/795/1149686174997101644//QD521319I000020537_2.pdf';
            addFileElement(fileType, 'QD521319I000020537_2.pdf', '2019-8-27', fileUrl);
            var fileType = downLoadType('QD521319I000020537_1.pdf');
            var fileUrl = '//customs_wms_files/LS1067/upload/755/981/1149572271596837039//QD521319I000020537_1.pdf';
            addFileElement(fileType, 'QD521319I000020537_1.pdf', '2019-8-27', fileUrl);
    }
</script>
<script type="text/javascript">
    /*function defaultKeyUp(e) {
        var currKey = 0, e = e || event;
        currKey = e.keyCode || e.which || e.charCode;
        //回车默认事件
        if (currKey == 13) {
            var enter;

//            var eff_form = $(e.target).parents("form[id^='eff']");
//            if (eff_form.length > 0) {
//                enter = eff_form.find("[onclick^='submit']")[0];
//            }

            var ff_form = $(e.target).parents("form[id^='ff']");
            if (ff_form.length > 0) {
                enter = ff_form.find("[onclick^='search']")[0];
            }
            if (enter) {
                enter.click();
                return false;
            }
        }
    }*/
    //回车默认事件
    /*document.onkeyup = defaultKeyUp;*/

    //处理键盘事件 禁止后退键（Backspace）密码或单行、多行文本框除外
//    function banBackSpace(e) {
//        var ev = e || window.event;//获取event对象
//        var obj = ev.target || ev.srcElement;//获取事件源
//        var t = obj.type || obj.getAttribute('type');//获取事件源类型
//        //获取作为判断条件的事件类型
//        var vReadOnly = obj.getAttribute('readonly');
//        var vEnabled = obj.getAttribute('enabled');
//        //处理null值情况
//        vReadOnly = (vReadOnly == null) ? false : vReadOnly;
//        vEnabled = (vEnabled == null) ? true : vEnabled;
//        //当敲Backspace键时，事件源类型为密码或单行、多行文本的，
//        //并且readonly属性为true或enabled属性为false的，则退格键失效
//        var flag1 = (ev.keyCode == 8 && (t == "password" || t == "text" || t == "textarea" || t == "number")
//        && (vReadOnly == true || vEnabled != true)) ? true : false;
//        //当敲Backspace键时，事件源类型非密码或单行、多行文本的，则退格键失效
//        var flag2 = (ev.keyCode == 8 && t != "password" && t != "text" && t != "textarea" && t != "number") ? true : false;
//        //判断
//        if (flag2) {
//            return false;
//        }
//        if (flag1) {
//            return false;
//        }
//    }
//
//    //禁止后退键 作用于Firefox、Opera
//    document.onkeypress = banBackSpace;
//    //禁止后退键  作用于IE、Chrome
//    document.onkeydown = banBackSpace;
</script>

</div>


<div class="jur-del-dialog ldsd-depot-dialog" style="display: none;">
    <div class="ldsd-dialog">
        <h2>切换仓库 <img src="/static/images/icon_cross.svg" alt="" class="layui-layer-close"></h2>

        <div class="bd layui-form">
            <p><input type="checkbox" name="delete" value="1" title="东莞长安保税仓" lay-skin="primary" lay-filter="depot" checked=""><div class="layui-unselect layui-form-checkbox layui-form-checked" lay-skin="primary"><span>东莞长安保税仓</span><i class="layui-icon layui-icon-ok"></i></div></p>

            <p><input type="checkbox" name="delete" value="10" title="东莞长安普通仓" lay-skin="primary" lay-filter="depot"><div class="layui-unselect layui-form-checkbox" lay-skin="primary"><span>东莞长安普通仓</span><i class="layui-icon layui-icon-ok"></i></div></p>
        </div>
    </div>
</div>

<!--意见反馈弹窗-->
<div class="jur-del-dialog ldsd-feedback-dialog" style="display: none;">
    <div class="ldsd-dialog">
        <h2>意见反馈 <img src="/static/images/icon_cross.svg" alt="" class="layui-layer-close"></h2>

        <div class="bd layui-form">
            <div class="layui-form-item feedback-main">
                <textarea placeholder="请输入内容" class="layui-textarea" id="feedback-content" maxlength="300"></textarea>

                <p class="sugg-num txt-right"><span id="count">0</span>/300</p>

                <div class="layui-upload">
                    <a href="javascript:;" class="layui-btn layui-btn-radius layui-btn-primary layui-btn-sm" id="uploadStart">添加图片</a><input class="layui-upload-file" type="file" accept="image/*" name="file" multiple="">

                    <div class="layui-upload-list">
                        <table class="layui-table" lay-size="sm" lay-skin="nob">
                            <!--<thead>-->
                            <!--<tr><th>文件名</th>-->
                            <!--<th>大小</th>-->
                            <!--<th>状态</th>-->
                            <!--<th>操作</th>-->
                            <!--</tr></thead>-->
                            <tbody id="uploadList"></tbody>
                        </table>
                    </div>
                    <!--<button type="button" class="layui-btn" id="testListAction">开始上传</button>-->
                </div>
            </div>
        </div>
        <!--<div class="ft">-->
        <!--<button class="layui-btn layui-btn-radius layui-layer-close cancel">取消</button>-->
        <!--<button class="layui-btn layui-btn-radius ldsd-btn-primary" id="uploadListAction">确定</button>-->
        <!--</div>-->
        <input href="javascript:" id="uploadListAction" type="button" value="上传" style="display: none">
    </div>
</div>


<script src="/static/js/dragTable.js"></script>
<script src="/static/js/lib/echarts.min.js"></script>

<script>
    function openNewPage(url, type) {
        if (undefined == url || url == '') {
            return;
        }
        var ctx = '/server';
        if (type == 1) {
            window.location.href = '/sys/index#' + url;
            return;
        } else {
            layui.use(['layer'], function () {
                var layer = layui.layer;
                var loading = layer.msg('系统处理中，请稍后...', {shade: 0.3});

                $('#centerMainDiv').load(ctx + url, function () {
                    $("#centerMainDiv").fadeIn(100);
                    layer.close(loading);
                    history.pushState({}, '', ctx + '/index#' + url.replace('/', ''))
                })
            });
        }
    }

    function returnHome() {
        window.location.href = '/server/index';
    }

    function initMenu() {
        $('#mainIndexMenu').append('<li class="layui-nav-item ldsd-user" lay-unselect="">'
                + '<a href="javascript:;">Hi！郑莉</a>'
                + '<dl class="layui-nav-child">'
                + '<dd><a onclick="viewUser()">个人中心</a></dd>'
                + '<dd><a href="/sys/guide/index">新手指引</a></dd>'
//                    + '<dd><a href="./helpCenter.html">帮助中心</a></dd>'
                + '<dd><a onclick="exitLogin()">退出登录</a></dd>'
                + '</dl>'
                + '</li>');

        $('#mainIndexMenu').append('<li class="layui-nav-item ldsd-user depot">'
                        + '<a href="javascript:;"><em>东莞长安保税仓</em> <span class="layui-btn layui-btn-primary layui-btn-radius layui-btn layui-btn-xs ldsd-btn-radius">切换</span></a>'
                        + '</li>'
        );

        $.ajax({
            type: 'post',
            url: '/sys/menu/getMyMenu',
            data: '',
            async: false,
//            beforeSend: function (data) {
//                $.messager.progress({});
//            },
            success: function (data) {
                $(data).each(function (index, element) {
                    var li = '<li class="layui-nav-item active">';
                    li = li + '<a href="javascript:;" onClick="openNewPage(\'' + element.url + '\')" class="nav-item ' + element.icon + '">' + element.menuName + '</a>';

                    if (element.childList != undefined && element.childList.length > 0) {
                        li = li + '<dl class="layui-nav-child">';
                        $(element.childList).each(function (_index, child) {
                            li = li + '<dd><a href="javascript:;" onClick="openNewPage(\'' + child.url + '\',' + child.menuBySys + ')">' + child.menuName + '</a></dd>'
                        })
                        li = li + '</dl>';
                    }
                    li = li + '</li>'
                    $('#mainIndexMenu').append(li);
                });
            },
//            error: function (jqXHR, textStatus, errorThrown) {
//                common.error(jqXHR, textStatus, errorThrown);
//            },
//            complete: function (jqXHR, textStatus, errorThrown) {
//                $.messager.progress('close'); // hide progress bar while submit successfully
//            }
        });
    }

    function exitLogin() {
        window.location.href = '/exitLogin';
    }

    function viewUser() {
        openNewPage('/user/view', 1);
    }

    function bindEvent() {
        layui.use(['form', 'layer'], function () {
            var form = layui.form;
            var layer = layui.layer;
            // 单选一个仓库
            var depot;
            form.on('checkbox(depot)', function (data) {
                // console.log(data.value); //复选框value值，也可以通过data.elem.value得到
                depot = data.value;
                $(data.othis).addClass('layui-form-checked');
                $(data.othis).parent().siblings().find('.layui-form-checkbox').removeClass('layui-form-checked');
                $(data.othis).parent().siblings().find('input[type=checkbox]').prop('checked', false);
            });

            // 切换仓库
            $('.depot span').on('click', function () {
                layer.open({
                    type: 1, title: false //不显示标题栏
                    , content: $('.ldsd-depot-dialog'), area: '400px;', shadeClose: true, offset: '219px', skin: 'my-skin', btn: ['取消', '确定'], btn2: function (index, layero) {
                        switchDepot(depot);
//                        orderStateNum();
                        $('.trend li').first().addClass('active').siblings().removeClass('active');
                        layer.close(index);
                    }
                });
            });
        });
    }

    // 判断哪个仓库
    function switchDepot(depot) {
        depot = depot == null ? '1' : depot;
        var depotName = '东莞长安保税仓';
        if (depot == '10') {
            depotName = '东莞长安普通仓';
        }
//        console.log('仓库：', depot);
        $('.depot em').text(depotName);
//        openNewPage('/switchWarehouse/' + depot);
        $.ajax({
            type: 'post',
            url: '/server/switchWarehouse',
            data: {warehouse:depot},
            async: false,
            success: function (data) {
                returnHome();
            }
        });
    }

    $(function () {
        bindEvent();
//        initMenu();

        var loadUrl = 'mainPageIndex';
        var test = window.location.hash;
        if (undefined != test && test != '') {
            loadUrl = test.replace('#', '');
        }
        $('#centerMainDiv').load('/server/' + loadUrl, function () {
            $("#centerMainDiv").fadeIn(100);
        })
    });
</script><div class="layui-layer-move"></div></body></html>