/* File Created: 十二月 9, 2014 */
require.config({
    paths: {
        jquery: 'jquery-1.9.1.min',
        dialog:'jquery.dialog',
        defineV:'dialogFun'
    }
});

require(['jquery','dialog'],function  () {
	// body...
	require(['defineV'],function (defineV) {
		<!--弹出框-->
		$('#alertXX').bind('click',function(){
			defineV.alertA();
		});
		<!--确认框-->
		$('#confirmXX').bind('click',function(){
			defineV.confirmA();
		});
		<!--窗口-->
		$('#windowXX').bind('click',function(){
			defineV.windowA();
		});
	});
});