new function() {
	let ws_bch = null;
	let connected_bch = false;

	let open_bch = function() {
		let url_bch = "wss://ws.zaif.jp:8888/ws?currency_pair=bch_jpy"
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
		if(ws_bchjson["candles"]["4h"]){
	    $('#widget_bch_price').empty();
			$('#bch_updown').empty();
			$('#bch_percent').empty();
	    $('#widget_bch_price').append(ws_bchjson["last_price"].price_raw+"円");
			let bch_percent = (1 - ws_bchjson["candles"]["1d"].open / ws_bchjson["last_price"].price_raw)*100
			bch_percent = Math.floor( bch_percent * Math.pow( 10, widget_n ) ) / Math.pow( 10, widget_n )
			if(bch_percent == 0){
				$('#bch_updown').append("±")
				$('#bch_percent').append(bch_percent+"%")
				$('#header_widget_bch_ROC').css({"color":"green"});
				$('#chat_widget_bch_ROC').css({"background-color":"#DDDDDD"});
			}else if(/^([1-9]\d*|0)(\.\d+)?$/.test(bch_percent)){
				$('#bch_updown').append("↑")
				$('#bch_percent').append(`+${bch_percent}%`)
				$('#header_widget_bch_ROC').css({"color":"blue"});
				$('#chat_widget_bch_ROC').css({"background-color":"limegreen"});
			}else if(/^[-]?([1-9]\d*|0)(\.\d+)?$/.test(bch_percent)){
				$('#bch_updown').append("↓")
				$('#bch_percent').append(bch_percent+"%")
				$('#header_widget_bch_ROC').css({"color":"red"});
				$('#chat_widget_bch_ROC').css({"background-color":"red"});
			}
		}
	}

	WebSocketClient_bch = {
		init: function() {
			close_bch();
			open_bch();
			console.log("bch_start")
		}
	};
}

chrome.storage.local.get(["BCH"],function(value){
	if(value.BCH == "show"){
		$(function() {
			WebSocketClient_bch.init();
		})
	}
})
$(function(){
	setInterval(function(){
		chrome.storage.local.get(["BCH"],function(value){
			if(value.BCH == "show"){
				WebSocketClient_bch.init();
				console.log("ReConnecting")
			}
		})
	},reconnecting_time)
})
