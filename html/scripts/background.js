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
    chrome.storage.local.set({"initial_setting":"ok"},function(){
    })
  }
})
