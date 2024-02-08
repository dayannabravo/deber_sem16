'use strict'
class Refrigerator {
    constructor() {
      this.meals = [];
    }
  
    addMeal(meat) {
      this.meals.push(meat);
      alert(`En el Refrigerador hay: ${this.meals.join(' ')}`);

    }
  }
  

let refrigerator = new Refrigerator();
refrigerator.addMeal("Coca-Cola, Verduras, Pollos y Aguas.");
