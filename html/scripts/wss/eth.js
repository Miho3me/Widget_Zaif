new function() {
	let ws_eth = null;
	let connected_eth = false;

	let open_eth = function() {
		let url_eth = "wss://ws.zaif.jp:8888/ws?currency_pair=eth_jpy"
		ws_eth = new WebSocket(url_eth);
		ws_eth.onopen = onOpen_eth;
		ws_eth.onmessage = onMessage_eth;
		ws_eth.onerror = onError_eth;
	}

	let close_eth = function() {
		if (ws_eth) {
			console.log('CLOSING ...');
			ws_eth.close();
		}
		connected_eth = false;
	}

	let onOpen_eth = function() {
		connected_eth = true;
	};

	let onMessage_eth = function(event) {
		let data = event.data;
		addMessage_eth(data);
	};

	let onError_eth = function(event) {
		console.log("エラーにより価格取得を停止")
	}


	let addMessage_eth = function(data) {
		let ws_ethjson = JSON.parse(data);
		$('#eth_price').empty();
		$('#eth_updown').empty();
		$('#eth_last_price').empty();
		$('#eth_price').append(ws_ethjson["last_price"].price_raw+"円");
		let eth_percent = (1 - ws_ethjson["candles"]["1d"].open / ws_ethjson["last_price"].price_raw)*100
		eth_percent = Math.floor( eth_percent * Math.pow( 10, widget_n ) ) / Math.pow( 10, widget_n )
		if(eth_percent == 0){
			$('#eth_updown').append("±")
			$('#eth_last_price').append(eth_percent+"%")
			$('#eth_color').css({"color":"green"});
		}else if(/^([1-9]\d*|0)(\.\d+)?$/.test(eth_percent)){
			$('#eth_updown').append("↑")
			$('#eth_last_price').append(`+${eth_percent}%`)
			$('#eth_color').css({"color":"blue"});
		}else if(/^[-]?([1-9]\d*|0)(\.\d+)?$/.test(eth_percent)){
			$('#eth_updown').append("↓")
			$('#eth_last_price').append(eth_percent+"%")
			$('#eth_color').css({"color":"red"});
		}
	}

	WebSocketClient_eth = {
		init: function() {
			close_eth();
			open_eth();
			console.log("eth_start")
		}
	};
}

chrome.storage.local.get(["ETH"],function(value){
	if(value.ETH == "show"){
		$(function() {
			WebSocketClient_eth.init();
		})
	}
})
