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
		defineV.alertA();
	});
});