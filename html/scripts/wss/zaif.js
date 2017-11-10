new function() {
	let ws_zaif = null;
	let connected_zaif = false;

	let open_zaif = function() {
		let url_zaif = "wss://ws.zaif.jp:8888/ws?currency_pair=zaif_jpy"
		ws_zaif = new WebSocket(url_zaif);
		ws_zaif.onopen = onOpen_zaif;
		ws_zaif.onmessage = onMessage_zaif;
		ws_zaif.onerror = onError_zaif;
	}

	let close_zaif = function() {
		if (ws_zaif) {
			console.log('CLOSING ...');
			ws_zaif.close();
		}
		connected_zaif = false;
	}

	let onOpen_zaif = function() {
		connected_zaif = true;
	};

	let onMessage_zaif = function(event) {
		let data = event.data;
		addMessage_zaif(data);
	};

	let onError_zaif = function(event) {
		console.log("エラーにより価格取得を停止")
	}


	let addMessage_zaif = function(data) {
    let ws_zaifjson = JSON.parse(data);
		$('#zaif_price').empty();
		$('#zaif_updown').empty();
		$('#zaif_last_price').empty();
		$('#zaif_price').append(ws_zaifjson["last_price"].price_raw+"円");
		let zaif_percent = (1 - ws_zaifjson["candles"]["1d"].open / ws_zaifjson["last_price"].price_raw)*100
		zaif_percent = Math.floor( zaif_percent * Math.pow( 10, widget_n ) ) / Math.pow( 10, widget_n )
		if(zaif_percent == 0){
			$('#zaif_updown').append("±")
			$('#zaif_last_price').append(zaif_percent+"%")
			$('#zaif_color').css({"color":"green"});
		}else if(/^([1-9]\d*|0)(\.\d+)?$/.test(zaif_percent)){
			$('#zaif_updown').append("↑")
			$('#zaif_last_price').append(`+${zaif_percent}%`)
			$('#zaif_color').css({"color":"blue"});
		}else if(/^[-]?([1-9]\d*|0)(\.\d+)?$/.test(zaif_percent)){
			$('#zaif_updown').append("↓")
			$('#zaif_last_price').append(zaif_percent+"%")
			$('#zaif_color').css({"color":"red"});
		}
	}

	WebSocketClient_zaif = {
		init: function() {
			close_zaif();
			open_zaif();
			console.log("zaif_start")
		}
	};
}

chrome.storage.local.get(["ZAIF"],function(value){
	if(value.ZAIF == "show"){
		$(function() {
			WebSocketClient_zaif.init();
		})
	}
})
