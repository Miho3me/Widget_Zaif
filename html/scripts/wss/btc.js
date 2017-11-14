new function() {
	let ws = null;
	let connected = false;

	let open = function() {
		let url = "wss://ws.zaif.jp:8888/ws?currency_pair=btc_jpy"
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
		console.log("エラーにより価格取得を停止")
	}


	let addMessage = function(data) {
    let wsjson = JSON.parse(data);
    $('#widget_btc_price').empty();
		$('#btc_updown').empty();
		$('#btc_percent').empty();
    $('#widget_btc_price').append(wsjson["last_price"].price_raw+"円");
		let btc_percent = (1 - wsjson["candles"]["1d"].open / wsjson["last_price"].price_raw)*100
		btc_percent = Math.floor( btc_percent * Math.pow( 10, widget_n ) ) / Math.pow( 10, widget_n )
		if(btc_percent == 0){
			$('#btc_updown').append("±")
			$('#btc_percent').append(btc_percent+"%")
			$('#header_widget_btc_ROC').css({"color":"green"});
			$('#chat_widget_btc_ROC').css({"background-color":"#DDDDDD"});
		}else if(/^([1-9]\d*|0)(\.\d+)?$/.test(btc_percent)){
			$('#btc_updown').append("↑")
			$('#btc_percent').append(`+${btc_percent}%`)
			$('#header_widget_btc_ROC').css({"color":"blue"});
			$('#chat_widget_btc_ROC').css({"background-color":"limegreen"});
		}else if(/^[-]?([1-9]\d*|0)(\.\d+)?$/.test(btc_percent)){
			$('#btc_updown').append("↓")
			$('#btc_percent').append(btc_percent+"%")
			$('#header_widget_btc_ROC').css({"color":"red"});
			$('#chat_widget_btc_ROC').css({"background-color":"red"});
		}
	}

	WebSocketClient = {
		init: function() {
			close();
			open();
		}
	};
}
chrome.storage.local.get(["BTC"],function(value){
	if(value.BTC == "show"){
		$(function() {
			WebSocketClient.init();
		})
	}
})
$(function(){
	setInterval(function(){
		WebSocketClient.init();
		console.log("ReConnecting")
	},120000)
})
