window.__justep.__ResourceEngine.loadCss([{url: '/v_8f0a81c41b184fd8aed04e014884b12el_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_3e9744f853c14310b81a5a0cda336306l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_226242ed559b42b8b9e728dd2c776b6al_zh_CNs_d_m/system/components/comp2.min.js','/v_3fe2b0cf9a154292907ba4022239b8cfl_zh_CNs_d_m/system/core.min.js','/v_2f291a964de64e74a9289cf1584f2a11l_zh_CNs_d_m/system/common.min.js','/v_4cde8e9b868b4e398c529b406007aa55l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/menu/menu');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/popMenu/popMenu');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/button/buttonGroup');
require('$model/UI2/system/components/bootstrap/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/PBSHelper/index'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cNjy6vy';
	this._flag_='66dee53525947b2407d03d134b2e5e53';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"name":{"define":"name","label":"名字","name":"name","relation":"name","type":"String"}},"directDelete":false,"events":{},"idColumn":"name","initData":"[{\"name\":\"放大看啥两款发动机啊付款即可了非金属矿\"},{\"name\":\"快快回家看韩剧好看\"}]","limit":20,"xid":"test"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":false,"defCols":{"duration":{"define":"duration","label":"时长","name":"duration","relation":"duration","rules":{"number":true},"type":"Double"},"isComplete":{"define":"isComplete","label":"是否归还","name":"isComplete","relation":"isComplete","rules":{"integer":true},"type":"Integer"},"recordID":{"define":"recordID","label":"记录编号","name":"recordID","relation":"recordID","type":"String"},"tCheckIn":{"define":"tCheckIn","label":"归还时间","name":"tCheckIn","relation":"tCheckIn","type":"String"},"tCheckout":{"define":"tCheckout","label":"借出时间","name":"tCheckout","relation":"tCheckout","type":"String"}},"directDelete":false,"events":{},"idColumn":"recordID","initData":"[{\"recordID\":\"1\",\"tCheckout\":\"2016-11-10 10:12:23\",\"tCheckIn\":\"2016-11-10 10:28:00\",\"duration\":15.5,\"isComplete\":1},{\"recordID\":\"2\",\"tCheckout\":\"2016-11-10 13:00:00\",\"tCheckIn\":\"2016-11-10 13:35:00\",\"duration\":35,\"isComplete\":1}]","limit":-1,"xid":"dataRecord"});
}}); 
return __result;});
