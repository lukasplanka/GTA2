let bgrImg, runnerImg, car1Img, car2Img, car3Img, car4Img, car5Img, car6Img, wastedImg;
let squashD, ftsCon, comEng, voiKng, wasted, thmSng, voiGru, police;
let runner, car1, car2, car3, car4, car5, car6;
let lives, level;

function setup() {
    createCanvas(533, 628);

    runner = createSprite(width/2,580);     // runner
    runner.addImage(runnerImg);
    runner.scale = 0.2;

    car1 = createSprite(width, 90);         // sixth road
    car1.addImage(car1Img);
    car1.scale = 0.4;
    car1.velocity.x = -3.5;                 // car direction

    car2 = createSprite(0, 150);            // fifth road
    car2.addImage(car2Img);
    car2.scale = 0.4;
    car2.rotation = 180;
    car2.velocity.x = 3;

    car3 = createSprite(width, 210);        // fourth road
    car3.addImage(car3Img);
    car3.scale = 0.4;
    car3.velocity.x = -5.5;

    car4 = createSprite(0, 400);            // third road
    car4.addImage(car4Img);
    car4.scale = 0.4;
    car4.rotation = 180;
    car4.velocity.x = 4;

    car5 = createSprite(width, 470);        // second road
    car5.addImage(car5Img);
    car5.scale = 0.4;
    car5.velocity.x = -4.5;

    car6 = createSprite(0, 540);            // first road
    car6.addImage(car6Img);
    car6.scale = 0.4;
    car6.rotation = 180;
    car6.velocity.x = 3.5;

    lives = 3;
    level = 1;

    thmSng.loop();                          // theme song
    police.loop();
    comEng.loop();
}

function draw() {
    noStroke();
    image(bgrImg,0,0);                      // background

    runner.position.x = mouseX;

    if (car2.position.x > (width + 50)) {   // car again
        car2.position.x = -50;
    }
    if (car1.position.x < -50) {
        car1.position.x = (width + 50);
    }
    if (car4.position.x > (width + 50)) {
        car4.position.x = -50;
    }
    if (car3.position.x < -50) {
        car3.position.x = (width + 50);
    }
    if (car6.position.x > (width + 50)) {
        car6.position.x = -50;
    }
    if (car5.position.x < -50) {
        car5.position.x = (width + 50);
    }
    if (car2.overlap(runner) === true ||    // collision, start position
        car1.overlap(runner) === true ||
        car3.overlap(runner) === true ||
        car4.overlap(runner) === true ||
        car5.overlap(runner) === true ||
        car6.overlap(runner) === true) {
        runner.position.y = 580;
        lives = lives - 1;
        squashD.play();
        voiGru.play();
    }
    if (lives === 0) {
        gameOver();
    }

    drawSprites();

    drawInfo();
}

function drawInfo() {                       // info
    fill(255,255,255);
    textSize(20);
    textFont('sans-serif');
    text(lives, 500, 30);
    image(lives1, 420, 5);
    text(level, 385, 30);
    image(level1, 300, 5);
    image(again, 10, 565);
    image(move, 10, 595);
}

function mousePressed() {                   // runner move
    runner.position.y = runner.position.y -20;
    ftsCon.play();

    if (runner.position.y < 50) {           // level up
        voiKng.play();
        runner.position.y = 580;
        lives += 1;
        level += 1;
        car1.velocity.x = car1.velocity.x - 1;
        car2.velocity.x += 1;
        car3.velocity.x = car3.velocity.x - 1;
        car4.velocity.x += 1;
        car5.velocity.x = car5.velocity.x - 1;
        car6.velocity.x += 1;
    }
}

function preload() {
    bgrImg = loadImage('img/imgBgr1.png');
    runnerImg = loadImage('img/runner.jpg');
    car1Img = loadImage('img/car1.png');
    car2Img = loadImage('img/car2.png');
    car3Img = loadImage('img/car3.png');
    car4Img = loadImage('img/car4.png');
    car5Img = loadImage('img/car5.png');
    car6Img = loadImage('img/car6.png');
    wastedImg = loadImage('img/wasted.png');
    again = loadImage('img/again.png');
    move = loadImage('img/move.png');
    level1 = loadImage('img/level.png');
    lives1 = loadImage('img/lives.png');

    voiKng = loadSound('snd/SFX_VOICE_ITS_THE_KING_2.wav');
    ftsCon = loadSound('snd/SFX_FOOTSEP_CONCRETE_3.wav');
    squashD = loadSound('snd/SFX_COLLISION_CAR_PED_SQUASH.wav');
    voiGru = loadSound('snd/SFX_VOICE_GRUNT_1wav.wav');
    comEng = loadSound('snd/compactEngine.wav');
    police = loadSound('snd/police.wav');
    thmSng = loadSound('snd/theme2.mp3');
    wasted = loadSound('snd/wasted.wav');
}

function gameOver() {
    noLoop();
    fill(255,255,255);
    textSize(30);
    textFont('sans-serif');
    wasted.play();
    police.stop();
    comEng.stop();
    image(wastedImg, 165, 270);
}
