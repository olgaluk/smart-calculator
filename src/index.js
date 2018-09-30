class SmartCalculator {
  constructor(initialValue) {
    this.firstNumber = initialValue; 
    this.secondNumber = 0; 
    this.lastNumber = initialValue; 
    this.needSecondNumber = false; 
    this.lastAction = ''; 
    this.valueOf = function() { return this.firstNumber + this.secondNumber; }; 
  }

  add(number) {
    this.needSecondNumber = true; 
    this.firstNumber += this.secondNumber; 
    this.secondNumber = number; 
    this.lastNumber = number; 
    this.lastAction = 'add'; 
    this.previosPower = 0; 
    return this; 
  }
  
  subtract(number) {  
    this.needSecondNumber = true; 
    this.firstNumber += this.secondNumber; 
    this.secondNumber = -number; 
    this.lastNumber = number; 
    this.lastAction = 'subtract'; 
    this.previosPower = 0; 
    return this; 
  }

  multiply(number) {  
    if (!this.needSecondNumber) { 
      this.firstNumber *= number; 
      } else { 
      this.secondNumber *= number; 
      } 
      this.lastNumber = number; 
      this.lastAction = 'multiply'; 
      this.previosPower = 0; 
      return this; 
  }

  devide(number) {    
    if (!this.needSecondNumber) { 
      this.firstNumber /= number; 
      } else { 
      this.secondNumber /= number; 
      } 
      this.lastNumber = number; 
      this.lastAction = 'devide'; 
      this.previosPower = 0; 
      return this; 
  }

  pow(number) {   
    if (this.previosPower === 1) { 
      number = 1; 
    } 
    this.previosPower = number; 
    for(let i=1; i<number; i++) { 
    this.multiply(this.lastNumber); 
    } 
    this.lastNumber = Math.pow(this.lastNumber,number); 
    this.lastAction = 'pow'; 
    return this;   
  } 
}

module.exports = SmartCalculator;
