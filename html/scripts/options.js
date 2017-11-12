let currency_list = ["BTC","XEM","MONA","BCH","ETH","ZAIF","AirFX"]
let view_location_list = ["header","chat"]
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
chrome.storage.local.get(["AirFX"],function(value){
  if(value.AirFX == "show"){
    $(`#AirFX `).prop("checked",true);
  }
})
chrome.storage.local.get(["view_location"],function(value){
  if(value.view_location == "header"){
    $("#header").prop("checked",true);
  }else if(value.view_location == "chat"){
    $("#chat").prop("checked",true);
  }
})
for(let i=0;i < view_location_list.length;i++){
  $("#view_location").append(`<li><label><input type="radio" name="location_radio" id="${view_location_list[i]}">${view_location_list[i]}に表示する</label></li>`)
}
$('label input[type="checkbox"]').on("click",function(){
  click_id = $(this).attr("id")
  if($(this).is(":checked") == true){
    chrome.storage.local.set({[click_id]:"show"},function(){
    })
    chrome.storage.local.get([`${click_id}`],function(value){
      console.log(value[`${click_id}`])
    })
  }else if($(this).is(":checked") == false){
    chrome.storage.local.set({[click_id]:"hide"},function(){
    })
    chrome.storage.local.get([`${click_id}`],function(value){
      console.log(value[`${click_id}`])
    })
  }
})
$('label input[type="radio"]').on("click",function(){
  click_id = $(this).attr("id")
  if($(this).is(":checked") == true){
    chrome.storage.local.set({"view_location":[click_id]},function(){
      console.log(click_id)
    })
    chrome.storage.local.get(["view_location"],function(value){
    })
  }
})
