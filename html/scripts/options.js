let currency_list = ["BTC","XEM","MONA","BCH","ETH","ZAIF"]
let variable,click_id
for(let i=0;i < currency_list.length;i++){
  variable = currency_list[i]
  $("#currency_li").append(`<li><label><input type="checkbox" id="${currency_list[i]}">${currency_list[i]}を表示する</label></li>`);
}
chrome.storage.local.get(["BTC"],function(value){
  if(value.BTC == "show"){
    $(`#BTC `).prop("checked",true);
  }
})
chrome.storage.local.get(["XEM"],function(value){
  if(value.XEM == "show"){
    $(`#XEM `).prop("checked",true);
  }
})
chrome.storage.local.get(["MONA"],function(value){
  if(value.MONA == "show"){
    $(`#MONA `).prop("checked",true);
  }
})
chrome.storage.local.get(["BCH"],function(value){
  if(value.BCH == "show"){
    $(`#BCH `).prop("checked",true);
  }
})
chrome.storage.local.get(["ETH"],function(value){
  if(value.ETH == "show"){
    $(`#ETH `).prop("checked",true);
  }
})
chrome.storage.local.get(["ZAIF"],function(value){
  if(value.ZAIF == "show"){
    $(`#ZAIF `).prop("checked",true);
  }
})
$('label input[type="checkbox"]').on("click",function(){
  click_id = $(this).attr("id")
  if($(this).is(":checked") == true){
    chrome.storage.local.set({[click_id]:"show"},function(){
    })
    chrome.storage.local.get([`${click_id}`],function(value){
    })
  }else if($(this).is(":checked") == false){
    chrome.storage.local.set({[click_id]:"hide"},function(){
    })
    chrome.storage.local.get([`${click_id}`],function(value){
    })
  }
})
