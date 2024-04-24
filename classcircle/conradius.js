class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get Area() {
        return parseInt(Math.PI * this.radius ** 2);
    }
    get Circumference() {
        return Math.floor(2 * Math.PI * this.radius);
    }
    
}
const circle3 = new Circle(1.0)
console.log(circle3);
console.log(circle3.Area);
console.log(circle3.Circumference);
console.log("..................");
const circle4 = new Circle(5);
console.log(circle4.Area);
console.log(circle4.Circumference);