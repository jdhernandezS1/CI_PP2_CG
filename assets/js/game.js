// depurating condition
if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(Init, 1);
}
else {
    document.addEventListener("DOMContentLoaded", Init);
}
/** 
   *seting up the initial constructure
   *Start contructore to declarete the initial state of variables.
   *Modify global variables.
   */
function Init() {
    Run();
    Bucle();
}
/** 
    *create the bucle infinite.
    *run the game.
    */
function Bucle() {
    Refresh();
    requestAnimationFrame(Bucle);
}
// Global variables
// * max right axis of the game div
var rightAxis = 195;
// * max left axis of the game div
var lefAaxis = 45;
var vel = 0;//
var score = 0;//score variable
var roadY = 0;
var difAxis = rightAxis - lefAaxis;
var flag = true;
var enemyLvl = 0.5;
var accel = 30;
// * last enemy position generated
var lastPos = 0;
// * document items references
var wayVel = 300;
// * velocity obstacles
var velAppear = 0;
var velMov = 0;
var increased = 200;
var speedEnemies = 100;
var playerx = 0;
var playery = 0;
// * velocity
let container;
var controls;
var car;
var notificationBar;
var game;
var arrow;
var intScore = 0;
var roadBack;
let lvlDiv;
// end of document items
/** 
   *Constructure defining variables
   *Conect global variables with objects of DOOM
   */
function Run() {
    container = document.querySelector(".container");
    controls = document.querySelector(".controls");
    game = document.querySelector(".game");
    notificationBar = document.querySelector(".notificationBar");
    arrow = document.querySelector(".arrow");
    roadBack = document.querySelector(".road");
    // constructor car
    car = document.querySelector("#car");
    car.style.left = (40) + "px";
    // car.style.top = (350)+"px";  
    // quitar comentarios para comprovar el estrellon inicial antes de moverse
    container.appendChild(car);
    let carClass = localStorage.getItem("storageName");
    lvlDiv = localStorage.getItem("storageLvl");
    if (lvlDiv != null) {
        if (lvlDiv == 1) { lvlDiv = 4; }
        else if (lvlDiv == 2) { lvlDiv = 7; }
        else if (lvlDiv == 3) { lvlDiv = 10; }

    }
    else {
        lvlDiv = 10;
    }
    car.classList.add("car1");
    if (carClass != null) {
        car.classList.add(carClass);
    }
    else
        car.classList.add("car1");
}
/** 
   *Function called to be repeated in while true
   *Run the game infinity
   *Functions needed by the game are called here to be clear in the main function
   *Logic of the game
   */
function Refresh() {
    if (flag == true) {
        // function called to show score in the screen
        generateScore();
        // function called to verify if you have been crashed
        colition();
        if (velAppear >= increased) {
            // console.log(increased);
            generateCars();
            if (50 < increased < 100) {
                generateCars();
            }
            if (increased <= 50) {
                generateCars();
                generateCars();
            }
            velAppear = 0;
            if (increased > 20) {
                increased -= 1;
            }
        }
        if (velMov > speedEnemies) {
            moveEnemies();
            velMov = 0;
            if (speedEnemies > 15) speedEnemies -= 1;
        }
        velAppear += 1;
        velMov += 1;
        score = parseInt((score + 1));
        intScore = parseInt(score / speedEnemies);
    }
    else {
    }
}
/** 
   * Generate and set Cars 
   * Create divs for the obstacles
   * Give a random position for the divs
   */
function generateCars() {
    if (flag == true) {
        var new_pos = lefAaxis + ((difAxis / lvlDiv) * parseInt((lvlDiv + 1) * Math.random()));
        if ((lastPos > (new_pos - 15)) && (lastPos < (new_pos + 15))) { new_pos = lefAaxis + (difAxis * Math.random()); }
        if (Math.random() > enemyLvl) {
            const enemiesCars = document.createElement("div");
            container.appendChild(enemiesCars);
            enemiesCars.classList.add("enemies")
            if (0.50 >= Math.random() > 0.25) enemiesCars.classList.add("enemies1");
            else if (0.75 >= Math.random() > 0.5) enemiesCars.classList.add("enemies2");
            else if (1 > Math.random() > 0.75) enemiesCars.classList.add("enemies3");
            else enemiesCars.classList.add("enemies2");
            enemiesCars.style.left = (new_pos) + "px";
            enemiesCars.style.top = -38 + "px";
        }
    }
}
/** 
   * Move the Ego Car in the right direction.
   * Move a Div in MaxPixels/8  to the right
   * The function is called by the button event.
   */
function moveright() {
    if (flag == true) {

        var dx = car.style.left;
        dx = parseInt(dx);
        if (dx < (rightAxis)) {
            dx += (rightAxis - lefAaxis) / 8;
        }
        else {

        }
        console.log(dx);
        car.style.left = (dx) + "px";
        car.style.top = 350 + "px";
    }
    // else console.log("You have been crashed");
}
/** 
   * Move the Ego Car in the left direction.
   * Move a Div in MaxPixels/8  to the left
   * The function is called by the button event.
   */
function moveleft() {
    if (flag == true) {
        var dx = car.style.left;
        dx = parseInt(dx);
        if (dx > (lefAaxis)) {
            dx -= (difAxis) / 8;
        }
        else {

        }
        console.log(dx);
        car.style.left = (dx) + "px";
        car.style.top = 350 + "px";
    }
    // else console.log("You have been crashed"); 
}
/** 
   * Move the Enemies Cars Down direction.
   * Move down everyone Div in a creasing px distance.
   * The function is called by the refresh function.
   * @param {nothing}  
   * @returns {nothing}
   */
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
/** 
   * Verify if the Ego Car in the right left top and botton position is correct or has been crashed
   * The function is called by the refresh function.
   */
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
/** 
   * Remove the Css animation and make false the flag condition
   * The function is called by the colition event.
   */
function endGame() {
    // getComputedStyle(document.documentElement).getPropertyValue('--background-velocity');
    document.documentElement.style.removeProperty('--background-velocity');
    document.documentElement.style.setProperty('--background-velocity', '0px');
    flag = false;
    refresh_page();
}
/** 
   * Remove the Css animation and make false the flag condition
   * The function is called by the endGame event.
   */
function refresh_page() {
    if (flag == false) {
        const finalAlert = document.createElement("div");
        const loseGame = document.createElement("H1");
        const refBut = document.createElement("a");
        roadBack.appendChild(finalAlert);
        finalAlert.appendChild(loseGame);
        finalAlert.appendChild(refBut);
        finalAlert.classList.add("titleEnd");
        // loseGame.classList.add("titleEnd");
        // refBut.classList.add("titleEnd");
        loseGame.textContent = ("your score was:" + intScore);
        refBut.textContent = ("GO HOME");
        refBut.href = "index.html";
    }
}
/** 
   * Update the score global variable. 
   * The function is called by the refresh function.
   */
function generateScore() {
    if (flag == true) {
        notificationBar.textContent = ("score: " + intScore);
    }
}

