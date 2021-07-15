import Snake from "./Snake";
import Food from "./Food";
import ScoreBar from "./Bar";

// control all Class
export default class GameControl {
    snake: Snake;
    food: Food;
    ScoreBar: ScoreBar;
    // default snake go down
    direction: string = 's';

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.ScoreBar = new ScoreBar();

        this.init()
    }

    // init statrt game
    init() {
        // snake move
        this.move();
        // keyup event
        document.addEventListener('keydown', this.keyDownHandler.bind(this));
    }

    // keyup event
    keyDownHandler(event: KeyboardEvent) {
        this.direction = event.key;
        // console.log(this.direction);
    }


    // snake move
    move() {
        // according to this.direction's value
        let x = this.snake.x;
        let y = this.snake.y;
        console.log(x, y);


        // chage x and y
        // a s d w
        switch (this.direction) {
            case "a":
            case "A":
                x -= 10;
                break;
            case "s":
            case "S":
                y += 10;
                break;
            case "d":
            case "D":
                x += 10;
                break;
            case "w":
            case "W":
                y -= 10;
                break;
        };

        // change snake's position
        this.snake.x = x;
        this.snake.y = y;

        // 
        setTimeout(this.move.bind(this), 500 - (this.ScoreBar.level - 1) * 100)
    }
}

