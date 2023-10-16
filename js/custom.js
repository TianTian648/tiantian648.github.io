// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
	if (document.hidden) {
		document.title = '╭(°A°`)╮天天O_O';
		clearTimeout(titleTime);
	} else {
		document.title = '(ฅ>ω<*ฅ)tiantian！' + OriginTitle;
		titleTime = setTimeout(function() {
			document.title = OriginTitle;
		}, 2000);
	}
});