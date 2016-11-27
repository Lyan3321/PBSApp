<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:230px;left:438px;" onLoad="modelLoad">
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="test" idColumn="name"><column label="名字" name="name" type="String" xid="xid6"></column>
  <data xid="default3">[{&quot;name&quot;:&quot;放大看啥两款发动机啊付款即可了非金属矿&quot;},{&quot;name&quot;:&quot;快快回家看韩剧好看&quot;}]</data></div><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="dataRecord" idColumn="recordID" autoNew="false" confirmDelete="false" confirmRefresh="false" limit="-1"><column label="记录编号" name="recordID" type="String" xid="xid1"></column>
  <column label="借出时间" name="tCheckout" type="String" xid="xid2"></column>
  <column label="归还时间" name="tCheckIn" type="String" xid="xid3"></column>
  <column isCalculate="false" label="时长" name="duration" type="Double" xid="xid4"></column>
  <master xid="default1"></master>
  <column label="是否归还" name="isComplete" type="Integer" xid="xid5"></column>
  <data xid="default2">[{&quot;recordID&quot;:&quot;1&quot;,&quot;tCheckout&quot;:&quot;2016-11-10 10:12:23&quot;,&quot;tCheckIn&quot;:&quot;2016-11-10 10:28:00&quot;,&quot;duration&quot;:15.5,&quot;isComplete&quot;:1},{&quot;recordID&quot;:&quot;2&quot;,&quot;tCheckout&quot;:&quot;2016-11-10 13:00:00&quot;,&quot;tCheckIn&quot;:&quot;2016-11-10 13:35:00&quot;,&quot;duration&quot;:35,&quot;isComplete&quot;:1}]</data></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-card x-full" xid="panel1" style="height:100%;">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="公共自行车助手">
   <div class="x-titlebar-left" xid="left1"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-only-icon" label="设置" xid="button5" icon="icon-android-mixer" onClick="showPopMenu">
   <i xid="i5" class="icon-android-mixer"></i>
   <span xid="span5">设置</span></a></div>
   <div class="x-titlebar-title" xid="title1">公共自行车助手</div>
   <div class="x-titlebar-right reverse" xid="right1"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-lg btn-only-icon" label="button" xid="btnLocate" icon="icon-android-location" onClick="btnLocateClick">
   <i xid="i4" class="icon-android-location"></i>
   <span xid="span4"></span></a></div></div></div>
   <div class="x-panel-content" xid="mapArea">
  <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents1">
   <div class="x-contents-content x-cards" xid="contentFirst" style="height:100%;width:100%;background-color:white;" onActive="contentMapActive"><div component="$UI/system/components/justep/panel/panel" class="x-panel x-card x-full" xid="panel3">
   <div class="x-panel-top" xid="top2"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified" tabbed="true" xid="buttonGroup2" style="background-color:transparent;"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="去借车" xid="button1" style="width:auto;" icon="dataControl dataControl-runlog">
   <i xid="i2" class="dataControl dataControl-runlog"></i>
   <span xid="span2">去借车</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="去还车" xid="button2" style="width:auto;" icon="linear linear-sync">
   <i xid="i10" class="linear linear-sync"></i>
   <span xid="span10">去还车</span></a></div></div>
   <div class="x-panel-content" xid="contentMap"></div>
   </div></div>
  <div class="x-contents-content" xid="contentRecord"><div class="panel panel-default x-card" component="$UI/system/components/bootstrap/panel/panel" xid="panel2">
   <div class="panel-heading" xid="heading1">
    <h4 class="panel-title" xid="h41"><![CDATA[借还车记录]]>
  </h4></div> 
   <div class="panel-body" xid="body1"><div component="$UI/system/components/justep/list/list" class="x-list x-cards" xid="list1" autoLoad="true" data="dataRecord">
   <ul class="x-list-template x-min-height list-group" xid="listTemplateUl1" componentname="$UI/system/components/justep/list/list#listTemplateUl" id="undefined_listTemplateUl1">
    <li xid="li1" class="list-group-item" componentname="li(html)" id="undefined_li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col x-col-fixed x-col-center pull-left" xid="col1" style="width:auto;"><div component="$UI/system/components/justep/output/output" class="x-output pull-left" xid="output4" bind-ref='ref("recordID")' style="height:100%;"></div></div>
   <div class="x-col" xid="col2"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output3" bind-ref='ref("tCheckout")'></div></div>
   <div class="x-col" xid="col3"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output5" bind-ref='ref("tCheckIn")'></div></div>
  <div class="x-col x-col-fixed" xid="col4" style="width:auto;"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output6" bind-ref='ref("duration")'></div></div>
  <div class="x-col x-col-fixed" xid="col5" style="width:auto;"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output7" bind-ref='ref("isComplete")'></div></div></div>
  </li></ul> </div></div>
   <div class="panel-footer" xid="footer1"></div></div>
  </div>
  <div class="x-contents-content" xid="contentUser"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col" xid="col10"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit" xid="labelEdit5">
   <label class="x-label" xid="label5"><![CDATA[姓名]]></label>
   <div class="x-edit" xid="div6"></div></div></div>
   <div class="x-col" xid="col11"></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col" xid="col13"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit" xid="labelEdit6">
   <label class="x-label" xid="label6"><![CDATA[联系电话]]></label>
   <div class="x-edit" xid="div7"></div></div></div>
   <div class="x-col" xid="col14"></div>
   </div></div></div>
  </div>
   <div class="x-panel-bottom" xid="bottom1"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified" tabbed="true" xid="buttonGroup1" style="height:100%;">
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="借还车" xid="btnBorrow" style="height:100%;" icon="linear linear-bug" target="contentFirst">
   <i xid="i1" class="linear linear-bug"></i>
   <span xid="span1">借还车</span></a><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top text-primary bg-primary" label="出行记录" xid="button3" icon="linear linear-code" target="contentRecord">
   <i xid="i3" class="linear linear-code"></i>
   <span xid="span3">出行记录</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="扫码" xid="button6" icon="linear linear-bold">
   <i xid="i6" class="linear linear-bold"></i>
   <span xid="span6">扫码</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="用户" xid="btnUser" icon="icon-android-social-user" target="contentUser">
   <i xid="i9" class="icon-android-social-user"></i>
   <span xid="span9">用户</span></a></div></div></div>
  <div component="$UI/system/components/justep/popMenu/popMenu" class="x-popMenu" direction="auto" xid="popMenu1" opacity="0.1" anchor="button5">
   <div class="x-popMenu-overlay" xid="div1"></div>
   <ul component="$UI/system/components/justep/menu/menu" class="x-menu dropdown-menu x-popMenu-content" xid="menu1"><li class="x-menu-item" xid="item1">
   <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-lg" label="用户" xid="button7" icon="linear linear-chevronrightcircle">
    <i xid="i7" class="linear linear-chevronrightcircle"></i>
    <span xid="span7">用户</span></a> </li>
  <li class="x-menu-item" xid="item2">
   <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-lg" label="退出" xid="button8" icon="linear linear-clouddownload" onClick="button8Click">
    <i xid="i8" class="linear linear-clouddownload"></i>
    <span xid="span8">退出</span></a> </li></ul></div></div>