chrome.storage.local.get(["initial_setting"],function(value){
  if(value.initial_setting != "ok"){
    chrome.storage.local.set({"BTC":"show"},function(){
    })
    chrome.storage.local.set({"XEM":"show"},function(){
    })
    chrome.storage.local.set({"MONA":"show"},function(){
    })
    chrome.storage.local.set({"BCH":"show"},function(){
    })
    chrome.storage.local.set({"ETH":"show"},function(){
    })
    chrome.storage.local.set({"ZAIF":"show"},function(){
    })
    chrome.storage.local.set({"AirFX":"hide"},function(){
    })
    chrome.storage.local.set({"view_location":"header"},function(){
    })
    chrome.storage.local.set({"initial_setting":"ok"},function(){
    })
    window.open('https://github.com/Miho3me/Widget_Zaif/wiki/Zaif_WidgetのWiki的なところです', '_blank');
  }
})
chrome.storage.local.get(["important_notification"],function(value){
  console.log(value.important_notification)
  if(value.important_notification == undefined || value.important_notification != "show"){
    window.open('https://github.com/Miho3me/Widget_Zaif/wiki/%E3%80%90%E9%87%8D%E8%A6%81%E3%80%91Zaif.jp%E3%81%AE%E6%9D%BFerror%E5%95%8F%E9%A1%8C%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%90%E5%BF%85%E3%81%9A%E3%81%8A%E8%AA%AD%E3%81%BF%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%91', '_blank');
  }
})
