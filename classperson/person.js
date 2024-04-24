class Person {
    constructor(name, age, gender, status, food) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.status = status;
        this.food = food;
        this.dance = "fusion";

    }
    get favoriteFood() {
        console.log(`I like ${food} very much.`)
    }
    introduce() {
        console.log(`Hello, my name is ${this.name}. I am ${this.age} years old. I am a ${this.gender} ${this.status}.`);
    }
    
     hobbies() {
        console.log(`my favorite dance is ${this.dance}.I am dancing very well.`)
     }  
    }
const sri = new Person("srikiruba", 21, "female", "student","biriyani");
console.log(sri);
sri.favoriteFood;
sri.introduce();
sri.hobbies();