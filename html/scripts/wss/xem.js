new function() {
	let ws_xem = null;
	let connected_xem = false;

	let open_xem = function() {
		let url_xem = "wss://ws.zaif.jp/stream?currency_pair=xem_jpy"
		ws_xem = new WebSocket(url_xem);
		ws_xem.onopen = onOpen_xem;
		ws_xem.onmessage = onMessage_xem;
		ws_xem.onerror = onError_xem;
	}

	let close_xem = function() {
		if (ws_xem) {
			console.log('CLOSING ...');
			ws_xem.close();
		}
		connected_xem = false;
	}

	let onOpen_xem = function() {
		connected_xem = true;
	};

	let onMessage_xem = function(event) {
		let data = event.data;
		addMessage_xem(data);
	};

	let onError_xem = function(event) {
		console.log("エラーにより価格取得を停止")
	}


	let addMessage_xem = function(data) {
    let ws_xemjson = JSON.parse(data);
    $('#xem_price').empty();
    $('#xem_price').append(ws_xemjson["last_price"].price+"円")
	}

	WebSocketClient_xem = {
		init: function() {
			close_xem();
			open_xem();
			console.log("xem_start")
		}
	};
}

$(function() {
	WebSocketClient_xem.init();
});
