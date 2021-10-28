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
let numSuns = 5;
let clouds = [];
let numClouds = 5;

let sadSongs = [];
let happySongs = [];

let sunImage = undefined;
let cloudImage = undefined;

/* let hs1Image = undefined;
let hs2Image = undefined;
let hs3Image = undefined;
let hs4Image = undefined;
let hs5Image = undefined;
let hs6Image = undefined;
let hs7Image = undefined;
let hs8Image = undefined;
let hs9Image = undefined;
let hs10Image = undefined;

let ss1Image = undefined;
let ss2Image = undefined;
let ss3Image = undefined;
let ss4Image = undefined;
let ss5Image = undefined;
let ss6Image = undefined;
let ss7Image = undefined;
let ss8Image = undefined;
let ss9Image = undefined;
let ss10Image = undefined;

let images = [];
let displayImage; */

let paddle;

/**
Description of preload
*/
function preload() {
  sunImage = loadImage("assets/images/sun.png");
  cloudImage = loadImage("assets/images/cloud.png");

  /* hs1Image = loadImage("assets/images/hs1.png");
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
  ss10Image = loadImage("assets/images/ss10.png"); */

}

let state = `simulation`; // Can be: title, simulation, end1, end2

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  displayImage = random(images);

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

/**
Description of draw()
*/
function draw() {
  background(0, 9, 135);

  for (let i = 0; i < 100; i++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(255);
    point(x, y);
  }

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
}

function end1() {
  /* setupSadSongs();
  displayRandomSadSong();
  randomSadSong(); */
  fill(255);
  textSize(80);
  textFont('Amatic SC');
  text(`end1`, width/1.6, height/2.1);
}

function end2() {
  /* setupHappySongs();
  displayRandomHappySong();
  randomHappySong(); */
  fill(255);
  textSize(80);
  textFont('Amatic SC');
  text(`end2`, width/1.6, height/2.1);
}

function createClouds() {
  for (let i = 0; i < clouds.length; i++) {
    let cloud = clouds[i];
    if (cloud.active) {
      cloud.gravity(gravityForce);
      cloud.move();
      cloud.bounce(paddle);
      cloud.display();
      cloud.check();
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
      sun.check();
    }
  }
}


/* function setupSadSongs() {
  randomSadSong(`Hypnosis`, `Taemin`, ss1Image);
  randomSadSong(`You Were Beautiful`, `DAY6`, ss2Image);
  randomSadSong(`Say Yes`, `Seventeen`, ss3Image);
  randomSadSong(`Selene 6.23`, `SHINee`, ss4Image);
  randomSadSong(`Eighteen (End Of My Life)`, `Key`, ss5Image);
  randomSadSong(`Wave`, `GOT7`, ss6Image);
  randomSadSong(`Day & Night`, `Jung Seung Hwan`, ss7Image);
  randomSadSong(`Wish`, `Choi Yuree`, ss8Image);
  randomSadSong(`Dear Name`, `IU`, ss9Image);
  randomSadSong(`I Will Go To You Like The First Snow`, `Ailee`, ss10Image);
}

function setupHappySongs() {
  randomHappySong(`Weekend`, `Taeyeon`, hs1Image);
  randomHappySong(`Rose`, `D.O.`, hs2Image);
  randomHappySong(`She Is`, `Jonghyun`, hs3Image);
  randomHappySong(`Blue Hour`, `Tomorrow X Together`, hs4Image);
  randomHappySong(`The One`, `EXO-CBX`, hs5Image);
  randomHappySong(`Tempo`, `EXO`, hs6Image);
  randomHappySong(`Snap Shoot`, `Seventeen`, hs7Image);
  randomHappySong(`Thursday`, `GOT7`, hs8Image);
  randomHappySong(`Married To The Music`, `SHINee`, hs9Image);
  randomHappySong(`riBBon`, `BamBam`, hs10Image);
}

function randomSadSong(title, artist, image) {
  let sadSong = {
    title: title,
    artist: artist,
    image: image,
  }
  sadSongs.push(sadSong)
}

function randomHappySong(title, artist, image) {
  let happySong = {
    title: title,
    artist: artist,
    image: image,
  }
  happySongs.push(happySong)
}

function displayRandomSadSong() {

  let displayText = `${randomHappySong.title}
  ${randomHappySong.artist}`;
  text(displayText, 0, 0);
  image(randomHappySong.image, 200, 200, 200, 200);

  let randomSadSong = random(sadSongs);
  title(randomSadSong.title, width / 1, 6, height / 2, 1);
  artist(randomSadSong.artist, width / 1.6, height / 1.8);
  image(randomSadSong.image, width / 3.8, height / 3.5); 
}

function displayRandomHappySong() {

  let displayText = `${randomHappySong.title}
  ${randomHappySong.artist}`;
  text(displayText, 0, 0);
  image(randomHappySong.image, 100, 100, 200, 200);
  // Obviously the positioning is nonsense

  /* let randomHappySong = random(happySongs);
  title(randomHappySong.title, width / 1, 6, height / 2, 1);
  artist(randomHappySong.artist, width / 1.6, height / 1.8);
  image(randomHappySong.image, width / 3.8, height / 3.5); */
}
