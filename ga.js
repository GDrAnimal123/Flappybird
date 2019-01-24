function nextGeneration() {

    console.log("Next Generation...")
    calculateFitness(memory);

    for (var i = 0; i < TOTAL; i++) {
        birds[i] = poolSelection(memory);
    }
}

function poolSelection(birds) {
    // Select a highest fitness bird from memory
    var index = 0;
    var r = random(1);

    while (r > 0) {
        r = r - birds[index].fitness;
        index++;
    }

    index--;

    var bird = birds[index];
    var child = new Bird(bird.brain);

    return child;
}

function calculateFitness(birds) {
    var sum = 0;
    for (var bird of birds) {
        sum += bird.score;
    }

    for (var bird of birds) {
        bird.fitness = bird.score / sum;
    }
}