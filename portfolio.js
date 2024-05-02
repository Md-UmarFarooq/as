var navButton=document.querySelector(".nav-button");
var panelHolder=document.querySelector(".panel-holder");
var tabs=document.querySelectorAll(".tab");
navButton.addEventListener("click",transform);
var homeContent=document.querySelector(".home-content");
var mainContentContainer=document.querySelector(".mainContent-container");
var introText=document.querySelector(".introText");
var homeHi=document.querySelector(".home-hi");
var tabName=document.querySelector(".tab-name");
var home=document.querySelector(".home");

function transform(){
    panelHolder.classList.toggle("transformed");
    navButton.classList.toggle("transformed");
}

for(var i=0;i<tabs.length;i++){
    tabs[i].addEventListener("click",markCurrentTab);
}

function markCurrentTab(e){
    if(e.target.tagName==="LABEL"||e.target.tagName=="I"){
        var target=e.target;
        var tab=e.target.parentElement;
        markTab(tab);
        unmarkOtherTabs(tab);   
    }
    else if(e.target.tagName==="DIV"){
    var tab=e.target;
    markTab(tab);
    unmarkOtherTabs(tab)
   }

}

function markTab(tab){
    if(tab===null){
        return ;
    }
    tab.style.background="black";
    tab.style.color="#d1c4e9";
}

function unmarkOtherTabs(tab){
    for(var i=0;i<tabs.length;i++){
        if(tabs[i]!=tab){
            tabs[i].style.color="black";
            tabs[i].style.background="#d1c4e9";
        }
    }
}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function write(){ 
 var text="Hi there! I'm Mohammed Umar Farooq";
var insert="";
for(var i=0;i<text.length;i++){    
  insert+=text[i];
  if(i!=text.length-1){
  introText.innerText=insert+"_";}
  if(i==text.length-1){
  introText.innerText=insert;
  homeHi.classList.toggle("wave");
}
  if(text[i]===" "){introText.innerText+="\xa0"}
    await sleep(70);
}}
write();


    
