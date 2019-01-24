class Pipe {
    constructor() {
        this.x = width * 100 / 100;
        this.size = 50 // Width of the pole
        this.gap_size = 175 // Gap between 2 poles
        this.bottom = getRandomInt(height * 10 / 100, height * 70 / 100); // How tall is the bottom polls (random numbers)
        this.top = height - this.bottom - this.gap_size; // How tall is the top polls (random numbers)
        this.speed = -6; // Moving poll to left of the screen.
    }

    show() {
        fill(255);

        rect(this.x, 0, this.size, this.top);
        rect(this.x, height - this.bottom, this.size, this.bottom);
    }

    update() {
        this.x += this.speed
    }

    hits(bird) {

        if (bird.x + bird.size > this.x && bird.x < this.x + this.size) {
            // When the bird enters the middle gap between 2 pole
            if (bird.y < this.top || bird.y > height - this.bottom) {
                return true
            }
        }

        // bird.score += 1;
        return false
    }

    offscreen() {
        return (this.x <= -this.size)
    }

}