new function() {
	let ws_bch = null;
	let connected_bch = false;

	let open_bch = function() {
		let url_bch = "wss://ws.zaif.jp/stream?currency_pair=bch_jpy"
		ws_bch = new WebSocket(url_bch);
		ws_bch.onopen = onOpen_bch;
		ws_bch.onmessage = onMessage_bch;
		ws_bch.onerror = onError_bch;
	}

	let close_bch = function() {
		if (ws_bch) {
			console.log('CLOSING ...');
			ws_bch.close();
		}
		connected_bch = false;
	}

	let onOpen_bch = function() {
		connected_bch = true;
	};

	let onMessage_bch = function(event) {
		let data = event.data;
		addMessage_bch(data);
	};

	let onError_bch = function(event) {
		console.log("エラーにより価格取得を停止")
	}


	let addMessage_bch = function(data) {
    let ws_bchjson = JSON.parse(data);
    $('#bch_price').empty();
    $('#bch_price').append(ws_bchjson["last_price"].price+"円")
	}

	WebSocketClient_bch = {
		init: function() {
			close_bch();
			open_bch();
			console.log("bch_start")
		}
	};
}

$(function() {
	WebSocketClient_bch.init();
});
