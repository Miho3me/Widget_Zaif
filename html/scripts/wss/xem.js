new function() {
	let ws_xem = null;
	let connected_xem = false;

	let open_xem = function() {
		let url_xem = "wss://ws.zaif.jp:8888/ws?currency_pair=xem_jpy"
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
		$('#widget_xem_price').empty();
		$('#xem_updown').empty();
		$('#xem_percent').empty();
		$('#widget_xem_price').append(ws_xemjson["last_price"].price_raw+"円");
		let xem_percent = (1 - ws_xemjson["candles"]["1d"].open / ws_xemjson["last_price"].price_raw)*100
		xem_percent = Math.floor( xem_percent * Math.pow( 10, widget_n ) ) / Math.pow( 10, widget_n )
		if(xem_percent == 0){
			$('#xem_updown').append("±")
			$('#xem_percent').append(xem_percent+"%")
			$('#header_widget_xem_ROC').css({"color":"green"});
			$('#chat_widget_xem_ROC').css({"background-color":"#DDDDDD"});
		}else if(/^([1-9]\d*|0)(\.\d+)?$/.test(xem_percent)){
			$('#xem_updown').append("↑")
			$('#xem_percent').append(`+${xem_percent}%`)
			$('#header_widget_xem_ROC').css({"color":"blue"});
			$('#chat_widget_xem_ROC').css({"background-color":"limegreen"});
		}else if(/^[-]?([1-9]\d*|0)(\.\d+)?$/.test(xem_percent)){
			$('#xem_updown').append("↓")
			$('#xem_percent').append(xem_percent+"%")
			$('#header_widget_xem_ROC').css({"color":"red"});
			$('#chat_widget_xem_ROC').css({"background-color":"red"});
		}
	}

	WebSocketClient_xem = {
		init: function() {
			close_xem();
			open_xem();
			console.log("xem_start")
		}
	};
}

chrome.storage.local.get(["XEM"],function(value){
	if(value.XEM == "show"){
		$(function() {
			WebSocketClient_xem.init();
		})
	}
})
