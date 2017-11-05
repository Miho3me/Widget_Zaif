new function() {
	let ws = null;
	let connected = false;

	let open = function() {
		let url = "wss://ws.zaif.jp/stream?currency_pair=btc_jpy"
		ws = new WebSocket(url);
		ws.onopen = onOpen;
		ws.onmessage = onMessage;
		ws.onerror = onError;
	}

	let close = function() {
		if (ws) {
			console.log('CLOSING ...');
			ws.close();
		}
		connected = false;
	}

	let onOpen = function() {
		connected = true;
	};

	let onMessage = function(event) {
		let data = event.data;
		addMessage(data);
	};

	let onError = function(event) {
		alert(event.data);
	}


	let addMessage = function(data) {
    let wsjson = JSON.parse(data);
    $('#btc_price').empty();
    $('#btc_price').append(wsjson["last_price"].price)
	}

	WebSocketClient = {
		init: function() {
			close();
			open();
		}
	};
}

$(function() {
	WebSocketClient.init();
});
