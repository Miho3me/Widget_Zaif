let widget_n = 2;
let currency_list = {
  "BTC":{"small":"btc","name":"bitcoin","url":"https://zaif.jp/trade_btc_jpy","img":"https://raw.githubusercontent.com/Miho3me/widget_logo/master/bitcoin.png"},
  "XEM":{"small":"xem","name":"NEM","url":"https://zaif.jp/trade_xem_jpy","img":"https://raw.githubusercontent.com/Miho3me/widget_logo/master/nem.png"},
  "MONA":{"small":"mona","name":"Monacoin","url":"https://zaif.jp/trade_mona_jpy","img":"https://raw.githubusercontent.com/Miho3me/widget_logo/master/monacoin.png"},
  "BCH":{"small":"bch","name":"BitcoinCash","url":"https://zaif.jp/trade/bch_jpy","img":"https://raw.githubusercontent.com/Miho3me/widget_logo/master/bitcoincash.png"},
  "ETH":{"small":"eth","name":"Ethereum","url":"https://zaif.jp/trade/eth_jpy","img":"https://raw.githubusercontent.com/Miho3me/widget_logo/master/ethereum.png"},
  "AirFX":{"small":"airfx","name":"BTC_AirFX","url":"https://zaif.jp/trade_futures_btc_jpy/1","img":"https://raw.githubusercontent.com/Miho3me/widget_logo/master/bitcoin.png"},
  "ZAIF":{"small":"zaif","name":"Zaif_token","url":"https://zaif.jp/trade/zaif_jpy","img":"https://raw.githubusercontent.com/Miho3me/widget_logo/master/zaif_token.png"}
};
$(function(){
  chrome.storage.local.get(["view_location"],function(value){
    if(value.view_location == "header"){
      $("#header_message").after(`<div style="height:100px;padding:0px 10px 10px 10px" id="header_widget">
        <table align="center" id="header_currency_table" style="text-align: center"><tr></tr></table>
      </div>`);
      for(key in currency_list){
        console.log(key)
        $("#header_currency_table tr").append(`<td class="header_widget_td ${currency_list[key].name}td">
          <a class="price ${currency_list[key].name}" href="${currency_list[key].url}">
            <img class="currency_logo" src="${currency_list[key].img}">
            <p class="name">${key}</p>
            <p id="widget_${currency_list[key].small}_price">価格取得中...</p>
            <p id="header_widget_${currency_list[key].small}_ROC"><span id="${currency_list[key].small}_updown"></span><span id="${currency_list[key].small}_percent">準備中</span></p>
          </a>
        </td>`);
      }
      $(".Zaif_tokentd").css({"border-left":"2px solid gray"});
    }else if(value.view_location == "chat"){
      $("#page__trade__chat_tab_link").text("価格一覧")
      $("#chat-box").empty();
      $("#chat-box").after(`<div style="text-align:left">
        <div align="center" class="chat-currency_table"></div>
      </div>`);
      for(key in currency_list){
        $(".chat-currency_table").append(`<div class="chat_widget_div ${currency_list[key].name}td">
          <a class="${currency_list[key].name}" href="${currency_list[key].url}">
            <img class="currency_logo" src="${currency_list[key].img}" vertical-align:middle;>
            <span class="chat-currency_name">${key}</span>
            <span class="widget-price">
              <span class="inprice" id="widget_${currency_list[key].small}_price">価格取得中...</span>
              <span class="widget_percent" id="chat_widget_${currency_list[key].small}_ROC">
                <span class="priceheight" id="${currency_list[key].small}_percent">準備中</span>
              </span>
            </span>
          </a>
        </div>`);
      }
    }
    chrome.storage.local.get(["BTC"],function(value){
      if(value.BTC == "hide"){
        $(".bitcointd").remove();
      }
    })
    chrome.storage.local.get(["XEM"],function(value){
      if(value.XEM == "hide"){
        $(".NEMtd").remove();
      }
    })
    chrome.storage.local.get(["MONA"],function(value){
      if(value.MONA == "hide"){
        $(".Monacointd").remove();
      }
    })
    chrome.storage.local.get(["BCH"],function(value){
      if(value.BCH == "hide"){
        $(".BitcoinCashtd").remove();
      }
    })
    chrome.storage.local.get(["ETH"],function(value){
      if(value.ETH == "hide"){
        $(".Ethereumtd").remove();
      }
    })
    chrome.storage.local.get(["AirFX"],function(value){
      if(value.AirFX == "hide"){
        $(".BTC_AirFXtd").remove();
      }
    })
    chrome.storage.local.get(["ZAIF"],function(value){
      if(value.ZAIF == "hide"){
        $(".Zaif_tokentd").remove();
      }
    })
  })
})
