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

let hs1Image = undefined;
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
let displayImage;

let paddle;

/**
Description of preload
*/
function preload() {
  sunImage = loadImage("assets/images/sun.png");
  cloudImage = loadImage("assets/images/cloud.png");
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
  setupSadSongs();
  displayRandomSadSong();
}

function end2() {
  setupHappySongs();
  displayRandomHappySong();
  /* fill(255);
  textSize(80);
  textFont('Amatic SC');
  text(`end2`, width/1.6, height/2.1); */
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


function setupSadSongs() {
  addSadSong(`Hypnosis`, `Taemin`, ss1Image);
  addSadSong(`You Were Beautiful`, `DAY6`, ss2Image);
  addSadSong(`Say Yes`, `Seventeen`, ss3Image);
  addSadSong(`Selene 6.23`, `SHINee`, ss4Image);
  addSadSong(`Eighteen (End Of My Life)`, `Key`, ss5Image);
  addSadSong(`Wave`, `GOT7`, ss6Image);
  addSadSong(`Day & Night`, `Jung Seung Hwan`, ss7Image);
  addSadSong(`Wish`, `Choi Yuree`, ss8Image);
  addSadSong(`Dear Name`, `IU`, ss9Image);
  addSadSong(`I Will Go To You Like The First Snow`, `Ailee`, ss10Image);
}

function setupHappySongs() {
  addHappySong(`Weekend`, `Taeyeon`, hs1Image);
  addHappySong(`Rose`, `D.O.`, hs2Image);
  addHappySong(`She Is`, `Jonghyun`, hs3Image);
  addHappySong(`Blue Hour`, `Tomorrow X Together`, hs4Image);
  addHappySong(`The One`, `EXO-CBX`, hs5Image);
  addHappySong(`Tempo`, `EXO`, hs6Image);
  addHappySong(`Snap Shoot`, `Seventeen`, hs7Image);
  addHappySong(`Thursday`, `GOT7`, hs8Image);
  addHappySong(`Married To The Music`, `SHINee`, hs9Image);
  addHappySong(`riBBon`, `BamBam`, hs10Image);
}

function addSadSong(title, artist, image) {
  let sadSong = {
    title: title,
    artist: artist,
    image: image,
  }
  sadSongs.push(sadSong)
}

function addHappySong(title, artist, image) {
  let happySong = {
    title: title,
    artist: artist,
    image: image,
  }
  happySongs.push(happySong)
}

function displayRandomSadSong() {
  let randomSadSong = random(sadSongs);
  title(randomSadSong.title, width / 1, 6, height / 2, 1);
  artist(randomSadSong.artist, width / 1.6, height / 1.8);
  image(randomSadSong.image, width / 3.8, height / 3.5);
}

function displayRandomHappySong() {
  let randomHappySong = random(happySongs);
  title(randomHappySong.title, width / 1, 6, height / 2, 1);
  artist(randomHappySong.artist, width / 1.6, height / 1.8);
  image(randomHappySong.image, width / 3.8, height / 3.5);
}
