let widget_n = 2;

$(function(){
  $("#header_message").after(`<div style="height:108px;padding:0px 10px 10px 10px" id="widget-ex">
    <table align="center" class="currency_table" style="text-align: center">
      <tr>
        <td currency="bitcoin" class="widget bitcointd" >
          <a class="bitcoin price" href="https://zaif.jp/trade_btc_jpy" >
            <img class="currency_logo" src="https://raw.githubusercontent.com/Miho3me/widget_logo/master/bitcoin.png" style="width:50px;height:50px">
            <p class="name">BTC</p>
            <p id="btc_price">価格取得中</p>
            <p id="btc_color"><span id="btc_updown"></span><span id="btc_last_price">準備中</span></p>
          </a>
        </td>
        <td currency="NEM" class="widget nemtd" >
          <a class="nem price" href="https://zaif.jp/trade_xem_jpy">
            <img class="currency_logo" src="https://raw.githubusercontent.com/Miho3me/widget_logo/master/nem.png" style="width:50px;height:50px">
            <p class="name">XEM</p>
            <p id="xem_price">価格取得中</p>
            <p id="xem_color"><span id="xem_updown"></span><span id="xem_last_price">準備中</span></p>
          </a>
        </td>
        <td currency="Monacoin" class="widget monacointd" >
          <a class="monacoin price" href="https://zaif.jp/trade_mona_jpy">
            <img class="currency_logo" src="https://raw.githubusercontent.com/Miho3me/widget_logo/master/Monacoin.png" style="width:50px;height:50px">
            <p class="name">MONA</p>
            <p id="mona_price">価格取得中</p>
            <p id="mona_color"><span id="mona_updown"></span><span id="mona_last_price">準備中</span></p>
          </a>
        </td>
        <td currency="BitcoinCash" class="widget BitcoinCashtd" >
          <a class="BitcoinCash price" href="https://zaif.jp/trade/bch_jpy">
            <img class="currency_logo" src="https://raw.githubusercontent.com/Miho3me/widget_logo/master/bch_logo.png" style="width:50px;height:30px">
            <p class="name">BCH</p>
            <p id="bch_price">価格取得中</p>
            <p id="bch_color"><span id="bch_updown"></span><span id="bch_last_price">準備中</span></p>
          </a>
        </td>
        <td currency="Ethereum" class="widget Ethereumtd" >
          <a class="Ethereum price" href="https://zaif.jp/trade/eth_jpy">
            <img class="currency_logo" src="https://raw.githubusercontent.com/Miho3me/widget_logo/master/ethereum.png" style="width:50px;height:50px">
            <p class="name">ETH</p>
            <p id="eth_price">価格取得中</p>
            <p id="eth_color"><span id="eth_updown"></span><span id="eth_last_price">準備中</span></p>
          </a>
        </td>
      </tr>
    </table>
  </div>`);
})
