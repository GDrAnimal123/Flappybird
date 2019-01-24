// Mutation function to be passed into bird.brain
function mutate(x) {
    if (random(1) < 0.1) {
        let offset = randomGaussian() * 0.5;
        let newx = x + offset;
        return newx;
    } else {
        return x;
    }
}

class Bird {
    constructor(brain) {
        // position
        this.x = width * 20 / 100;
        this.y = height / 2;
        this.size = 32

        this.gravity = 0.8;
        this.flap = -12;
        this.velocity = 0;

        var inputs = 5,
            hiddens = 8,
            outputs = 1;

        if (brain instanceof NeuralNetwork) {
            this.brain = brain.copy();
            this.brain.mutate(mutate);
        } else {
            this.brain = new NeuralNetwork(inputs, hiddens, outputs);
        }
        this.fitness = 0;
        this.score = 0;
    }

    think(pipes) {

        // Given inputs
        var inputs = [];
        inputs[0] = map(this.y, 0, height, 0, 1);
        inputs[1] = map(pipes[0].top, 0, height, 0, 1);
        inputs[2] = map(pipes[0].bottom, 0, height, 0, 1);
        inputs[3] = map(pipes[0].x, this.x, width, 0, 1);
        inputs[4] = map(this.velocity, this.flap, -this.flap, 0, 1);

        // Feed inputs into brain
        var outputs = this.brain.predict(inputs);
        // Produce outputs if higher 0.5 jump else not...
        if (outputs[0] > 0.5) {
            this.up();
        }
    }
    show() {
        fill(255, 100);
        stroke(255);
        ellipse(this.x, this.y, this.size);
    }

    up() {
        this.velocity += this.flap;
    }

    update() {
        // Plus means going down cause
        // height of TOP is 0 till bottom is full height

        this.score++;

        this.velocity += this.gravity;
        this.y += this.velocity;
    }

    offscreen() {
        return (this.y > height - this.size || this.y < 0 + this.size);
    }

    // Create a copy of this bird
    copy() {
        return new Bird(this.brain);
    }

}