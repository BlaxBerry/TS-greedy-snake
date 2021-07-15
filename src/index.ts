// import less
import './style/index.less'

// food class
class Food {
    // food element
    element: HTMLElement;

    constructor() {
        // get the element in html page
        this.element = document.getElementById('food')!;
    }

    // get position X
    get x() {
        return this.element.offsetLeft;
    }
    // get position Y
    get y() {
        return this.element.offsetTop;
    }

    // change position
    change() {
        // (0 ~ stage.width-this.food.width) (0~290)
        let left = Math.round(Math.random() * 29) * 10;
        let top = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }


}
// test code
const food = new Food()
console.log(food.x, food.y);
food.change()
console.log(food.x, food.y);
