new function() {
	let ws_mona = null;
	let connected_mona = false;

	let open_mona = function() {
		let url_mona = "wss://ws.zaif.jp:8888/ws?currency_pair=mona_jpy"
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
		$('#widget_mona_price').empty();
		$('#mona_updown').empty();
		$('#mona_percent').empty();
		$('#widget_mona_price').append(ws_monajson["last_price"].price_raw+"円");
		let mona_percent = (1 - ws_monajson["candles"]["1d"].open / ws_monajson["last_price"].price_raw)*100
		mona_percent = Math.floor( mona_percent * Math.pow( 10, widget_n ) ) / Math.pow( 10, widget_n )
		if(mona_percent == 0){
			$('#mona_updown').append("±")
			$('#mona_percent').append(mona_percent+"%")
			$('#header_widget_mona_ROC').css({"color":"green"});
			$('#chat_widget_mona_ROC').css({"background-color":"#DDDDDD"});
		}else if(/^([1-9]\d*|0)(\.\d+)?$/.test(mona_percent)){
			$('#mona_updown').append("↑")
			$('#mona_percent').append(`+${mona_percent}%`)
			$('#header_widget_mona_ROC').css({"color":"blue"});
			$('#chat_widget_mona_ROC').css({"background-color":"limegreen"});
		}else if(/^[-]?([1-9]\d*|0)(\.\d+)?$/.test(mona_percent)){
			$('#mona_updown').append("↓")
			$('#mona_percent').append(mona_percent+"%")
			$('#header_widget_mona_ROC').css({"color":"red"});
			$('#chat_widget_mona_ROC').css({"background-color":"red"});
		}
	}

	WebSocketClient_mona = {
		init: function() {
			close_mona();
			open_mona();
			console.log("mona_start")
		}
	};
}

chrome.storage.local.get(["MONA"],function(value){
	if(value.MONA == "show"){
		$(function() {
			WebSocketClient_mona.init();
		})
	}
})
$(function(){
	setInterval(function(){
		WebSocketClient_mona.init();
		console.log("ReConnecting")
	},120000)
})
