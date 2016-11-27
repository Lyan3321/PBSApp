define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("res!$UI/system/lib/jquery/jquery-1.11.1.js");
	require("cordova!cordova-plugin-geolocation");
	var Message = require("$UI/system/components/justep/common/common");
	
	var flagMapLoaded = false;
	
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.showPopMenu = function(event) {
		this.comp("popMenu1").show();
	};

	Model.prototype.btnLocateClick = function(event){
	};
	
	Model.prototype.button8Click = function(event){
	};
	
	Model.prototype.modelLoad = function(event){

	};
	
	Model.prototype.contentMapActive = function(event){
		var me = this;
		if(flagMapLoaded) return;
		
		function successCallback(position){
			var id = me.getIDByXID("contentMap");
			window._baiduInit = function() {
				var point = new BMap.Point(position.coords.longitude,position.coords.latitude);
				//这里des_point的经纬度需要从数据库中取出，选择最近的站点需要后台计算得出，比较麻烦！可设计为手动选择
				var des_point = new BMap.Point(120.3619053,30.318923);
				
				var map = new BMap.Map(id);
				map.centerAndZoom(point, 18);
				map.addControl(new BMap.MapTypeControl());
				map.setCurrentCity("杭州");
				var marker = new BMap.Marker(point);
				map.addOverlay(marker);//添加标记
				marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
				flagMapLoaded = true;
				
				//添加步行路线，需要当前位置position和目的地位置des_position，可添加信息栏。
				var walking = new BMap.WalkingRoute(map, {renderOptions:{map: map, autoViewport: true}});
				walking.search(point,des_point);
			};

			require([ 'http://api.map.baidu.com/api?v=1.4&ak=4HCrmRx4bMnhxsD43Hi1KwQ0SEfYv1TQ&callback=_baiduInit' ], function() {
				if (!(window.BMap && window.BMap.apiLoad)){
					window._baiduInit();
				}
			});
	
		}
		function errorCallback(error){
			alert("定位失败！，使用默认位置。");
			flagMapLoaded = false;
			var id = me.getIDByXID("contentMap");
			window.locfail = function() {
				var map = new BMap.Map(id);
				map.centerAndZoom("杭州", 18);
				var navigationControl = new BMap.NavigationControl({
					// 靠左上角位置
					anchor: BMAP_ANCHOR_TOP_LEFT,
					// LARGE类型
					type: BMAP_NAVIGATION_CONTROL_LARGE,
					// 启用显示定位
					enableGeolocation: true
				});
				map.addControl(navigationControl);
				// 添加定位控件
				var geolocationControl = new BMap.GeolocationControl();
				geolocationControl.addEventListener("locationSuccess", function(e){
					// 定位成功事件
					var address = '';
					address += e.addressComponent.province;
					address += e.addressComponent.city;
					address += e.addressComponent.district;
					address += e.addressComponent.street;
					address += e.addressComponent.streetNumber;
					alert("当前定位地址为：" + address);
				});
				geolocationControl.addEventListener("locationError",function(e){
					// 定位失败事件
					alert(e.message);
				});
				map.addControl(geolocationControl);
				map.enableScrollWheelZoom(true);
			};

			require([ 'http://api.map.baidu.com/api?v=2.0&ak=4HCrmRx4bMnhxsD43Hi1KwQ0SEfYv1TQ&callback=locfail' ], function() {
				if (!(window.BMap && window.BMap.apiLoad)){
					window.locfail();
				}
			});
		}
		navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
	};
	
	Model.prototype.contentMapLoad = function(event){

	};
	
	return Model;
});