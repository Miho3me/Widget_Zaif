new function() {
	let ws_airfx = null;
	let connected_airfx = false;

	let open_airfx = function() {
		let url_airfx = "wss://ws.zaif.jp:8888/ws?group_id=1&currency_pair=btc_jpy"
		ws_airfx = new WebSocket(url_airfx);
		ws_airfx.onopen = onOpen_airfx;
		ws_airfx.onmessage = onMessage_airfx;
		ws_airfx.onerror = onError_airfx;
	}

	let close_airfx = function() {
		if (ws_airfx) {
			console.log('CLOSING ...');
			ws_airfx.close();
		}
		connected_airfx = false;
	}

	let onOpen_airfx = function() {
		connected_airfx = true;
	};

	let onMessage_airfx = function(event) {
		let data = event.data;
		addMessage_airfx(data);
	};

	let onError_airfx = function(event) {
		console.log("エラーにより価格取得を停止")
	}


	let addMessage_airfx = function(data) {
    let ws_airfxjson = JSON.parse(data);
		$('#airfx_price').empty();
		$('#airfx_updown').empty();
		$('#airfx_last_price').empty();
		$('#airfx_price').append(ws_airfxjson["last_price"].price_raw+"円");
		let airfx_percent = (1 - ws_airfxjson["candles"]["1d"].open / ws_airfxjson["last_price"].price_raw)*100
		airfx_percent = Math.floor( airfx_percent * Math.pow( 10, widget_n ) ) / Math.pow( 10, widget_n )
		if(airfx_percent == 0){
			$('#airfx_updown').append("±")
			$('#airfx_last_price').append(airfx_percent+"%")
			$('#airfx_color').css({"color":"green"});
		}else if(/^([1-9]\d*|0)(\.\d+)?$/.test(airfx_percent)){
			$('#airfx_updown').append("↑")
			$('#airfx_last_price').append(`+${airfx_percent}%`)
			$('#airfx_color').css({"color":"blue"});
		}else if(/^[-]?([1-9]\d*|0)(\.\d+)?$/.test(airfx_percent)){
			$('#airfx_updown').append("↓")
			$('#airfx_last_price').append(airfx_percent+"%")
			$('#airfx_color').css({"color":"red"});
		}
	}

	WebSocketClient_airfx = {
		init: function() {
			close_airfx();
			open_airfx();
			console.log("airfx_start")
		}
	};
}

chrome.storage.local.get(["AirFX"],function(value){
	if(value.AirFX == "show"){
		$(function() {
			WebSocketClient_airfx.init();
		})
	}
})
