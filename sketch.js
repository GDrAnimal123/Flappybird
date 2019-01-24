const TOTAL = 100;

var birds = [];
var memory = [];
var pipes = [];
var counter = 0;
var slider;

function setup() {
    createCanvas(640, 480);
    slider = createSlider(1, 100, 1);
    frameRate(50);
    for (var i = 0; i < TOTAL; i++) {
        birds[i] = new Bird();
    }
}

function draw() {
    for (var n = 0; n < slider.value(); n++) {
        if (counter % 75 == 0) {
            // 0 % 75 == 0 -> true
            pipes.push(new Pipe())
        }

        counter++;

        for (var pipe of pipes) {
            pipe.update();
            for (var j = birds.length - 1; j >= 0; j--) {
                if (pipe.hits(birds[j])) {
                    memory.push(birds.splice(j, 1)[0]);
                }
            }

            if (pipe.offscreen()) {
                pipes.shift();
            }
        }

        for (var i = birds.length - 1; i >= 0; i--) {
            if (birds[i].offscreen()) {
                memory.push(birds.splice(i, 1)[0]);
            }
        }

        for (var bird of birds) {
            bird.think(pipes);
            bird.update();

        }

        if (birds.length == 0) {
            nextGeneration();
            reset();
        }
    }

    // All Drawing
    background(0);

    for (var bird of birds) {
        bird.show();
    }

    for (var pipe of pipes) {
        pipe.show();
    }

}

function reset() {
    counter = 0;
    pipes = [];
    memory = [];
}

function keyPressed() {
    // if (key == ' ') {
    //   birds[0].up();
    // }
    if (key == 's') {
        noLoop();
    }
    if (key == 'a') {
        loop();
    }
}