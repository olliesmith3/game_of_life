# Game of Life

## Motivation
I loved the idea of this primitive simulation of cells and the cool patterns, oscillators and even spaceships that could be built with it. It was also a good project for learning React with Typescript.

## How to use

The game is deployed at: https://game-of-life-2.herokuapp.com

The game works on three simple rules:
  An alive cell with 2 or 3 alive neighbours remains alive
  An alive cell with any other number of alive neighbours dies
  A dead cell can come back to life if it has exactly 3 alive neighbours

Each time you click the next button, these rules will be applied to each cell.

## How to run the tests

clone this repository and change into the game-of-life directory. You can then install the dependencies and run the tests.
```
$ git clone https://github.com/olliesmith3/game_of_life.git
$ cd game-of-life
$ npm install
$ npm start
```

