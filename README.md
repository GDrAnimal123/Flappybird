# Flappybird
Implement Genetic Algorithm to play Flappy Bird

## How the bird makes decision?
The AI uses Neural Network with 5 attributes to make decision whether the bird should flap or not:
### Inputs
- Height of the bird
- Height of the top pole
- Height of the bottom pole
- Distance between bird and closest bird
- Velocity(how much flap power) of the bird

### Outputs
- Probability (0 - 1) (flap if prob > 0.5)


## How the bird improves on their decision-making?
I make use of Genetic Algorithm:
	-> Create population of birds (the more the faster the AI converges)
	-> Let it play with their own brain (making own's decision)
	-> The best one (highest fitness score) get mutated and get copy to the next generation

## Credits
Checkout [The Coding Train](https://www.youtube.com/watch?v=c6y21FkaUqw) who has inspired me to create this repository
