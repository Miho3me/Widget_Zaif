$(function(){
  $("#header").append(`<div style="height:108px;padding:10px" id="currency-table widget-ex">
    <table align="center" margin:0>
      <tr>
        <td currency="bitcoin" class="widget bitcointd" style="width:70px">
          <a class="bitcoin price" href="https://zaif.jp/trade_btc_jpy" >
            <img class="currency_logo" src="https://raw.githubusercontent.com/Miho3me/widget_logo/master/bitcoin.png" width="42px" height="42px">
            <p class="name">BTC</p>
            <p id="btc_price">価格取得中</p>
            <p></p>
          </a>
        </td>
        <td currency="NEM" class="widget nemtd" >
          <a class="nem price" href="https://zaif.jp/trade_xem_jpy">
            <img class="currency_logo" src="https://raw.githubusercontent.com/Miho3me/widget_logo/master/nem.png" >
            <p class="name">XEM</p>
            <p id="xem_price">価格取得中</p>
            <p></p>
          </a>
        </td>
        <td currency="Monacoin" class="widget monacointd" >
          <a class="monacoin price" href="https://zaif.jp/trade_mona_jpy">
            <img class="currency_logo" src="https://raw.githubusercontent.com/Miho3me/widget_logo/master/Monacoin.png" >
            <p class="name">MONA</p>
            <p id="mona_price">価格取得中</p>
            <p></p>
          </a>
        </td>
        <td currency="BitcoinCash" class="widget BitcoinCashtd" >
          <a class="BitcoinCash price" href="https://zaif.jp/trade/bch_jpy">
            <img class="currency_logo" src="https://raw.githubusercontent.com/Miho3me/widget_logo/master/bch_logo.png" >
            <p class="name">BCH</p>
            <p id="bch_price">API未提供</p>
          </a>
        </td>
        <td currency="Ethereum" class="widget Ethereumtd" >
          <a class="Ethereum price" href="https://zaif.jp/trade/eth_jpy">
            <img class="currency_logo" src="https://raw.githubusercontent.com/Miho3me/widget_logo/master/ethereum.png" >
            <p class="name">ETH</p>
            <p id="eth_price">API未提供</p>
          </a>
        </td>
      </tr>
    </table>
  </div>`);
})