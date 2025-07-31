const switchBtn=document.querySelector("#theme-switch");
let body=document.querySelector("body");
let currentTheme=localStorage.getItem("theme");
const media=window.matchMedia("(width<700px)");
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
const navBar=document.getElementById("navbar");
let closeSideBarBtn=document.getElementById("close-sidebar-button");
let openSideBarBtn=document.getElementById("open-sidebar-button");
const overlay=document.getElementById("overlay");
function openSideBar(){
    navBar.classList.add("show");
    overlay.style.display="block";
    openSideBarBtn.style.display="none";
    navBar.removeAttribute("inert");
}
function closeSideBar(){
  navBar.classList.remove("show");
  overlay.style.display="none";
  openSideBarBtn.style.display="block";
  navBar.setAttribute("inert", "");
}
openSideBarBtn.addEventListener("click",openSideBar);
closeSideBarBtn.addEventListener("click",closeSideBar);
overlay.addEventListener("click",closeSideBar);
//  make elements of navBar non-interactive when not used
function updateNavBar(e){
   let isMobile=e.matches;
   if(isMobile){
      navBar.setAttribute('inert','');
   }else{
      navBar.removeAttribute('inert');
   }
   }
   updateNavBar(media);
   media.addEventListener("change",(e)=>updateNavBar(e));
   // skills-img-color-change
   let skillsImgPaths=document.querySelectorAll(".skills-img path");
   skillsImgPaths.forEach(path=>{
      if (path.getAttribute('fill') === ('#e6e6e6')) {
         path.setAttribute('fill', '#2f2e41');
       }
       if (path.getAttribute('fill') === '#8f03cb') {
         path.setAttribute('fill', 'var(--accent)');
       }
   })
// SKills width change when scroll to skills section
window.addEventListener('scroll', function() {
   const skillsContent = document.querySelector(".skills-content");
   const loaders = document.querySelectorAll('.loader');
   const widths = ["99%", "90%", "70%", "80%", "80%","60%","60%"];
   const rect = skillsContent.getBoundingClientRect();//position relative to viewport
   if (window.innerHeight-rect.top >=50 && rect.bottom >= 0) {
     loaders.forEach(function(loader, i) {
       loader.style.width = widths[i];
     });
   }
 });
 document.addEventListener("DOMContentLoaded", function () {
   emailjs.init({
       publicKey: "WjJRS1noxZFmTDnQd",
   });
});

function sendMail(event) {
   event.preventDefault(); 
   let params = {
       name: document.getElementById("name").value,
       email: document.getElementById("email").value,
       subject: document.getElementById("subject").value,
       message: document.getElementById("message").value,
   };

   emailjs.send("service_hzvbt2q", "template_oag7g7w", params)
       .then(function (response) {
           alert("Email sent successfully!");
       })
       .catch(function (error) {
           alert("Failed to send email. Please try again.");
           console.error("Error:", error);
       });
}

    