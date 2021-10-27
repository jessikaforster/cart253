/**
Juggle Garden
Jessika Forster

This is the 5th CART 253 exercise. The objectives are to work with object-oriented
programming, interacting objects and input in OOP. This simulation should include
another form of user-control, a new class and objects and at least 2 endings.
*/

"use strict";

let gravityForce = 0.0025;

let suns = [];
let numSuns = 10;
let clouds = [];
let numClouds = 10;

let sunImage = undefined;
let cloudImage = undefined;

let hs1Image;
let hs2Image;
let hs3Image;
let hs4Image;
let hs5Image;
let hs6Image;
let hs7Image;
let hs8Image;
let hs9Image;
let hs10Image;

let ss1Image;
let ss2Image;
let ss3Image;
let ss4Image;
let ss5Image;
let ss6Image;
let ss7Image;
let ss8Image;
let ss9Image;
let ss10Image;

let paddle;

/**
Description of preload
*/
function preload() {
sunImage = loadImage("assets/images/sun.png");
cloudImage = loadImage("assets/images/cloud.png");

hs1Image = loadImage("assets/images/hs1.png");
hs2Image = loadImage("assets/images/hs2.png");
hs3Image = loadImage("assets/images/hs3.png");
hs4Image = loadImage("assets/images/hs4.png");
hs5Image = loadImage("assets/images/hs5.png");
hs6Image = loadImage("assets/images/hs6.png");
hs7Image = loadImage("assets/images/hs7.png");
hs8Image = loadImage("assets/images/hs8.png");
hs9Image = loadImage("assets/images/hs9.png");
hs10Image = loadImage("assets/images/hs10.png");

ss1Image = loadImage("assets/images/ss1.png");
ss2Image = loadImage("assets/images/ss2.png");
ss3Image = loadImage("assets/images/ss3.png");
ss4Image = loadImage("assets/images/ss4.png");
ss5Image = loadImage("assets/images/ss5.png");
ss6Image = loadImage("assets/images/ss6.png");
ss7Image = loadImage("assets/images/ss7.png");
ss8Image = loadImage("assets/images/ss8.png");
ss9Image = loadImage("assets/images/ss9.png");
ss10Image = loadImage("assets/images/ss10.png");
}

let state = `simulation`; // Can be: title, simulation, end1, end2

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  paddle = new Paddle(600, 20);

  for (let i = 0; i < numClouds; i++) {
  let x = random(0, width);
  let y = random(-400, -100);
  let cloud = new Cloud(x, y, cloudImage);
  clouds.push(cloud);
  }

  for (let i = 0; i < numSuns; i++) {
  let x = random(0, width);
  let y = random(-400, -100);
  let sun = new Sun(x, y, sunImage);
  suns.push(sun);
  }
}

let ss1 = {
x: 0,
y: 0,
width: 500,
height: 500,
}

let ss2 = {
x: 0,
y: 0,
width: 500,
height: 500,
}

let ss3 = {
x: 0,
y: 0,
width: 500,
height: 500,
}

let ss4 = {
x: 0,
y: 0,
width: 500,
height: 500,
}

let ss5 = {
x: 0,
y: 0,
width: 500,
height: 500,
}

let ss6 = {
x: 0,
y: 0,
width: 500,
height: 500,
}

let ss7 = {
x: 0,
y: 0,
width: 500,
height: 500,
}

let ss8 = {
x: 0,
y: 0,
width: 500,
height: 500,
}

let ss9 = {
x: 0,
y: 0,
width: 500,
height: 500,
}

let ss10 = {
x: 0,
y: 0,
width: 500,
height: 500,
}

let hs1 = {
x: 0,
y: 0,
width: 500,
height: 500,
}

let hs2 = {
x: 0,
y: 0,
width: 500,
height: 500,
}

let hs3 = {
x: 0,
y: 0,
width: 500,
height: 500,
}

let hs4 = {
x: 0,
y: 0,
width: 500,
height: 500,
}

let hs5 = {
x: 0,
y: 0,
width: 500,
height: 500,
}

let hs6 = {
x: 0,
y: 0,
width: 500,
height: 500,
}

let hs7 = {
x: 0,
y: 0,
width: 500,
height: 500,
}

let hs8 = {
x: 0,
y: 0,
width: 500,
height: 500,
}

let hs9 = {
x: 0,
y: 0,
width: 500,
height: 500,
}

let hs10 = {
x: 0,
y: 0,
width: 500,
height: 500,
}

/**
Description of draw()
*/
function draw() {
  background(0);

  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `end1`) {
    end1();
  } else if (state === `end2`) {
    end2();
    }
  }

function title() {

}

function simulation() {
  paddle.move();
  paddle.display();
  createClouds();
  createSuns();
  displaySs1();
}

function end1() {

}

function end2() {

}

function createClouds() {
for (let i = 0; i < clouds.length; i++) {
  let cloud = clouds[i];
  if (cloud.active) {
  cloud.gravity(gravityForce);
  cloud.move();
  cloud.bounce(paddle);
  cloud.display();
    }
  }
}

function createSuns() {
for (let i = 0; i < suns.length; i++) {
  let sun = suns[i];
  if (sun.active) {
  sun.gravity(gravityForce);
  sun.move();
  sun.bounce(paddle);
  sun.display();
    }
  }
}

function displayHs1() {
image(hs1Image, windowWidth/3.8, windowHeight/3.5, hs1.width, hs1.height);
push();
fill(255);
textSize(80);
textFont('Amatic SC');
text(`Weekend`, width/1.6, height/2.1);
text(`Taeyeon`, width/1.6, height/1.8);
pop();
}

function displayHs2() {
image(hs1Image, windowWidth/3.8, windowHeight/3.5, hs1.width, hs1.height);
push();
fill(255);
textSize(80);
textFont('Amatic SC');
text(`Rose`, width/1.6, height/2.1);
text(`D.O.`, width/1.6, height/1.8);
pop();
}

function displayHs3() {
image(hs1Image, windowWidth/3.8, windowHeight/3.5, hs1.width, hs1.height);
push();
fill(255);
textSize(80);
textFont('Amatic SC');
text(`She Is`, width/1.6, height/2.1);
text(`Jonghyun`, width/1.6, height/1.8);
pop();
}

function displayHs4() {
image(hs1Image, windowWidth/3.8, windowHeight/3.5, hs1.width, hs1.height);
push();
fill(255);
textSize(80);
textFont('Amatic SC');
text(`Blue Hour`, width/1.6, height/2.1);
text(`TXT`, width/1.6, height/1.8);
pop();
}

function displayHs5() {
image(hs1Image, windowWidth/3.8, windowHeight/3.5, hs1.width, hs1.height);
push();
fill(255);
textSize(80);
textFont('Amatic SC');
text(`The One`, width/1.6, height/2.1);
text(`EXO-CBX`, width/1.6, height/1.8);
pop();
}

function displayHs6() {
image(hs1Image, windowWidth/3.8, windowHeight/3.5, hs1.width, hs1.height);
push();
fill(255);
textSize(80);
textFont('Amatic SC');
text(`Tempo`, width/1.6, height/2.1);
text(`EXO`, width/1.6, height/1.8);
pop();
}

function displayHs7() {
image(hs1Image, windowWidth/3.8, windowHeight/3.5, hs1.width, hs1.height);
push();
fill(255);
textSize(80);
textFont('Amatic SC');
text(`Snap Shoot`, width/1.6, height/2.1);
text(`Seventeen`, width/1.6, height/1.8);
pop();
}

function displayHs8() {
image(hs1Image, windowWidth/3.8, windowHeight/3.5, hs1.width, hs1.height);
push();
fill(255);
textSize(80);
textFont('Amatic SC');
text(`Thursday`, width/1.6, height/2.1);
text(`GOT7`, width/1.6, height/1.8);
pop();
}

function displayHs9() {
image(hs1Image, windowWidth/3.8, windowHeight/3.5, hs1.width, hs1.height);
push();
fill(255);
textSize(80);
textFont('Amatic SC');
text(`Married To The Music`, width/1.6, height/2.1);
text(`SHINee`, width/1.6, height/1.8);
pop();
}

function displayHs10() {
image(hs1Image, windowWidth/3.8, windowHeight/3.5, hs1.width, hs1.height);
push();
fill(255);
textSize(80);
textFont('Amatic SC');
text(`riBBon`, width/1.6, height/2.1);
text(`BamBam`, width/1.6, height/1.8);
pop();
}

function displaySs1() {
  image(ss1Image, windowWidth/3.8, windowHeight/3.5, ss1.width, ss1.height);
  push();
  fill(255);
  textSize(80);
  textFont('Amatic SC');
  text(`Hypnosis`, width/1.6, height/2.1);
  text(`Taemin`, width/1.6, height/1.8);
  pop();
}

function displaySs2() {
image(ss1Image, windowWidth/3.8, windowHeight/3.5, ss1.width, ss1.height);
push();
fill(255);
textSize(80);
textFont('Amatic SC');
text(`You Were Beautiful`, width/1.6, height/2.1);
text(`DAY6`, width/1.6, height/1.8);
pop();
}

function displaySs3() {
image(ss1Image, windowWidth/3.8, windowHeight/3.5, ss1.width, ss1.height);
push();
fill(255);
textSize(80);
textFont('Amatic SC');
text(`Say Yes`, width/1.6, height/2.1);
text(`Seventeen`, width/1.6, height/1.8);
pop();
}

function displaySs4() {
image(ss1Image, windowWidth/3.8, windowHeight/3.5, ss1.width, ss1.height);
push();
fill(255);
textSize(80);
textFont('Amatic SC');
text(`Selene 6.23`, width/1.6, height/2.1);
text(`SHINee`, width/1.6, height/1.8);
pop();
}

function displaySs5() {
image(ss1Image, windowWidth/3.8, windowHeight/3.5, ss1.width, ss1.height);
push();
fill(255);
textSize(80);
textFont('Amatic SC');
text(`Eighteen (End Of My World)`, width/1.6, height/2.1);
text(`Key`, width/1.6, height/1.8);
pop();
}

function displaySs6() {
image(ss1Image, windowWidth/3.8, windowHeight/3.5, ss1.width, ss1.height);
push();
fill(255);
textSize(80);
textFont('Amatic SC');
text(`Wave`, width/1.6, height/2.1);
text(`GOT7`, width/1.6, height/1.8);
pop();
}

function displaySs7() {
image(ss1Image, windowWidth/3.8, windowHeight/3.5, ss1.width, ss1.height);
push();
fill(255);
textSize(80);
textFont('Amatic SC');
text(`Day & Night`, width/1.6, height/2.1);
text(`Jung Seung Hwan`, width/1.6, height/1.8);
pop();
}

function displaySs8() {
image(ss1Image, windowWidth/3.8, windowHeight/3.5, ss1.width, ss1.height);
push();
fill(255);
textSize(80);
textFont('Amatic SC');
text(`Wish`, width/1.6, height/2.1);
text(`Choi Yuree`, width/1.6, height/1.8);
pop();
}

function displaySs9() {
image(ss1Image, windowWidth/3.8, windowHeight/3.5, ss1.width, ss1.height);
push();
fill(255);
textSize(80);
textFont('Amatic SC');
text(`I Will Go To You Like The First Snow`, width/1.6, height/2.1);
text(`Ailee`, width/1.6, height/1.8);
pop();
}

function displaySs10() {
image(ss1Image, windowWidth/3.8, windowHeight/3.5, ss1.width, ss1.height);
push();
fill(255);
textSize(80);
textFont('Amatic SC');
text(`Dear Name`, width/1.6, height/2.1);
text(`IU`, width/1.6, height/1.8);
pop();
}
