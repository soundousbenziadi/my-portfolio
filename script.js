const switchBtn=document.querySelector("#theme-switch");
let body=document.querySelector("body");
let currentTheme=localStorage.getItem("theme");
function enableLightMode(){
   body.classList.remove("dark-mode");
   localStorage.setItem("theme","light");
}
function disableLightMode(){
   body.classList.add("dark-mode");
   localStorage.setItem("theme","dark");
}
switchBtn.addEventListener("click",function(){
   currentTheme=localStorage.getItem("theme");
   currentTheme==="dark" ? enableLightMode():disableLightMode();
})
if(currentTheme==="dark"){
   disableLightMode();
}