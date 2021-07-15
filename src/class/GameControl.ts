import Snake from "./Snake";
import Food from "./Food";
import ScoreBar from "./Bar";

// control all Class
export default class GameControl {
    snake: Snake;
    food: Food;
    ScoreBar: ScoreBar;
    direction: string = '';

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.ScoreBar = new ScoreBar();

        this.init()
    }

    // init statrt game
    init() {
        // keyup event
        document.addEventListener('keydown', this.keyDownHandler.bind(this))
    }

    // keyup event
    keyDownHandler(event: KeyboardEvent) {
        this.direction = event.key;
        console.log(this.direction);


    }


}

