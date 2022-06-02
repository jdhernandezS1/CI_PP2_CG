// initial conditions
var t = new Date();
var dt = 0;
if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(Init, 1);
}
else {
    document.addEventListener("DOMContentLoaded", Init);
}
// seting up the initial constructure
function Init() {
    t = new Date();
    Run();
    Bucle();
}
// create the bucle infinite
function Bucle() {
    dt = (new Date() - t) / 1000;
    t = new Date();
    Refresh();
    requestAnimationFrame(Bucle);
}

// max right axis of the game div
var rightaxis = 195;
// max left axis of the game div
var leftaxis = 45;
var vel = 0;//
var score = 0;//score variable
var roadY = 0;
var difaxis = rightaxis - leftaxis;
var flag = true;
var enemy_lvl = 0.5;
var accel = 30;
// last enemy position generated
var last_pos=0;
// document items references
var wayvel = 300;
// velocity obstacles
var vel_appear = 0;
var vel_mov = 0;
var increased = 200;
var speed_enemies  =  100;
var playerx = 0;
var playery = 0;
// velocity
let container;
var controls;
var car;
var notification_bar;
var game;
var arrow;
var intScore=0;
// end of document items

function Run() {
    container = document.querySelector(".container");
    controls = document.querySelector(".controls");
    game = document.querySelector(".game");
    notification_bar = document.querySelector(".notification_bar");
    arrow = document.querySelector(".arrow");
    // constructor car
    car = document.querySelector("#car");
    car.style.left = (40) + "px";
    // car.style.top = (350)+"px";  
    // quitar comentarios para comprovar el estrellon inicial antes de moverse
    container.appendChild(car);
}
function Refresh() {
    generateScore();
    colition();
    if (vel_appear >= increased) {
        // console.log(increased);
        generateCars();
        if (increased < 100)
        {
            generateCars();
        }
        if (increased < 50)
        {
            generateCars();
        }
        vel_appear = 0;
        if (increased > 20) {
            increased -= 1;
        }
    }
    if(vel_mov>speed_enemies){
        moveEnemies();
        vel_mov=0;
        if(speed_enemies>15)  speed_enemies-=1;
    }
    vel_appear += 1;
    vel_mov +=1;
    score = parseInt((score+1));
    intScore = parseInt(score/speed_enemies);
}



function generateCars(){
    if(flag==true){
        var new_pos= leftaxis+((difaxis/10)* parseInt(11*Math.random()));
        if ((last_pos>(new_pos-15))&& (last_pos<(new_pos+15))){new_pos= leftaxis+(difaxis*Math.random());}
        if(Math.random() > enemy_lvl){
            const enemiesCars = document.createElement("div");
            container.appendChild(enemiesCars);
            enemiesCars.classList.add("enemies")
            if(0.50 >= Math.random() > 0.25) enemiesCars.classList.add("enemies1");
            else if(0.75 >= Math.random() > 0.5) enemiesCars.classList.add("enemies2");
            else if(1 > Math.random() > 0.75) enemiesCars.classList.add("enemies3");
            else enemiesCars.classList.add("enemies2");
            enemiesCars.style.left = (new_pos)+"px";   
            enemiesCars.style.top = -38 + "px";
        }
    }
}
function moveright() {
    if (flag == true) {

        var dx = car.style.left;
        dx = parseInt(dx);
        if (dx < (rightaxis)) {
            dx += (rightaxis - leftaxis) / 8;
        }
        else {

        }
        console.log(dx);
        car.style.left = (dx) + "px";
        car.style.top = 350 + "px";
    }
    // else console.log("You have been crashed");
}
function moveleft() {
    if (flag == true) {
        var dx = car.style.left;
        dx = parseInt(dx);
        if (dx > (leftaxis)) {
            dx -= (difaxis) / 8;
        }
        else {

        }
        console.log(dx);
        car.style.left = (dx) + "px";
        car.style.top = 350 + "px";
    }
    // else console.log("You have been crashed"); 
}
function moveEnemies() {
    // get all enemies class declared into the function to update every ejecution
    var enemiesCars = document.getElementsByClassName("enemies");
    // size of classes
    var lgh = enemiesCars.length;
    // for loop to edit all enemies class
    let x = 0;
    while (x < lgh) {
        let actualEnemi = enemiesCars[x];
        let posY = actualEnemi.style.top;
        let posX = actualEnemi.style.left;
        posY = parseInt(posY);
        posX = parseInt(posX);
        if (flag == true) {
            posY += accel;
            actualEnemi.style.top = posY + "px";
        }
        // else console.log("Game Over");
        x += 1;
    }

}

function colition() {
    let enemy_car = document.getElementsByClassName("enemies");
    const lgh = enemy_car.length;
    let x = 0;
    while (x < lgh) {
        var enemy = enemy_car[x];
        if (enemy != undefined && enemy != null) {

            let enemyY = enemy.style.top;
            enemyY = parseInt(enemyY);
            let enemyX = enemy.style.left;
            enemyX = parseInt(enemyX);
            let playerY = parseInt(car.style.top);
            let playerX = parseInt(car.style.left);
            // console.log(playerX ,enemyX);
            // console.log(playerY ,enemyY);
            const space = 15;
            if ((enemyX <= (playerX + space)) && (enemyX >= (playerX - space))) {
                if ((enemyY <= (playerY + space)) && (enemyY >= (playerY - space))) {
                    // console.log("game over");
                    endGame();
                }

            }
            else {
                // flag=true;
            }
            // delete enemies out of the screen
            if (enemyY > 500) {
                enemy_car[x].remove();
            }
        }
        // else console.log("undefined item")
        x += 1;

    }

}
function endGame() {
    // getComputedStyle(document.documentElement).getPropertyValue('--background-velocity');
    document.documentElement.style.removeProperty('--background-velocity');
    document.documentElement.style.setProperty('--background-velocity', '0px');
    flag = false;
}
function generateScore(){
    var score_title = document.querySelector(".notification_bar");
    score_title.textContent = ("score: "+ intScore);
}