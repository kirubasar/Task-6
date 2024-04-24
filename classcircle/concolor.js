class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    toString(){
        return `Circle[radius = ${this.radius}, color = ${this.color}]`;
    }
    get area() {
        return parseInt(Math.PI * this.radius ** 2);
    }
    get circumference() {
        return Math.floor(2 * Math.PI * this.radius);
    }
    
}
const circle3 = new Circle(1.0, "red");
console.log(circle3.area);
console.log(circle3.circumference);
console.log(circle3.toString());