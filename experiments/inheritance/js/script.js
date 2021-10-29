/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let vehicles = [];
let numCars = 10;
let numMotorcycles = 10;

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas(600,600);
  for (let i = 0; i < numCars; i++) {
    let x = random(0,width);
    let y = random(0,height);
    let car = new Car(x,y);
    vehicles.push(car);
  }

  for (let i = 0; i < numMotorcycles; i++) {
    let x = random(0,width);
    let y = random(0,height);
    let motorcycle = new Motorcycle(x,y);
    vehicles.push(motorcycle);
  }
}


/**
Description of draw()
*/
function draw() {
  background(0);

  for (let i = 0; i < vehicles.length; i++) {
    let vehicle = vehicles[i];
    vehicle.move();
    vehicle.wrap();
    vehicle.display();
  }
}
