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
chrome.storage.local.get(["view_location"],function(value){
  if(value.view_location == undefined){
    chrome.storage.local.set({"view_location":"header"},function(){
      window.open('https://github.com/Miho3me/Widget_Zaif/wiki/version7の変更点', '_blank');
    })
  }
})
