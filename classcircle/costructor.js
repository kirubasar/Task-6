class Circle {
    constructor(){
        this.radius = 0;
        this.color = "";
    }
    static getRadius() {
        return `the circle radius:${this.radius} and the circle color:${this.color}`;
    }
    static setRadius(radius) {
        this.radius = radius;
    }
    static getColor() {
        return `this is my favorite color: ${this.color}`;
    }
    static setColor(color) {
        this.color = color;
    }
}
const circle1 = new Circle()
console.log(circle1);
Circle.setRadius(1.0);
Circle.setColor("red");
console.log(Circle.getRadius());
console.log(Circle.getColor());
