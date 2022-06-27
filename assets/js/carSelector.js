// it was maked wanting to get validated because the functions are called in html file and the validator detect it like unused variables
var nothing = firstCar + secondCar +  thirdCar + forthCar + easy + mid + hard;
nothing=1+1;
// set default car for errors
localStorage.setItem("storageName", "car1");
/** 
   *modifi local storage variable to bring in the game
   *Conect global variables by DOOM
   */
function firstCar() {
    document.getElementById("car1").style.borderRadius = "30%";
    document.getElementById("car2").style.borderRadius = "0%";
    document.getElementById("car3").style.borderRadius = "0%";
    document.getElementById("car4").style.borderRadius = "0%";
    var car = "car1";
    localStorage.setItem("storageName", car);
}
/** 
   *modifi local storage variable to bring in the game
   *Conect global variables by DOOM
   */
function secondCar() {
    document.getElementById("car1").style.borderRadius = "0%";
    document.getElementById("car2").style.borderRadius = "30%";
    document.getElementById("car3").style.borderRadius = "0%";
    document.getElementById("car4").style.borderRadius = "0%";
    var car = "car2";
    localStorage.setItem("storageName", car);
}
/** 
   *modifi local storage variable to bring in the game
   *Conect global variables by DOOM
   */
function thirdCar() {
    document.getElementById("car1").style.borderRadius = "0%";
    document.getElementById("car2").style.borderRadius = "0%";
    document.getElementById("car3").style.borderRadius = "30%";
    document.getElementById("car4").style.borderRadius = "0%";
    var car = "car3";
    localStorage.setItem("storageName", car);
}
/** 
   *modifi local storage variable to bring in the game
   *Conect global variables by DOOM
   */
function forthCar() {
    document.getElementById("car1").style.borderRadius = "0%";
    document.getElementById("car2").style.borderRadius = "0%";
    document.getElementById("car3").style.borderRadius = "0%";
    document.getElementById("car4").style.borderRadius = "30%";
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