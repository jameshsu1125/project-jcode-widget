(function () {
	setTimeout(function () {
		(window.jQuery && init()) || loadScript('https://code.jquery.com/jquery-3.1.1.min.js', init);
	}, 200);

	function loadScript(url, callback) {
		var script = document.createElement('script');
		script.type = 'text/javascript';

		if (script.readyState) {
			script.onreadystatechange = function () {
				if (script.readyState == 'loaded' || script.readyState == 'complete') {
					script.onreadystatechange = null;
					callback();
				}
			};
		} else {
			script.onload = function () {
				callback();
			};
		}

		script.src = url;
		document.getElementsByTagName('head')[0].appendChild(script);
	}

	function init() {
		var $ = window.jQuery || $;

		var uu = [
			'大甲媽平安鎖',
			'大甲媽橢圓',
			'大甲媽-純金招財錢母紅包袋',
			'卡娜赫拉的小動物-純金招財錢母紅包袋',
			'大甲媽-袋來財富虎爺-黃金琉璃墜子',
			'大甲媽-袋來金榜好運文昌-黃金琉璃墜子',
			'大甲媽-純金招財錢母紅包袋-dajiamazu',
			'大甲媽-黃金紅包袋',
			'金湯匙圍兜兜禮盒-giftsforbaby',
		];

		for (var i = 0; i < uu.length; i++) {
			if (window.location.href.indexOf(encodeURIComponent(uu[i])) >= 0) $('.out-of-stock').remove();
		}
		return true;
	}
})();
