// set default car for errors
localStorage.setItem("storageName","car1");
/** 
   *modifi local storage variable to bring in the game
   *Conect global variables by DOOM
   * @param {nothing}  
   * @returns {nothing}
   */
function firstCar(){
    var car = "car1";
    localStorage.setItem("storageName",car);
}
/** 
   *modifi local storage variable to bring in the game
   *Conect global variables by DOOM
   * @param {nothing}  
   * @returns {nothing}
   */
function secondCar(){
    var car = "car2";
    localStorage.setItem("storageName",car);
}
/** 
   *modifi local storage variable to bring in the game
   *Conect global variables by DOOM
   * @param {nothing}  
   * @returns {nothing}
   */
function thirdCar(){
    var car = "car3";
    localStorage.setItem("storageName",car);
}
/** 
   *modifi local storage variable to bring in the game
   *Conect global variables by DOOM
   * @param {nothing}  
   * @returns {nothing}
   */
function forthCar(){
    var car = "car4";
    localStorage.setItem("storageName",car);
}
/** 
   *Set the local storage to be use by the difficult
   *Conect global variables by DOOM
   * @param {nothing}  
   * @returns {nothing}
   */
function easy(){

    localStorage.setItem("storageLvl",1);
}
/** 
   *Set the local storage to be use by the difficult
   *Conect global variables by DOOM
   * @param {nothing}  
   * @returns {nothing}
   */
function mid(){

    localStorage.setItem("storageLvl",2);
}
/** 
   *Set the local storage to be use by the difficult
   *Conect global variables by DOOM
   * @param {nothing}  
   * @returns {nothing}
   */
function hard(){

    localStorage.setItem("storageLvl",3);
}