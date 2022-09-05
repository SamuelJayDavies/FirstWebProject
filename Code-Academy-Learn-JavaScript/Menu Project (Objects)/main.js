const menu = {
    mealSelection : ['pasta', 'burger', 'pizza', 'sandwich', 'chicken'],
    priceSelection : [5, 7, 8, 10, 12],
    _meal : '',
    _price : 0,
    set meal(mealToCheck){
      if(typeof mealToCheck === 'string'){
        return this._meal = mealToCheck;
      } else {
        console.log('Please ensure the meal is a string');
      }
    },
    set price(priceToCheck){
      if(typeof priceToCheck === 'number'){
        return this._price = priceToCheck;
      } else {
        console.log('Please ensure the price is an integer');
      }
    },
    get todaysSpecial(){
      if(this._meal && this._price){
        return `Today's Special is ${this._meal} for £${this._price}!`;
      } else {
        return `Meal or price was not set correctly!`;
      }
    },
    special(){
      let mealIndex = Math.floor(Math.random() * 5);
      console.log(mealIndex);
      menu.meal = this.mealSelection[mealIndex];
      let priceIndex = Math.floor(Math.random() * 5);
      menu.price = this.priceSelection[priceIndex];
    }
  };
  
  menu.meal = 'pasta';
  menu.price = 10;
  
  console.log(menu);
  console.log(menu.todaysSpecial);
  menu.special();
  console.log(menu.todaysSpecial);