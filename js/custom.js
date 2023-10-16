// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
	if (document.hidden) {
		$('[rel="icon"]').attr('href', "/img/newtubiao.png");
		document.title = '天天O_O';
		clearTimeout(titleTime);
	} else {
		$('[rel="icon"]').attr('href', "/img/newtubiao.png");
		document.title = '(ฅ>ω<*ฅ) 天天开心哦~';
		titleTime = setTimeout(function() {
			document.title = OriginTitle;
		}, 2000);
	}
});