let widget_n = 2;
let currency_list = {
  "BTC":{"small":"btc","name":"bitcoin","url":"https://zaif.jp/trade_btc_jpy","img":"https://raw.githubusercontent.com/Miho3me/widget_logo/master/bitcoin.png"},
  "XEM":{"small":"xem","name":"NEM","url":"https://zaif.jp/trade_xem_jpy","img":"https://raw.githubusercontent.com/Miho3me/widget_logo/master/nem.png"},
  "MONA":{"small":"mona","name":"Monacoin","url":"https://zaif.jp/trade_mona_jpy","img":"https://raw.githubusercontent.com/Miho3me/widget_logo/master/Monacoin.png"},
  "BCH":{"small":"bch","name":"BitcoinCash","url":"https://zaif.jp/trade/bch_jpy","img":"https://raw.githubusercontent.com/Miho3me/widget_logo/master/bch_logo.png"},
  "ETH":{"small":"eth","name":"Ethereum","url":"https://zaif.jp/trade/eth_jpy","img":"https://raw.githubusercontent.com/Miho3me/widget_logo/master/ethereum.png"},
  "ZAIF":{"small":"zaif","name":"Zaif_token","url":"https://zaif.jp/trade/zaif_jpy","img":"https://pbs.twimg.com/profile_images/572797125616885760/SAPmSoLE_400x400.png"}
  }
$(function(){
  $("#header_message").after(`<div style="height:108px;padding:0px 10px 10px 10px" id="widget-ex">
      <table align="center" class="currency_table" style="text-align: center"><tr></tr></table>
  </div>`);
  for(key in currency_list){
    $(".currency_table tr").append(`<td currency="${currency_list[key].name}" class="widget ${currency_list[key].name}td">
      <a class="price ${currency_list[key].name}" href="${currency_list[key].url}">
        <img class="currency_logo" src="${currency_list[key].img}">
        <p class="name">${key}</p>
        <p id="${currency_list[key].small}_price">価格取得中...</p>
        <p id="${currency_list[key].small}_color"><span id="${currency_list[key].small}_updown"></span><span id="${currency_list[key].small}_last_price">準備中</span></p>
      </a>
    </td>`);
  }
  $(".Zaif_tokentd").css({"border-left":"2px solid gray"});
  chrome.storage.local.get(["BTC"],function(value){
    if(value.BTC == "hide"){
      $(".bitcoind").remove();
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
  chrome.storage.local.get(["ZAIF"],function(value){
    if(value.ZAIF == "hide"){
      $(".Zaif_tokentd").remove();
    }
  })
})
