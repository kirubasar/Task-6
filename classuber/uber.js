class UberPrice {
    constructor(distance, time) {
        this.distance = distance; 
        this.time = time; 
    }

    calculatePrice(baseFare, costPerMile, costPerMinute) {
        const totalDistanceCost = this.distance * costPerMile;
        const totalTimeCost = this.time * costPerMinute;
        const totalCost = totalDistanceCost + totalTimeCost + baseFare;
        return totalCost;
    }
}
const uberPrice = new UberPrice(10, 20, 5);
console.log(uberPrice);
console.log(uberPrice.calculatePrice(6, 0.5, 3)); 