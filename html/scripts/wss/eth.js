new function() {
	let ws_eth = null;
	let connected_eth = false;

	let open_eth = function() {
		let url_eth = "wss://ws.zaif.jp/stream?currency_pair=eth_jpy"
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
    $('#eth_price').append(ws_ethjson["last_price"].price+"円")
	}

	WebSocketClient_eth = {
		init: function() {
			close_eth();
			open_eth();
			console.log("eth_start")
		}
	};
}

$(function() {
	WebSocketClient_eth.init();
});
