/*
* @Author: dell
* @Date:   2017-04-03 21:41:41
* @Last Modified by:   dell
* @Last Modified time: 2017-04-05 15:07:13
*/
window.onload = function(){
	var designWidth = 375;

	function fontSize(){
		var CW = document.documentElement.clientWidth;
		var size = CW/designWidth*100+"px";
		document.querySelector("html").style .fontSize=size;
		console.log(size);
	}
	fontSize();
	window . onresize=fontSize;
}
