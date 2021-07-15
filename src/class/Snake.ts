// snake class
export default class Snake {
    snake: HTMLElement;
    head: HTMLElement;
    bodys: HTMLCollection;

    constructor() {
        this.snake = document.getElementById('snake') as HTMLElement;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodys = this.snake?.getElementsByTagName('div') as HTMLCollection;
    }

    // get head position X
    get x() {
        return this.head.offsetLeft;
    }
    // get head position Y
    get y() {
        return this.head.offsetTop;
    }

    // set head position X
    set x(value) {
        this.head.style.left = value + 'px';

        if (value < 0 || value > 290) {
            // dead
            throw new Error('Game Over')
        }
    }
    // set head position Y
    set y(value) {
        this.head.style.top = value + 'px';

        if (value < 0 || value > 290) {
            // dead
            throw new Error('Game Over')
        }
    }

    // add body
    addBody() {
        this.snake.insertAdjacentHTML("beforeend", "<div></div>")
    }

    // (0 ~ stage.width-this.food.width) (0~290)

}