// initial conditions
var t = new Date();
var dt = 0;
if(document.readyState === "complete" || document.readyState === "interactive"){
    setTimeout(Init,1);
}
else{
    document.addEventListener("DOMContentLoaded",Init);
}
// seting up the initial constructure
function Init(){
    t = new Date();
    Run();
    Bucle();
}
// create the bucle infinite
function Bucle(){
    dt = (new Date()-t )/1000;
    t= new Date();
    Refresh();
    requestAnimationFrame(Bucle);
}

// max right axis of the game div
var rightaxis = 195;
// max left axis of the game div
var leftaxis = 45; 
var vel= 0;//
var score=0;//score variable
var roadY=0;
var difaxis=rightaxis-leftaxis;
var flag = true;
var enemy_lvl=0.9;
var accel= 30;
// document items references
var container;
var controls;
var car;
var notification_bar;
var game;
var arrow;
// end of document items

function Run(){
    container= document.querySelector(".container");
    controls= document.querySelector(".controls");
    game= document.querySelector(".game");
    // constructor car
    car= document.querySelector("#car");
    car.style.left = (40)+"px";
    // car.style.top = (350)+"px"; 
    notification_bar= document.querySelector(".notification_bar");
    arrow= document.querySelector(".arrow");
}
function Refresh(){


}

let generateEnemies = setInterval(generateCars,500);

function generateCars(){
    if(flag==true){

        if(Math.random() > enemy_lvl){
            const enemiesCars = document.createElement("div");
            container.appendChild(enemiesCars);
            enemiesCars.classList.add("enemies")
            if(Math.random() > 0.5) enemiesCars.classList.add("enemies1");
            else enemiesCars.classList.add("enemies2");
            enemiesCars.style.left = (leftaxis+(difaxis*Math.random()))+"px";   
            enemiesCars.style.top = -38 + "px";
        }
    }
}