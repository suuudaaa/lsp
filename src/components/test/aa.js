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
                    <dl class="layui-nav-child">
                            <dd><a href="javascript:;" onclick="openNewPage('/inOrder','10')">入仓订单</a>
                            </dd>
                            <dd><a href="javascript:;" onclick="openNewPage('/outOrder','10')">出仓订单</a>
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
                            <dd class="layui-this"><a href="javascript:;" onclick="openNewPage('/stockReport','10')">库存明细报表</a>
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
    <span class="layui-nav-bar" style="left: 58.5px; top: 55px; width: 0px; opacity: 0;"></span></ul>
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
<div class="container">
    <div class="ldsd-floating">
        <div class="ldsd-breadcrumb">
                <span class="layui-breadcrumb" style="visibility: visible;">
                  <span class="layui-badge-dot layui-bg-black"></span>
                  <a href="javascript:;" onclick="returnHome()">首页</a><span lay-separator="">/</span>
                  <a href="javascript:;">报表中心</a><span lay-separator="">/</span>
                  <a href="javascript:;">库存明细报表</a>
                </span>
        </div>
    </div>
    <div class="ldsd-select" id="tb">
        <form id="stockReportListForm" class="layui-form" action="">
            <div class="input-row show-more">
                <div class="layui-form-item layui-border-tb">
                    <div class="layui-inline">
                        <label class="layui-form-label mal-35">入仓时间</label>
                        <div class="layui-input-inline">
                            <input class="layui-input" id="search_GTE_createTime" name="search_GTE_createTime" placeholder="入仓开始日期" type="text" lay-key="1">
                        </div>
                        <div class="layui-form-mid">-</div>
                        <div class="layui-input-inline">
                            <input class="layui-input" id="search_LTE_createTime" name="search_LTE_createTime" placeholder="入仓结束日期" type="text" lay-key="2">
                        </div>
                        <button id="weekBtn" type="button" class="layui-btn layui-btn-radius ldsd-left layui-btn-green mal50 mar5">最近一周</button>
                        <button id="monthBtn" type="button" class="layui-btn layui-btn-radius ldsd-left layui-btn-green">最近一月</button>
                    </div>
                </div>
                <div class="layui-form-item layui-border-tb">
                    <div class="layui-inline">
                        <label class="layui-form-label mal-35">系统订单号</label>
                        <div class="layui-input-inline">
                            <input name="search_LIKE_sysOrderNo" placeholder="全部系统订单号" class="layui-input" type="text">
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label " style="width: 110px">客户单号</label>
                        <div class="layui-input-inline">
                            <input name="search_LIKE_custOrderNo" placeholder="全部客户单号" class="layui-input" type="text">
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">货主</label>
                        <div class="layui-input-inline" style="width: 280px">
                            <input name="search_LIKE_customerName" placeholder="全部货主" class="layui-input" type="text">
                        </div>
                    </div>
                </div>
                <div class="layui-form-item layui-border-tb" style="display: block;">
                    <div class="layui-inline">
                        <label class="layui-form-label mal-35">规格型号</label>
                        <div class="layui-input-inline">
                            <input name="search_LIKE_goodsModel" placeholder="全部规格型号" class="layui-input" type="text">
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label" style="width: 110px">商品名称</label>
                        <div class="layui-input-inline">
                            <input name="search_LIKE_goodsName" placeholder="全部商品名称" class="layui-input" type="text">
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">供应商</label>
                        <div class="layui-input-inline" style="width: 280px">
                            <input name="search_LIKE_supplyName" placeholder="全部供应商" class="layui-input" type="text">
                        </div>
                    </div>
                </div>
                <div class="layui-form-item layui-border-tb" style="display: block;">
                    <div class="layui-inline">
                        <label class="layui-form-label mal-35">商品品牌</label>
                        <div class="layui-input-inline">
                            <input name="search_LIKE_goodsBrand" placeholder="全部商品品牌" class="layui-input" type="text">
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label " style="width: 110px">入仓报关单号</label>
                        <div class="layui-input-inline">
                            <input name="search_LIKE_inBgBillNo" placeholder="全部入仓报关单号" class="layui-input" type="text">
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">HS编码</label>
                        <div class="layui-input-inline">
                            <input name="search_LIKE_goodsNumber" placeholder="全部HS编码" class="layui-input" type="text">
                        </div>
                    </div>
                </div>
                <div class="layui-form-item layui-border-tb" style="display: block;">
                    <div class="layui-inline">
                        <label class="layui-form-label mal-35">DATE CODE</label>
                        <div class="layui-input-inline">
                            <input name="search_LIKE_dateCode" placeholder="全部DATE CODE" class="layui-input" type="text">
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label" style="width: 110px">BIN/CAT CODE</label>
                        <div class="layui-input-inline">
                            <input name="search_LIKE_binCode" placeholder="全部BIN/CAT CODE" class="layui-input" type="text">
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">BIN CODE2</label>
                        <div class="layui-input-inline">
                            <input name="search_LIKE_binCode2" placeholder="全部BIN CODE2" class="layui-input" type="text">
                        </div>
                    </div>
                </div>
            </div>
            <div class="layui-form-item">
                <div class="layui-input-block mal40">
                    <input type="hidden" id="sortName" value="inDate">
                    <button type="button" class="layui-btn layui-btn-radius pal025 layui-btn-grassy mal-30" id="queryBtn" lay-filter="stockReport">查询</button>
                    <button type="reset" class="layui-btn layui-btn-primary layui-btn-radius ldsd-btn-radius pal025 mal-30">清空</button>
                    <a class="ldsd-shuaixuan filtrate-more-close">展开筛选条件</a>
                </div>
            </div>
        </form>
    <form id="exportExcelByList" target="_blank" method="post" action="/server/stockReport/exportStock?sort=inDate&amp;order=desc&amp;search_GTE_createTime=2019-09-09&amp;search_LTE_createTime=2019-09-16 23:59:59&amp;search_LIKE_sysOrderNo=&amp;search_LIKE_custOrderNo=&amp;search_LIKE_customerName=&amp;search_LIKE_goodsModel=&amp;search_LIKE_goodsName=&amp;search_LIKE_supplyName=&amp;search_LIKE_goodsBrand=&amp;search_LIKE_inBgBillNo=&amp;search_LIKE_goodsNumber=&amp;search_LIKE_dateCode=&amp;search_LIKE_binCode=&amp;search_LIKE_binCode2="></form></div>
    <div class="ldsd-tab">
        <div class="ldsd-tab-header">
            <button type="button" class="layui-btn layui-btn-radius layui-btn-primary" id="exportBtn"><img src="/static/images/list/icon_export.svg" class="mat-4 par8">导出</button>
        </div>
        <div class="ldsd-tab-container ldsd-inOrder-page ldsd-page">
            <table class="layui-hide" id="stockReportTable" lay-filter="stock"></table><div class="layui-form layui-border-box layui-table-view" lay-filter="LAY-table-5" style=" "><div class="layui-table-box"><div class="layui-table-header"><table cellspacing="0" cellpadding="0" border="0" class="layui-table"><thead><tr><th data-field="0" data-unresize="true"><div class="layui-table-cell laytable-cell-5-0 laytable-cell-numbers"><span>序号</span></div></th><th data-field="inDate"><div class="layui-table-cell laytable-cell-5-inDate"><span>入仓日期</span></div></th><th data-field="customerName"><div class="layui-table-cell laytable-cell-5-customerName"><span>货主</span></div></th><th data-field="custOrderNo"><div class="layui-table-cell laytable-cell-5-custOrderNo"><span>客户单号</span></div></th><th data-field="goodsModel"><div class="layui-table-cell laytable-cell-5-goodsModel"><span>规格型号</span></div></th><th data-field="unit"><div class="layui-table-cell laytable-cell-5-unit"><span>单位</span></div></th><th data-field="stockNumView"><div class="layui-table-cell laytable-cell-5-stockNumView"><span>入库数量</span></div></th><th data-field="goodsName"><div class="layui-table-cell laytable-cell-5-goodsName"><span>商品名称</span></div></th><th data-field="goodsBrand"><div class="layui-table-cell laytable-cell-5-goodsBrand"><span>品牌</span></div></th><th data-field="goodsNumber"><div class="layui-table-cell laytable-cell-5-goodsNumber"><span>HS编码</span></div></th><th data-field="originPlace"><div class="layui-table-cell laytable-cell-5-originPlace"><span>原产地</span></div></th><th data-field="supplyName"><div class="layui-table-cell laytable-cell-5-supplyName"><span>供应商</span></div></th><th data-field="sysOrderNo"><div class="layui-table-cell laytable-cell-5-sysOrderNo"><span>系统订单号</span></div></th><th data-field="inBgBillNo"><div class="layui-table-cell laytable-cell-5-inBgBillNo"><span>入仓报关单号</span></div></th><th data-field="dateCode"><div class="layui-table-cell laytable-cell-5-dateCode"><span>DATE CODE</span></div></th><th data-field="binCode"><div class="layui-table-cell laytable-cell-5-binCode"><span>BIN/CAT CODE</span></div></th><th data-field="binCode2"><div class="layui-table-cell laytable-cell-5-binCode2"><span>BIN CODE2</span></div></th><th data-field="lot"><div class="layui-table-cell laytable-cell-5-lot"><span>批次号</span></div></th><th data-field="carton"><div class="layui-table-cell laytable-cell-5-carton"><span>森宝箱号</span></div></th><th data-field="locationCode"><div class="layui-table-cell laytable-cell-5-locationCode"><span>储位</span></div></th><th data-field="itemNumber"><div class="layui-table-cell laytable-cell-5-itemNumber"><span>料号</span></div></th><th data-field="categories"><div class="layui-table-cell laytable-cell-5-categories"><span>大类</span></div></th><th data-field="mediumBoxNum"><div class="layui-table-cell laytable-cell-5-mediumBoxNum"><span>中箱号</span></div></th><th data-field="price"><div class="layui-table-cell laytable-cell-5-price"><span>单价</span></div></th><th data-field="currencyType"><div class="layui-table-cell laytable-cell-5-currencyType"><span>币别</span></div></th><th data-field="totalAmount"><div class="layui-table-cell laytable-cell-5-totalAmount"><span>总金额</span></div></th><th data-field="proFactoryName"><div class="layui-table-cell laytable-cell-5-proFactoryName"><span>加工厂名称</span></div></th><th data-field="shipReqments"><div class="layui-table-cell laytable-cell-5-shipReqments"><span>出货要求</span></div></th><th data-field="batchNo"><div class="layui-table-cell laytable-cell-5-batchNo"><span>BATCH NO</span></div></th></tr></thead></table></div><div class="layui-table-body layui-table-main"><table cellspacing="0" cellpadding="0" border="0" class="layui-table"><tbody><tr data-index="0" class=""><td data-field="0"><div class="layui-table-cell laytable-cell-5-0 laytable-cell-numbers">1</div></td><td data-field="inDate"><div class="layui-table-cell laytable-cell-5-inDate">2019-09-16</div></td><td data-field="customerName"><div class="layui-table-cell laytable-cell-5-customerName">ASIACOM TECHNOLOGY LIMITED</div></td><td data-field="custOrderNo"><div class="layui-table-cell laytable-cell-5-custOrderNo">BWI1909060029</div></td><td data-field="goodsModel"><div class="layui-table-cell laytable-cell-5-goodsModel">GW JTLPS1.EM-JNKL-XX57-1-150-1-R33</div></td><td data-field="unit"><div class="layui-table-cell laytable-cell-5-unit">PCS</div></td><td data-field="stockNumView"><div class="layui-table-cell laytable-cell-5-stockNumView">20,000</div></td><td data-field="goodsName"><div class="layui-table-cell laytable-cell-5-goodsName">发光二极管</div></td><td data-field="goodsBrand"><div class="layui-table-cell laytable-cell-5-goodsBrand">OSRAM</div></td><td data-field="goodsNumber"><div class="layui-table-cell laytable-cell-5-goodsNumber">8541401000</div></td><td data-field="originPlace"><div class="layui-table-cell laytable-cell-5-originPlace">中国</div></td><td data-field="supplyName"><div class="layui-table-cell laytable-cell-5-supplyName">OSRAM OPTO SEMICONDUCTORS (CHINA) CO. LTD</div></td><td data-field="sysOrderNo"><div class="layui-table-cell laytable-cell-5-sysOrderNo">BWI1909060029</div></td><td data-field="inBgBillNo"><div class="layui-table-cell laytable-cell-5-inBgBillNo"></div></td><td data-field="dateCode"><div class="layui-table-cell laytable-cell-5-dateCode"></div></td><td data-field="binCode"><div class="layui-table-cell laytable-cell-5-binCode">KK37L2</div></td><td data-field="binCode2"><div class="layui-table-cell laytable-cell-5-binCode2"></div></td><td data-field="lot"><div class="layui-table-cell laytable-cell-5-lot"></div></td><td data-field="carton"><div class="layui-table-cell laytable-cell-5-carton">YX20190912-67</div></td><td data-field="locationCode"><div class="layui-table-cell laytable-cell-5-locationCode"></div></td><td data-field="itemNumber"><div class="layui-table-cell laytable-cell-5-itemNumber"></div></td><td data-field="categories"><div class="layui-table-cell laytable-cell-5-categories"></div></td><td data-field="mediumBoxNum"><div class="layui-table-cell laytable-cell-5-mediumBoxNum"></div></td><td data-field="price"><div class="layui-table-cell laytable-cell-5-price"></div></td><td data-field="currencyType"><div class="layui-table-cell laytable-cell-5-currencyType"></div></td><td data-field="totalAmount"><div class="layui-table-cell laytable-cell-5-totalAmount"></div></td><td data-field="proFactoryName"><div class="layui-table-cell laytable-cell-5-proFactoryName"></div></td><td data-field="shipReqments"><div class="layui-table-cell laytable-cell-5-shipReqments"></div></td><td data-field="batchNo"><div class="layui-table-cell laytable-cell-5-batchNo"></div></td></tr><tr data-index="1" class=""><td data-field="0"><div class="layui-table-cell laytable-cell-5-0 laytable-cell-numbers">2</div></td><td data-field="inDate"><div class="layui-table-cell laytable-cell-5-inDate">2019-09-16</div></td><td data-field="customerName"><div class="layui-table-cell laytable-cell-5-customerName">ASIACOM TECHNOLOGY LIMITED</div></td><td data-field="custOrderNo"><div class="layui-table-cell laytable-cell-5-custOrderNo">BWI1909060029</div></td><td data-field="goodsModel"><div class="layui-table-cell laytable-cell-5-goodsModel">GW PSLT33.EM-LWLY-XX53-1-150-R18</div></td><td data-field="unit"><div class="layui-table-cell laytable-cell-5-unit">PCS</div></td><td data-field="stockNumView"><div class="layui-table-cell laytable-cell-5-stockNumView">45,000</div></td><td data-field="goodsName"><div class="layui-table-cell laytable-cell-5-goodsName">发光二极管</div></td><td data-field="goodsBrand"><div class="layui-table-cell laytable-cell-5-goodsBrand">OSRAM</div></td><td data-field="goodsNumber"><div class="layui-table-cell laytable-cell-5-goodsNumber">8541401000</div></td><td data-field="originPlace"><div class="layui-table-cell laytable-cell-5-originPlace">中国</div></td><td data-field="supplyName"><div class="layui-table-cell laytable-cell-5-supplyName">OSRAM OPTO SEMICONDUCTORS (CHINA) CO. LTD</div></td><td data-field="sysOrderNo"><div class="layui-table-cell laytable-cell-5-sysOrderNo">BWI1909060029</div></td><td data-field="inBgBillNo"><div class="layui-table-cell laytable-cell-5-inBgBillNo"></div></td><td data-field="dateCode"><div class="layui-table-cell laytable-cell-5-dateCode"></div></td><td data-field="binCode"><div class="layui-table-cell laytable-cell-5-binCode">LX33E3</div></td><td data-field="binCode2"><div class="layui-table-cell laytable-cell-5-binCode2"></div></td><td data-field="lot"><div class="layui-table-cell laytable-cell-5-lot"></div></td><td data-field="carton"><div class="layui-table-cell laytable-cell-5-carton">YX20190912-69</div></td><td data-field="locationCode"><div class="layui-table-cell laytable-cell-5-locationCode"></div></td><td data-field="itemNumber"><div class="layui-table-cell laytable-cell-5-itemNumber"></div></td><td data-field="categories"><div class="layui-table-cell laytable-cell-5-categories"></div></td><td data-field="mediumBoxNum"><div class="layui-table-cell laytable-cell-5-mediumBoxNum"></div></td><td data-field="price"><div class="layui-table-cell laytable-cell-5-price"></div></td><td data-field="currencyType"><div class="layui-table-cell laytable-cell-5-currencyType"></div></td><td data-field="totalAmount"><div class="layui-table-cell laytable-cell-5-totalAmount"></div></td><td data-field="proFactoryName"><div class="layui-table-cell laytable-cell-5-proFactoryName"></div></td><td data-field="shipReqments"><div class="layui-table-cell laytable-cell-5-shipReqments"></div></td><td data-field="batchNo"><div class="layui-table-cell laytable-cell-5-batchNo"></div></td></tr><tr data-index="2" class=""><td data-field="0"><div class="layui-table-cell laytable-cell-5-0 laytable-cell-numbers">3</div></td><td data-field="inDate"><div class="layui-table-cell laytable-cell-5-inDate">2019-09-16</div></td><td data-field="customerName"><div class="layui-table-cell laytable-cell-5-customerName">ASIACOM TECHNOLOGY LIMITED</div></td><td data-field="custOrderNo"><div class="layui-table-cell laytable-cell-5-custOrderNo">BWI1909060029</div></td><td data-field="goodsModel"><div class="layui-table-cell laytable-cell-5-goodsModel">GW PSLT33.EM-LWLY-XX53-1-150-R18</div></td><td data-field="unit"><div class="layui-table-cell laytable-cell-5-unit">PCS</div></td><td data-field="stockNumView"><div class="layui-table-cell laytable-cell-5-stockNumView">27,000</div></td><td data-field="goodsName"><div class="layui-table-cell laytable-cell-5-goodsName">发光二极管</div></td><td data-field="goodsBrand"><div class="layui-table-cell laytable-cell-5-goodsBrand">OSRAM</div></td><td data-field="goodsNumber"><div class="layui-table-cell laytable-cell-5-goodsNumber">8541401000</div></td><td data-field="originPlace"><div class="layui-table-cell laytable-cell-5-originPlace">中国</div></td><td data-field="supplyName"><div class="layui-table-cell laytable-cell-5-supplyName">OSRAM OPTO SEMICONDUCTORS (CHINA) CO. LTD</div></td><td data-field="sysOrderNo"><div class="layui-table-cell laytable-cell-5-sysOrderNo">BWI1909060029</div></td><td data-field="inBgBillNo"><div class="layui-table-cell laytable-cell-5-inBgBillNo"></div></td><td data-field="dateCode"><div class="layui-table-cell laytable-cell-5-dateCode"></div></td><td data-field="binCode"><div class="layui-table-cell laytable-cell-5-binCode">LX33E3</div></td><td data-field="binCode2"><div class="layui-table-cell laytable-cell-5-binCode2"></div></td><td data-field="lot"><div class="layui-table-cell laytable-cell-5-lot"></div></td><td data-field="carton"><div class="layui-table-cell laytable-cell-5-carton">YX20190912-71</div></td><td data-field="locationCode"><div class="layui-table-cell laytable-cell-5-locationCode"></div></td><td data-field="itemNumber"><div class="layui-table-cell laytable-cell-5-itemNumber"></div></td><td data-field="categories"><div class="layui-table-cell laytable-cell-5-categories"></div></td><td data-field="mediumBoxNum"><div class="layui-table-cell laytable-cell-5-mediumBoxNum"></div></td><td data-field="price"><div class="layui-table-cell laytable-cell-5-price"></div></td><td data-field="currencyType"><div class="layui-table-cell laytable-cell-5-currencyType"></div></td><td data-field="totalAmount"><div class="layui-table-cell laytable-cell-5-totalAmount"></div></td><td data-field="proFactoryName"><div class="layui-table-cell laytable-cell-5-proFactoryName"></div></td><td data-field="shipReqments"><div class="layui-table-cell laytable-cell-5-shipReqments"></div></td><td data-field="batchNo"><div class="layui-table-cell laytable-cell-5-batchNo"></div></td></tr><tr data-index="3" class=""><td data-field="0"><div class="layui-table-cell laytable-cell-5-0 laytable-cell-numbers">4</div></td><td data-field="inDate"><div class="layui-table-cell laytable-cell-5-inDate">2019-09-16</div></td><td data-field="customerName"><div class="layui-table-cell laytable-cell-5-customerName">ASIACOM TECHNOLOGY LIMITED</div></td><td data-field="custOrderNo"><div class="layui-table-cell laytable-cell-5-custOrderNo">BWI1909060029</div></td><td data-field="goodsModel"><div class="layui-table-cell laytable-cell-5-goodsModel">GW PSLT33.EM-LWLY-XX53-1-150-R18</div></td><td data-field="unit"><div class="layui-table-cell laytable-cell-5-unit">PCS</div></td><td data-field="stockNumView"><div class="layui-table-cell laytable-cell-5-stockNumView">21,000</div></td><td data-field="goodsName"><div class="layui-table-cell laytable-cell-5-goodsName">发光二极管</div></td><td data-field="goodsBrand"><div class="layui-table-cell laytable-cell-5-goodsBrand">OSRAM</div></td><td data-field="goodsNumber"><div class="layui-table-cell laytable-cell-5-goodsNumber">8541401000</div></td><td data-field="originPlace"><div class="layui-table-cell laytable-cell-5-originPlace">中国</div></td><td data-field="supplyName"><div class="layui-table-cell laytable-cell-5-supplyName">OSRAM OPTO SEMICONDUCTORS (CHINA) CO. LTD</div></td><td data-field="sysOrderNo"><div class="layui-table-cell laytable-cell-5-sysOrderNo">BWI1909060029</div></td><td data-field="inBgBillNo"><div class="layui-table-cell laytable-cell-5-inBgBillNo"></div></td><td data-field="dateCode"><div class="layui-table-cell laytable-cell-5-dateCode"></div></td><td data-field="binCode"><div class="layui-table-cell laytable-cell-5-binCode">LXH3E3</div></td><td data-field="binCode2"><div class="layui-table-cell laytable-cell-5-binCode2"></div></td><td data-field="lot"><div class="layui-table-cell laytable-cell-5-lot"></div></td><td data-field="carton"><div class="layui-table-cell laytable-cell-5-carton">YX20190912-70</div></td><td data-field="locationCode"><div class="layui-table-cell laytable-cell-5-locationCode"></div></td><td data-field="itemNumber"><div class="layui-table-cell laytable-cell-5-itemNumber"></div></td><td data-field="categories"><div class="layui-table-cell laytable-cell-5-categories"></div></td><td data-field="mediumBoxNum"><div class="layui-table-cell laytable-cell-5-mediumBoxNum"></div></td><td data-field="price"><div class="layui-table-cell laytable-cell-5-price"></div></td><td data-field="currencyType"><div class="layui-table-cell laytable-cell-5-currencyType"></div></td><td data-field="totalAmount"><div class="layui-table-cell laytable-cell-5-totalAmount"></div></td><td data-field="proFactoryName"><div class="layui-table-cell laytable-cell-5-proFactoryName"></div></td><td data-field="shipReqments"><div class="layui-table-cell laytable-cell-5-shipReqments"></div></td><td data-field="batchNo"><div class="layui-table-cell laytable-cell-5-batchNo"></div></td></tr><tr data-index="4" class=""><td data-field="0"><div class="layui-table-cell laytable-cell-5-0 laytable-cell-numbers">5</div></td><td data-field="inDate"><div class="layui-table-cell laytable-cell-5-inDate">2019-09-16</div></td><td data-field="customerName"><div class="layui-table-cell laytable-cell-5-customerName">ASIACOM TECHNOLOGY LIMITED</div></td><td data-field="custOrderNo"><div class="layui-table-cell laytable-cell-5-custOrderNo">BWI1909060029</div></td><td data-field="goodsModel"><div class="layui-table-cell laytable-cell-5-goodsModel">GW PSLT33.EM-LWLY-XX53-1-150-R18</div></td><td data-field="unit"><div class="layui-table-cell laytable-cell-5-unit">PCS</div></td><td data-field="stockNumView"><div class="layui-table-cell laytable-cell-5-stockNumView">6,000</div></td><td data-field="goodsName"><div class="layui-table-cell laytable-cell-5-goodsName">发光二极管</div></td><td data-field="goodsBrand"><div class="layui-table-cell laytable-cell-5-goodsBrand">OSRAM</div></td><td data-field="goodsNumber"><div class="layui-table-cell laytable-cell-5-goodsNumber">8541401000</div></td><td data-field="originPlace"><div class="layui-table-cell laytable-cell-5-originPlace">中国</div></td><td data-field="supplyName"><div class="layui-table-cell laytable-cell-5-supplyName">OSRAM OPTO SEMICONDUCTORS (CHINA) CO. LTD</div></td><td data-field="sysOrderNo"><div class="layui-table-cell laytable-cell-5-sysOrderNo">BWI1909060029</div></td><td data-field="inBgBillNo"><div class="layui-table-cell laytable-cell-5-inBgBillNo"></div></td><td data-field="dateCode"><div class="layui-table-cell laytable-cell-5-dateCode"></div></td><td data-field="binCode"><div class="layui-table-cell laytable-cell-5-binCode">LXH3E4</div></td><td data-field="binCode2"><div class="layui-table-cell laytable-cell-5-binCode2"></div></td><td data-field="lot"><div class="layui-table-cell laytable-cell-5-lot"></div></td><td data-field="carton"><div class="layui-table-cell laytable-cell-5-carton">YX20190912-72</div></td><td data-field="locationCode"><div class="layui-table-cell laytable-cell-5-locationCode"></div></td><td data-field="itemNumber"><div class="layui-table-cell laytable-cell-5-itemNumber"></div></td><td data-field="categories"><div class="layui-table-cell laytable-cell-5-categories"></div></td><td data-field="mediumBoxNum"><div class="layui-table-cell laytable-cell-5-mediumBoxNum"></div></td><td data-field="price"><div class="layui-table-cell laytable-cell-5-price"></div></td><td data-field="currencyType"><div class="layui-table-cell laytable-cell-5-currencyType"></div></td><td data-field="totalAmount"><div class="layui-table-cell laytable-cell-5-totalAmount"></div></td><td data-field="proFactoryName"><div class="layui-table-cell laytable-cell-5-proFactoryName"></div></td><td data-field="shipReqments"><div class="layui-table-cell laytable-cell-5-shipReqments"></div></td><td data-field="batchNo"><div class="layui-table-cell laytable-cell-5-batchNo"></div></td></tr><tr data-index="5" class=""><td data-field="0"><div class="layui-table-cell laytable-cell-5-0 laytable-cell-numbers">6</div></td><td data-field="inDate"><div class="layui-table-cell laytable-cell-5-inDate">2019-09-16</div></td><td data-field="customerName"><div class="layui-table-cell laytable-cell-5-customerName">ASIACOM TECHNOLOGY LIMITED</div></td><td data-field="custOrderNo"><div class="layui-table-cell laytable-cell-5-custOrderNo">BWI1909060029</div></td><td data-field="goodsModel"><div class="layui-table-cell laytable-cell-5-goodsModel">GW PSLT33.EM-LWLY-XX53-1-150-R18</div></td><td data-field="unit"><div class="layui-table-cell laytable-cell-5-unit">PCS</div></td><td data-field="stockNumView"><div class="layui-table-cell laytable-cell-5-stockNumView">3,000</div></td><td data-field="goodsName"><div class="layui-table-cell laytable-cell-5-goodsName">发光二极管</div></td><td data-field="goodsBrand"><div class="layui-table-cell laytable-cell-5-goodsBrand">OSRAM</div></td><td data-field="goodsNumber"><div class="layui-table-cell laytable-cell-5-goodsNumber">8541401000</div></td><td data-field="originPlace"><div class="layui-table-cell laytable-cell-5-originPlace">中国</div></td><td data-field="supplyName"><div class="layui-table-cell laytable-cell-5-supplyName">OSRAM OPTO SEMICONDUCTORS (CHINA) CO. LTD</div></td><td data-field="sysOrderNo"><div class="layui-table-cell laytable-cell-5-sysOrderNo">BWI1909060029</div></td><td data-field="inBgBillNo"><div class="layui-table-cell laytable-cell-5-inBgBillNo"></div></td><td data-field="dateCode"><div class="layui-table-cell laytable-cell-5-dateCode"></div></td><td data-field="binCode"><div class="layui-table-cell laytable-cell-5-binCode">LY33D4</div></td><td data-field="binCode2"><div class="layui-table-cell laytable-cell-5-binCode2"></div></td><td data-field="lot"><div class="layui-table-cell laytable-cell-5-lot"></div></td><td data-field="carton"><div class="layui-table-cell laytable-cell-5-carton">YX20190912-73</div></td><td data-field="locationCode"><div class="layui-table-cell laytable-cell-5-locationCode"></div></td><td data-field="itemNumber"><div class="layui-table-cell laytable-cell-5-itemNumber"></div></td><td data-field="categories"><div class="layui-table-cell laytable-cell-5-categories"></div></td><td data-field="mediumBoxNum"><div class="layui-table-cell laytable-cell-5-mediumBoxNum"></div></td><td data-field="price"><div class="layui-table-cell laytable-cell-5-price"></div></td><td data-field="currencyType"><div class="layui-table-cell laytable-cell-5-currencyType"></div></td><td data-field="totalAmount"><div class="layui-table-cell laytable-cell-5-totalAmount"></div></td><td data-field="proFactoryName"><div class="layui-table-cell laytable-cell-5-proFactoryName"></div></td><td data-field="shipReqments"><div class="layui-table-cell laytable-cell-5-shipReqments"></div></td><td data-field="batchNo"><div class="layui-table-cell laytable-cell-5-batchNo"></div></td></tr><tr data-index="6"><td data-field="0"><div class="layui-table-cell laytable-cell-5-0 laytable-cell-numbers">7</div></td><td data-field="inDate"><div class="layui-table-cell laytable-cell-5-inDate">2019-09-16</div></td><td data-field="customerName"><div class="layui-table-cell laytable-cell-5-customerName">ASIACOM TECHNOLOGY LIMITED</div></td><td data-field="custOrderNo"><div class="layui-table-cell laytable-cell-5-custOrderNo">BWI1909060029</div></td><td data-field="goodsModel"><div class="layui-table-cell laytable-cell-5-goodsModel">LE RTB N7WM-JXJZ-23+KXKZ-24+2T4T-35</div></td><td data-field="unit"><div class="layui-table-cell laytable-cell-5-unit">PCS</div></td><td data-field="stockNumView"><div class="layui-table-cell laytable-cell-5-stockNumView">1,000</div></td><td data-field="goodsName"><div class="layui-table-cell laytable-cell-5-goodsName">发光二极管</div></td><td data-field="goodsBrand"><div class="layui-table-cell laytable-cell-5-goodsBrand">OSRAM</div></td><td data-field="goodsNumber"><div class="layui-table-cell laytable-cell-5-goodsNumber">8541401000</div></td><td data-field="originPlace"><div class="layui-table-cell laytable-cell-5-originPlace">马来西亚</div></td><td data-field="supplyName"><div class="layui-table-cell laytable-cell-5-supplyName">OSRAM OPTO SEMICONDUCTORS (CHINA) CO. LTD</div></td><td data-field="sysOrderNo"><div class="layui-table-cell laytable-cell-5-sysOrderNo">BWI1909060029</div></td><td data-field="inBgBillNo"><div class="layui-table-cell laytable-cell-5-inBgBillNo"></div></td><td data-field="dateCode"><div class="layui-table-cell laytable-cell-5-dateCode"></div></td><td data-field="binCode"><div class="layui-table-cell laytable-cell-5-binCode">JX30</div></td><td data-field="binCode2"><div class="layui-table-cell laytable-cell-5-binCode2"></div></td><td data-field="lot"><div class="layui-table-cell laytable-cell-5-lot"></div></td><td data-field="carton"><div class="layui-table-cell laytable-cell-5-carton">YX20190912-66</div></td><td data-field="locationCode"><div class="layui-table-cell laytable-cell-5-locationCode"></div></td><td data-field="itemNumber"><div class="layui-table-cell laytable-cell-5-itemNumber"></div></td><td data-field="categories"><div class="layui-table-cell laytable-cell-5-categories"></div></td><td data-field="mediumBoxNum"><div class="layui-table-cell laytable-cell-5-mediumBoxNum"></div></td><td data-field="price"><div class="layui-table-cell laytable-cell-5-price"></div></td><td data-field="currencyType"><div class="layui-table-cell laytable-cell-5-currencyType"></div></td><td data-field="totalAmount"><div class="layui-table-cell laytable-cell-5-totalAmount"></div></td><td data-field="proFactoryName"><div class="layui-table-cell laytable-cell-5-proFactoryName"></div></td><td data-field="shipReqments"><div class="layui-table-cell laytable-cell-5-shipReqments"></div></td><td data-field="batchNo"><div class="layui-table-cell laytable-cell-5-batchNo"></div></td></tr><tr data-index="7"><td data-field="0"><div class="layui-table-cell laytable-cell-5-0 laytable-cell-numbers">8</div></td><td data-field="inDate"><div class="layui-table-cell laytable-cell-5-inDate">2019-09-16</div></td><td data-field="customerName"><div class="layui-table-cell laytable-cell-5-customerName">ASIACOM TECHNOLOGY LIMITED</div></td><td data-field="custOrderNo"><div class="layui-table-cell laytable-cell-5-custOrderNo">BWI1909060029</div></td><td data-field="goodsModel"><div class="layui-table-cell laytable-cell-5-goodsModel">SPL EN91-40-8-10D(909+/-5nm)</div></td><td data-field="unit"><div class="layui-table-cell laytable-cell-5-unit">PCS</div></td><td data-field="stockNumView"><div class="layui-table-cell laytable-cell-5-stockNumView">291</div></td><td data-field="goodsName"><div class="layui-table-cell laytable-cell-5-goodsName">激光二极管</div></td><td data-field="goodsBrand"><div class="layui-table-cell laytable-cell-5-goodsBrand">Osram</div></td><td data-field="goodsNumber"><div class="layui-table-cell laytable-cell-5-goodsNumber">8541409000</div></td><td data-field="originPlace"><div class="layui-table-cell laytable-cell-5-originPlace">德国</div></td><td data-field="supplyName"><div class="layui-table-cell laytable-cell-5-supplyName">OSRAM OPTO SEMICONDUCTORS (CHINA) CO. LTD</div></td><td data-field="sysOrderNo"><div class="layui-table-cell laytable-cell-5-sysOrderNo">BWI1909060029</div></td><td data-field="inBgBillNo"><div class="layui-table-cell laytable-cell-5-inBgBillNo"></div></td><td data-field="dateCode"><div class="layui-table-cell laytable-cell-5-dateCode"></div></td><td data-field="binCode"><div class="layui-table-cell laytable-cell-5-binCode">na/na</div></td><td data-field="binCode2"><div class="layui-table-cell laytable-cell-5-binCode2"></div></td><td data-field="lot"><div class="layui-table-cell laytable-cell-5-lot"></div></td><td data-field="carton"><div class="layui-table-cell laytable-cell-5-carton">YX20190912-65</div></td><td data-field="locationCode"><div class="layui-table-cell laytable-cell-5-locationCode"></div></td><td data-field="itemNumber"><div class="layui-table-cell laytable-cell-5-itemNumber"></div></td><td data-field="categories"><div class="layui-table-cell laytable-cell-5-categories"></div></td><td data-field="mediumBoxNum"><div class="layui-table-cell laytable-cell-5-mediumBoxNum"></div></td><td data-field="price"><div class="layui-table-cell laytable-cell-5-price"></div></td><td data-field="currencyType"><div class="layui-table-cell laytable-cell-5-currencyType"></div></td><td data-field="totalAmount"><div class="layui-table-cell laytable-cell-5-totalAmount"></div></td><td data-field="proFactoryName"><div class="layui-table-cell laytable-cell-5-proFactoryName"></div></td><td data-field="shipReqments"><div class="layui-table-cell laytable-cell-5-shipReqments"></div></td><td data-field="batchNo"><div class="layui-table-cell laytable-cell-5-batchNo"></div></td></tr><tr data-index="8"><td data-field="0"><div class="layui-table-cell laytable-cell-5-0 laytable-cell-numbers">9</div></td><td data-field="inDate"><div class="layui-table-cell laytable-cell-5-inDate">2019-09-15</div></td><td data-field="customerName"><div class="layui-table-cell laytable-cell-5-customerName">ASIACOM TECHNOLOGY LIMITED</div></td><td data-field="custOrderNo"><div class="layui-table-cell laytable-cell-5-custOrderNo">BWI1909060029</div></td><td data-field="goodsModel"><div class="layui-table-cell laytable-cell-5-goodsModel">GW JTLMS1.EM-G9H1-XX58-1-60-1-R33</div></td><td data-field="unit"><div class="layui-table-cell laytable-cell-5-unit">PCS</div></td><td data-field="stockNumView"><div class="layui-table-cell laytable-cell-5-stockNumView">30,000</div></td><td data-field="goodsName"><div class="layui-table-cell laytable-cell-5-goodsName">发光二极管</div></td><td data-field="goodsBrand"><div class="layui-table-cell laytable-cell-5-goodsBrand">OSRAM</div></td><td data-field="goodsNumber"><div class="layui-table-cell laytable-cell-5-goodsNumber">8541401000</div></td><td data-field="originPlace"><div class="layui-table-cell laytable-cell-5-originPlace">中国</div></td><td data-field="supplyName"><div class="layui-table-cell laytable-cell-5-supplyName">OSRAM OPTO SEMICONDUCTORS (CHINA) CO. LTD</div></td><td data-field="sysOrderNo"><div class="layui-table-cell laytable-cell-5-sysOrderNo">BWI1909060029</div></td><td data-field="inBgBillNo"><div class="layui-table-cell laytable-cell-5-inBgBillNo"></div></td><td data-field="dateCode"><div class="layui-table-cell laytable-cell-5-dateCode"></div></td><td data-field="binCode"><div class="layui-table-cell laytable-cell-5-binCode">GVH8L2</div></td><td data-field="binCode2"><div class="layui-table-cell laytable-cell-5-binCode2"></div></td><td data-field="lot"><div class="layui-table-cell laytable-cell-5-lot"></div></td><td data-field="carton"><div class="layui-table-cell laytable-cell-5-carton">YX20190912-75</div></td><td data-field="locationCode"><div class="layui-table-cell laytable-cell-5-locationCode"></div></td><td data-field="itemNumber"><div class="layui-table-cell laytable-cell-5-itemNumber"></div></td><td data-field="categories"><div class="layui-table-cell laytable-cell-5-categories"></div></td><td data-field="mediumBoxNum"><div class="layui-table-cell laytable-cell-5-mediumBoxNum"></div></td><td data-field="price"><div class="layui-table-cell laytable-cell-5-price"></div></td><td data-field="currencyType"><div class="layui-table-cell laytable-cell-5-currencyType"></div></td><td data-field="totalAmount"><div class="layui-table-cell laytable-cell-5-totalAmount"></div></td><td data-field="proFactoryName"><div class="layui-table-cell laytable-cell-5-proFactoryName"></div></td><td data-field="shipReqments"><div class="layui-table-cell laytable-cell-5-shipReqments"></div></td><td data-field="batchNo"><div class="layui-table-cell laytable-cell-5-batchNo"></div></td></tr><tr data-index="9"><td data-field="0"><div class="layui-table-cell laytable-cell-5-0 laytable-cell-numbers">10</div></td><td data-field="inDate"><div class="layui-table-cell laytable-cell-5-inDate">2019-09-15</div></td><td data-field="customerName"><div class="layui-table-cell laytable-cell-5-customerName">ASIACOM TECHNOLOGY LIMITED</div></td><td data-field="custOrderNo"><div class="layui-table-cell laytable-cell-5-custOrderNo">BWI1909060029</div></td><td data-field="goodsModel"><div class="layui-table-cell laytable-cell-5-goodsModel">GW JTLMS1.EM-GVH2-XX53-1-60-1-R33</div></td><td data-field="unit"><div class="layui-table-cell laytable-cell-5-unit">PCS</div></td><td data-field="stockNumView"><div class="layui-table-cell laytable-cell-5-stockNumView">10,000</div></td><td data-field="goodsName"><div class="layui-table-cell laytable-cell-5-goodsName">发光二极管</div></td><td data-field="goodsBrand"><div class="layui-table-cell laytable-cell-5-goodsBrand">OSRAM</div></td><td data-field="goodsNumber"><div class="layui-table-cell laytable-cell-5-goodsNumber">8541401000</div></td><td data-field="originPlace"><div class="layui-table-cell laytable-cell-5-originPlace">中国</div></td><td data-field="supplyName"><div class="layui-table-cell laytable-cell-5-supplyName">OSRAM OPTO SEMICONDUCTORS (CHINA) CO. LTD</div></td><td data-field="sysOrderNo"><div class="layui-table-cell laytable-cell-5-sysOrderNo">BWI1909060029</div></td><td data-field="inBgBillNo"><div class="layui-table-cell laytable-cell-5-inBgBillNo"></div></td><td data-field="dateCode"><div class="layui-table-cell laytable-cell-5-dateCode"></div></td><td data-field="binCode"><div class="layui-table-cell laytable-cell-5-binCode">GVH3L2</div></td><td data-field="binCode2"><div class="layui-table-cell laytable-cell-5-binCode2"></div></td><td data-field="lot"><div class="layui-table-cell laytable-cell-5-lot"></div></td><td data-field="carton"><div class="layui-table-cell laytable-cell-5-carton">YX20190912-78</div></td><td data-field="locationCode"><div class="layui-table-cell laytable-cell-5-locationCode"></div></td><td data-field="itemNumber"><div class="layui-table-cell laytable-cell-5-itemNumber"></div></td><td data-field="categories"><div class="layui-table-cell laytable-cell-5-categories"></div></td><td data-field="mediumBoxNum"><div class="layui-table-cell laytable-cell-5-mediumBoxNum"></div></td><td data-field="price"><div class="layui-table-cell laytable-cell-5-price"></div></td><td data-field="currencyType"><div class="layui-table-cell laytable-cell-5-currencyType"></div></td><td data-field="totalAmount"><div class="layui-table-cell laytable-cell-5-totalAmount"></div></td><td data-field="proFactoryName"><div class="layui-table-cell laytable-cell-5-proFactoryName"></div></td><td data-field="shipReqments"><div class="layui-table-cell laytable-cell-5-shipReqments"></div></td><td data-field="batchNo"><div class="layui-table-cell laytable-cell-5-batchNo"></div></td></tr></tbody></table></div><div class="layui-table-fixed layui-table-fixed-l"><div class="layui-table-header"><table cellspacing="0" cellpadding="0" border="0" class="layui-table"><thead><tr><th data-field="0" data-unresize="true"><div class="layui-table-cell laytable-cell-5-0 laytable-cell-numbers"><span>序号</span></div></th><th data-field="inDate"><div class="layui-table-cell laytable-cell-5-inDate"><span>入仓日期</span></div></th><th data-field="customerName"><div class="layui-table-cell laytable-cell-5-customerName"><span>货主</span></div></th><th data-field="custOrderNo"><div class="layui-table-cell laytable-cell-5-custOrderNo"><span>客户单号</span></div></th></tr></thead></table></div><div class="layui-table-body" style="height: auto;"><table cellspacing="0" cellpadding="0" border="0" class="layui-table"><tbody><tr data-index="0" class=""><td data-field="0"><div class="layui-table-cell laytable-cell-5-0 laytable-cell-numbers">1</div></td><td data-field="inDate"><div class="layui-table-cell laytable-cell-5-inDate">2019-09-16</div></td><td data-field="customerName"><div class="layui-table-cell laytable-cell-5-customerName">ASIACOM TECHNOLOGY LIMITED</div></td><td data-field="custOrderNo"><div class="layui-table-cell laytable-cell-5-custOrderNo">BWI1909060029</div></td></tr><tr data-index="1" class=""><td data-field="0"><div class="layui-table-cell laytable-cell-5-0 laytable-cell-numbers">2</div></td><td data-field="inDate"><div class="layui-table-cell laytable-cell-5-inDate">2019-09-16</div></td><td data-field="customerName"><div class="layui-table-cell laytable-cell-5-customerName">ASIACOM TECHNOLOGY LIMITED</div></td><td data-field="custOrderNo"><div class="layui-table-cell laytable-cell-5-custOrderNo">BWI1909060029</div></td></tr><tr data-index="2" class=""><td data-field="0"><div class="layui-table-cell laytable-cell-5-0 laytable-cell-numbers">3</div></td><td data-field="inDate"><div class="layui-table-cell laytable-cell-5-inDate">2019-09-16</div></td><td data-field="customerName"><div class="layui-table-cell laytable-cell-5-customerName">ASIACOM TECHNOLOGY LIMITED</div></td><td data-field="custOrderNo"><div class="layui-table-cell laytable-cell-5-custOrderNo">BWI1909060029</div></td></tr><tr data-index="3" class=""><td data-field="0"><div class="layui-table-cell laytable-cell-5-0 laytable-cell-numbers">4</div></td><td data-field="inDate"><div class="layui-table-cell laytable-cell-5-inDate">2019-09-16</div></td><td data-field="customerName"><div class="layui-table-cell laytable-cell-5-customerName">ASIACOM TECHNOLOGY LIMITED</div></td><td data-field="custOrderNo"><div class="layui-table-cell laytable-cell-5-custOrderNo">BWI1909060029</div></td></tr><tr data-index="4" class=""><td data-field="0"><div class="layui-table-cell laytable-cell-5-0 laytable-cell-numbers">5</div></td><td data-field="inDate"><div class="layui-table-cell laytable-cell-5-inDate">2019-09-16</div></td><td data-field="customerName"><div class="layui-table-cell laytable-cell-5-customerName">ASIACOM TECHNOLOGY LIMITED</div></td><td data-field="custOrderNo"><div class="layui-table-cell laytable-cell-5-custOrderNo">BWI1909060029</div></td></tr><tr data-index="5" class=""><td data-field="0"><div class="layui-table-cell laytable-cell-5-0 laytable-cell-numbers">6</div></td><td data-field="inDate"><div class="layui-table-cell laytable-cell-5-inDate">2019-09-16</div></td><td data-field="customerName"><div class="layui-table-cell laytable-cell-5-customerName">ASIACOM TECHNOLOGY LIMITED</div></td><td data-field="custOrderNo"><div class="layui-table-cell laytable-cell-5-custOrderNo">BWI1909060029</div></td></tr><tr data-index="6"><td data-field="0"><div class="layui-table-cell laytable-cell-5-0 laytable-cell-numbers">7</div></td><td data-field="inDate"><div class="layui-table-cell laytable-cell-5-inDate">2019-09-16</div></td><td data-field="customerName"><div class="layui-table-cell laytable-cell-5-customerName">ASIACOM TECHNOLOGY LIMITED</div></td><td data-field="custOrderNo"><div class="layui-table-cell laytable-cell-5-custOrderNo">BWI1909060029</div></td></tr><tr data-index="7"><td data-field="0"><div class="layui-table-cell laytable-cell-5-0 laytable-cell-numbers">8</div></td><td data-field="inDate"><div class="layui-table-cell laytable-cell-5-inDate">2019-09-16</div></td><td data-field="customerName"><div class="layui-table-cell laytable-cell-5-customerName">ASIACOM TECHNOLOGY LIMITED</div></td><td data-field="custOrderNo"><div class="layui-table-cell laytable-cell-5-custOrderNo">BWI1909060029</div></td></tr><tr data-index="8"><td data-field="0"><div class="layui-table-cell laytable-cell-5-0 laytable-cell-numbers">9</div></td><td data-field="inDate"><div class="layui-table-cell laytable-cell-5-inDate">2019-09-15</div></td><td data-field="customerName"><div class="layui-table-cell laytable-cell-5-customerName">ASIACOM TECHNOLOGY LIMITED</div></td><td data-field="custOrderNo"><div class="layui-table-cell laytable-cell-5-custOrderNo">BWI1909060029</div></td></tr><tr data-index="9"><td data-field="0"><div class="layui-table-cell laytable-cell-5-0 laytable-cell-numbers">10</div></td><td data-field="inDate"><div class="layui-table-cell laytable-cell-5-inDate">2019-09-15</div></td><td data-field="customerName"><div class="layui-table-cell laytable-cell-5-customerName">ASIACOM TECHNOLOGY LIMITED</div></td><td data-field="custOrderNo"><div class="layui-table-cell laytable-cell-5-custOrderNo">BWI1909060029</div></td></tr></tbody></table></div></div></div><div class="layui-table-page"><div id="layui-table-page5"><div class="layui-box layui-laypage layui-laypage-goods-page" id="layui-laypage-2"><a href="javascript:;" class="layui-laypage-prev layui-disabled" data-page="0"><i class="layui-icon"></i></a><span class="layui-laypage-curr"><em class="layui-laypage-em"></em><em>1</em></span><a href="javascript:;" data-page="2">2</a><a href="javascript:;" data-page="3">3</a><a href="javascript:;" data-page="4">4</a><a href="javascript:;" data-page="5">5</a><span class="layui-laypage-spr">…</span><a href="javascript:;" class="layui-laypage-last" title="尾页" data-page="145">尾页</a><a href="javascript:;" class="layui-laypage-next" data-page="2"><i class="layui-icon"></i></a><span class="layui-laypage-count">共 1448 条</span></div></div></div><style>.laytable-cell-5-0{ width: 60px; }.laytable-cell-5-inDate{ width: 110px; }.laytable-cell-5-customerName{ width: 210px; }.laytable-cell-5-custOrderNo{ width: 180px; }.laytable-cell-5-goodsModel{ width: 200px; }.laytable-cell-5-unit{ width: 70px; }.laytable-cell-5-stockNumView{ width: 150px; }.laytable-cell-5-goodsName{ width: 180px; }.laytable-cell-5-goodsBrand{ width: 150px; }.laytable-cell-5-goodsNumber{ width: 160px; }.laytable-cell-5-originPlace{ width: 100px; }.laytable-cell-5-supplyName{ width: 270px; }.laytable-cell-5-sysOrderNo{ width: 170px; }.laytable-cell-5-inBgBillNo{ width: 180px; }.laytable-cell-5-dateCode{ width: 180px; }.laytable-cell-5-binCode{ width: 180px; }.laytable-cell-5-binCode2{ width: 180px; }.laytable-cell-5-lot{ width: 150px; }.laytable-cell-5-carton{ width: 150px; }.laytable-cell-5-locationCode{ width: 150px; }.laytable-cell-5-itemNumber{ width: 150px; }.laytable-cell-5-categories{ width: 150px; }.laytable-cell-5-mediumBoxNum{ width: 150px; }.laytable-cell-5-price{ width: 100px; }.laytable-cell-5-currencyType{ width: 100px; }.laytable-cell-5-totalAmount{ width: 100px; }.laytable-cell-5-proFactoryName{ width: 100px; }.laytable-cell-5-shipReqments{ width: 100px; }.laytable-cell-5-batchNo{ width: 120px; }</style></div>
        </div>
    </div>

</div>



<link rel="stylesheet" href="/static/css/page.css">
<script src="/static/js/common.js"></script>
<script src="/static/js/lib/jquery-sortable.js"></script>
<script>
    //初始化
    $(function () {
        bindtable();
    });

    function bindtable() {
        layui.use(['layer', 'element', 'table', 'form', 'laydate'], function () {
            var $ = layui.$,
            table = layui.table,
            layer = layui.layer,
            element = layui.element,
            laydate = layui.laydate,
            form = layui.form;

            element.render();
            table.render();
            form.render();

            // 分页选项
            var page = {
                groups: 5 //只显示 3 个连续页码
                ,curr: 1 // 重载从一页开始
                ,first: '首页' //不显示首页
                ,last: '尾页' //不显示尾页
                ,limit: 10
                ,limits: [10, 20, 30, 40, 50]
                ,theme: 'goods-page'
                ,layout: ['prev', 'page', 'next', 'count']
            };

            var attrCol = [
                {type: 'numbers', title: '序号', width: 60, fixed: 'left'}
                ,{field: 'inDate', title: '入仓日期', width: 110, fixed: 'left'}
                ,{field: 'customerName', title: '货主', width: 210, fixed: 'left'}
                ,{field: 'custOrderNo', title: '客户单号', width: 180, fixed: 'left'}
                ,{field: 'goodsModel', title: '规格型号', width: 200}
                ,{field: 'unit', title: '单位', width: 70}
                ,{field: 'stockNumView', title: '入库数量', width: 150}
                ,{field: 'goodsName', title: '商品名称', width: 180}
                ,{field: 'goodsBrand', title: '品牌', width: 150}
                ,{field: 'goodsNumber', title: 'HS编码', width: 160}
                ,{field: 'originPlace', title: '原产地', width: 100}
                ,{field: 'supplyName', title: '供应商', width: 270}
                ,{field: 'sysOrderNo', title: '系统订单号', width: 170}
                ,{field: 'inBgBillNo', title: '入仓报关单号', width: 180}
                ,{field: 'dateCode', title: 'DATE CODE', width: 180}
                ,{field: 'binCode', title: 'BIN/CAT CODE', width: 180}
                ,{field: 'binCode2', title: 'BIN CODE2', width: 180}
                ,{field: 'lot', title: '批次号', width: 150}
                ,{field: 'carton', title: '森宝箱号', width: 150}
                ,{field: 'locationCode', title: '储位', width: 150}
                ,{field: 'itemNumber', title: '料号', width: 150}
                ,{field: 'categories', title: '大类', width: 150}
                ,{field: 'mediumBoxNum', title: '中箱号', width: 150}
                ,{field: 'price', title: '单价', width: 100}
                ,{field: 'currencyType', title: '币别', width: 100}
                ,{field: 'totalAmount', title: '总金额', width: 100}
                ,{field: 'proFactoryName', title: '加工厂名称', width: 100}
                ,{field: 'shipReqments', title: '出货要求', width: 100}
                ,{field: 'batchNo', title: 'BATCH NO', width: 120}
            ];
            if('0' == '1' ){
                attrCol = [
                    {type: 'numbers', title: '序号', width: 60, fixed: 'left'}
                    ,{field: 'inDate', title: '入仓日期', width: 110, fixed: 'left'}
                    ,{field: 'customerName', title: '货主', width: 210, fixed: 'left'}
                    ,{field: 'custOrderNo', title: '客户单号', width: 180, fixed: 'left'}
                    ,{field: 'goodsModel', title: '规格型号', width: 200}
                    ,{field: 'unit', title: '单位', width: 70}
                    ,{field: 'stockNumView', title: '入库数量', width: 150}
                    ,{field: 'goodsName', title: '商品名称', width: 180}
                    ,{field: 'goodsBrand', title: '品牌', width: 150}
                    ,{field: 'goodsNumber', title: 'HS编码', width: 160}
                    ,{field: 'originPlace', title: '原产地', width: 100}
                    ,{field: 'supplyName', title: '供应商', width: 270}
                    ,{field: 'sysOrderNo', title: '系统订单号', width: 170}
                    ,{field: 'inBgBillNo', title: '入仓报关单号', width: 180}
                    ,{field: 'dateCode', title: 'DATE CODE', width: 180}
                    ,{field: 'binCode', title: 'BIN/CAT CODE', width: 180}
                    ,{field: 'binCode2', title: 'BIN CODE2', width: 180}
                    ,{field: 'lot', title: '批次号', width: 150}
                    ,{field: 'carton', title: '森宝箱号', width: 150}
                    ,{field: 'locationCode', title: '储位', width: 150}
                    ,{field: 'itemNumber', title: '料号', width: 150}
                    ,{field: 'categories', title: '大类', width: 150}
                    ,{field: 'mediumBoxNum', title: '中箱号', width: 150}
                    ,{field: 'proFactoryName', title: '加工厂名称', width: 100}
                    ,{field: 'shipReqments', title: '出货要求', width: 100}
                    ,{field: 'zoneCode', title: '库区代码', width: 100}
                    ,{field: 'batchNo', title: 'BATCH NO', width: 120}
                ];

                if('1' == '10' ){
                    $('#exportBtn').hide();
                }
            };

            var tableIns = table.render({
                elem: '#stockReportTable'
                ,data:[]
                ,method: 'post'
                ,cols: [attrCol]
                ,page: page
                ,text: {
                    none: '<div class="start"><p>请在上方添加条件开始查询吧！</p></div>' //默认：无数据。注：该属性为 layui 2.2.5 开始新增
                }
                ,sort: true,done: tableDone
            });

            //执行一个laydate实例
            laydate.render({
                elem: '#search_GTE_createTime' //指定元素
                , theme: 'molv'
                , done: function (value, date, endDate) {
                    var startDate = new Date(value).getTime();
                    var endTime = new Date($('#search_LTE_createTime').val()).getTime();
                    if (endTime < startDate) {
                        layer.msg('结束时间不能小于开始时间');
                        $('#search_GTE_createTime').val($('#search_LTE_createTime').val());
                    }
                }
            });

            laydate.render({
                elem: '#search_LTE_createTime' //指定元素
                , theme: 'molv'
                , done: function (value, date, endDate) {
                    var startDate = new Date($('#search_GTE_createTime').val()).getTime();
                    var endTime = new Date(value).getTime();
                    if (endTime < startDate) {
                        layer.msg('结束时间不能小于开始时间');
                        $('#search_LTE_createTime').val($('#search_GTE_createTime').val());
                    }
                }
            });

            $('#queryBtn').on('click', function () {
                if(!isValidForm()) {
                    layer.msg("请至少添加一个条件查询哦！");
                    return;
                }

                var loading = layer.msg('系统处理中，请稍后...',{shade:0.3});

                //执行重载
                tableIns.reload({
                    url: '/server/stockReport/list',
                    where: getPostData('#stockReportListForm'),
                    text: {
                        none: '<div class="search-null"><p>呃…啥也没找到哦～</p><p>请检查查询条件是否正确！</p></div>' //默认：无数据。注：该属性为 layui 2.2.5 开始新增
                    },
                    done: function (res, curr, count) {
                        layer.close(loading);
                    }
                });
            });

            $('#exportBtn').on('click', function() {
                if(!isValidForm()) {
                    layer.msg("请至少添加一个条件查询哦！");
                    return;
                }
                exportExcel('#stockReportListForm', 'stockReport/exportStock');
            });

            $('#weekBtn').on('click', function () {
                queryByDaysAgo(7);
            });

            $('#monthBtn').on('click', function () {
                queryByDaysAgo(30);
            });
        });
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