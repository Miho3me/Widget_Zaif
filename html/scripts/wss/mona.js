new function() {
	let ws_mona = null;
	let connected_mona = false;

	let open_mona = function() {
		let url_mona = "wss://ws.zaif.jp/stream?currency_pair=mona_jpy"
		ws_mona = new WebSocket(url_mona);
		ws_mona.onopen = onOpen_mona;
		ws_mona.onmessage = onMessage_mona;
		ws_mona.onerror = onError_mona;
	}

	let close_mona = function() {
		if (ws_mona) {
			console.log('CLOSING ...');
			ws_mona.close();
		}
		connected_mona = false;
	}

	let onOpen_mona = function() {
		connected_mona = true;
	};

	let onMessage_mona = function(event) {
		let data = event.data;
		addMessage_mona(data);
	};

	let onError_mona = function(event) {
		console.log("エラーにより価格取得を停止")
	}


	let addMessage_mona = function(data) {
    let ws_monajson = JSON.parse(data);
    $('#mona_price').empty();
    $('#mona_price').append(ws_monajson["last_price"].price+"円")
	}

	WebSocketClient_mona = {
		init: function() {
			close_mona();
			open_mona();
			console.log("mona_start")
		}
	};
}

$(function() {
	WebSocketClient_mona.init();
});
