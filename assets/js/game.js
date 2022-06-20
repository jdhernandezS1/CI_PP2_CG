// initial conditions
// time to increase the velocity
var t = new Date();
var dt = 0;
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
   * @param {nothing}  
   * @returns {nothing}
   */
function Init() {
    t = new Date();
    Run();
    Bucle();
}
/** 
    *create the bucle infinite.
    *run the game.
    * @param {nothing}  
    * @returns {nothing}
    */
function Bucle() {
    dt = (new Date() - t) / 1000;// milisc to seconds
    t = new Date();
    Refresh();
    requestAnimationFrame(Bucle);
}
// Global variables
// * max right axis of the game div
var rightaxis = 195;
// * max left axis of the game div
var leftaxis = 45;
var vel = 0;//
var score = 0;//score variable
var roadY = 0;
var difaxis = rightaxis - leftaxis;
var flag = true;
var enemy_lvl = 0.5;
var accel = 30;
// * last enemy position generated
var last_pos = 0;
// * document items references
var wayvel = 300;
// * velocity obstacles
var vel_appear = 0;
var vel_mov = 0;
var increased = 200;
var speed_enemies = 100;
var playerx = 0;
var playery = 0;
// * velocity
let container;
var controls;
var car;
var notification_bar;
var game;
var arrow;
var intScore = 0;
var roadBack;
// end of document items
/** 
   *Constructure defining variables
   *Conect global variables with objects of DOOM
   * @param {nothing}  
   * @returns {nothing}
   */
function Run() {
    container = document.querySelector(".container");
    controls = document.querySelector(".controls");
    game = document.querySelector(".game");
    notification_bar = document.querySelector(".notification_bar");
    arrow = document.querySelector(".arrow");
    roadBack = document.querySelector(".road");
    // constructor car
    car = document.querySelector("#car");
    car.style.left = (40) + "px";
    // car.style.top = (350)+"px";  
    // quitar comentarios para comprovar el estrellon inicial antes de moverse
    container.appendChild(car);
}
/** 
   *Function called to be repeated in while true
   *Run the game infinity
   *Functions needed by the game are called here to be clear in the main function
   *Logic of the game
   * @param {nothing}  
   * @returns {nothing}
   */
function Refresh() {
    if (flag == true) {
        // function called to show score in the screen
        generateScore();
        // function called to verify if you have been crashed
        colition();
        if (vel_appear >= increased) {
            // console.log(increased);
            generateCars();
            if (50 < increased < 100) {
                generateCars();
            }
            if (increased <= 50) {
                generateCars();
                generateCars();
            }
            vel_appear = 0;
            if (increased > 20) {
                increased -= 1;
            }
        }
        if (vel_mov > speed_enemies) {
            moveEnemies();
            vel_mov = 0;
            if (speed_enemies > 15) speed_enemies -= 1;
        }
        vel_appear += 1;
        vel_mov += 1;
        score = parseInt((score + 1));
        intScore = parseInt(score / speed_enemies);
    }
    else {
    }
}
/** 
   * Generate Cars 
   * Create divs for the obstacles
   * Give a random position for the divs
   * @param {nothing}  
   * @returns {nothing}
   */
function generateCars() {
    if (flag == true) {
        var new_pos = leftaxis + ((difaxis / 10) * parseInt(11 * Math.random()));
        if ((last_pos > (new_pos - 15)) && (last_pos < (new_pos + 15))) { new_pos = leftaxis + (difaxis * Math.random()); }
        if (Math.random() > enemy_lvl) {
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
   * @param {nothing}  
   * @returns {nothing}
   */
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
/** 
   * Move the Ego Car in the left direction.
   * Move a Div in MaxPixels/8  to the left
   * The function is called by the button event.
   * @param {nothing}  
   * @returns {nothing}
   */
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
   * @param {nothing}  
   * @returns {nothing}
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
   * @param {nothing}  
   * @returns {nothing}
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
   * @param {nothing}  
   * @returns {nothing}
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
   * @param {nothing}  
   * @returns {nothing}
   */
function generateScore() {
    if (flag == true) {
        notification_bar.textContent = ("score: " + intScore);
    }
}   