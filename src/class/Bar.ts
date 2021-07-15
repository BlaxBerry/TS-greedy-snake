// message bar class
export default class ScoreBar {
    score: number = 0;
    level: number = 1;
    scoreElement: HTMLElement;
    levelElement: HTMLElement;
    maxLevel: number;
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 3) {
        this.scoreElement = document.getElementById('score')!;
        this.levelElement = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // score add
    addScore() {
        this.score++;
        this.scoreElement.innerHTML = this.score + '';
        if (this.score % this.upScore === 0) {
            this.upLevel()
        }
    }

    // level up
    upLevel() {
        if (this.level < this.maxLevel) {
            this.level++;
            this.levelElement.innerHTML = this.level + '';
        }
    }
}