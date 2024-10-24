// THOSE LINES were used to fix the errors with jshint
document.getElementById("car1").addEventListener("click", firstCar());
document.getElementById("car2").addEventListener("click", secondCar());
document.getElementById("car3").addEventListener("click", thirdCar());
document.getElementById("car4").addEventListener("click", forthCar());
document.getElementById("easy").addEventListener("click", easy());
document.getElementById("mid").addEventListener("click", mid());
document.getElementById("hard").addEventListener("click", hard());


// set default car for errors
localStorage.setItem("storageName", "car1");
/** 
   *modifi local storage variable to bring in the game
   *Conect global variables by DOOM
   */
function firstCar() {
    document.getElementById("car1").style.borderRadius = "50%";
    document.getElementById("car2").style.borderRadius = "30%";
    document.getElementById("car3").style.borderRadius = "30%";
    document.getElementById("car4").style.borderRadius = "30%";
    var car = "car1";
    localStorage.setItem("storageName", car);
}
/** 
   *modifi local storage variable to bring in the game
   *Conect global variables by DOOM
   */
function secondCar() {
    document.getElementById("car1").style.borderRadius = "30%";
    document.getElementById("car2").style.borderRadius = "50%";
    document.getElementById("car3").style.borderRadius = "30%";
    document.getElementById("car4").style.borderRadius = "30%";
    var car = "car2";
    localStorage.setItem("storageName", car);
}
/** 
   *modifi local storage variable to bring in the game
   *Conect global variables by DOOM
   */
function thirdCar() {
    document.getElementById("car1").style.borderRadius = "30%";
    document.getElementById("car2").style.borderRadius = "30%";
    document.getElementById("car3").style.borderRadius = "50%";
    document.getElementById("car4").style.borderRadius = "30%";
    var car = "car3";
    localStorage.setItem("storageName", car);
}
/** 
   *modifi local storage variable to bring in the game
   *Conect global variables by DOOM
   */
function forthCar() {
    document.getElementById("car1").style.borderRadius = "30%";
    document.getElementById("car2").style.borderRadius = "30%";
    document.getElementById("car3").style.borderRadius = "30%";
    document.getElementById("car4").style.borderRadius = "50%";
    var car = "car4";
    localStorage.setItem("storageName", car);
}
/** 
   *Set the local storage to be use by the difficult
   *Conect global variables by DOOM
   */
function easy() {
    document.getElementById("easy").style.color = "white";
    document.getElementById("mid").style.color = "black";
    document.getElementById("hard").style.color = "black";
    localStorage.setItem("storageLvl", 1);
}
/** 
   *Set the local storage to be use by the difficult
   *Conect global variables by DOOM
   */
function mid() {
    document.getElementById("easy").style.color = "black";
    document.getElementById("mid").style.color = "white";
    document.getElementById("hard").style.color = "black";
    localStorage.setItem("storageLvl", 2);
}
/** 
   *Set the local storage to be use by the difficult
   *Conect global variables by DOOM
   */
function hard() {
    document.getElementById("easy").style.color = "black";
    document.getElementById("mid").style.color = "black";
    document.getElementById("hard").style.color = "white";
    localStorage.setItem("storageLvl", 3);
}