function createGroceryList(items) {
    for (let i = 0; i < items.length; i++) {
      if (items[i] === "banana") {
        console.log("Don't forget to buy the bananas!");
      } else if (items[i] === "milk") {
        console.log("Remember to pick up some milk.");
      } else if (items[i] === "bread") {
        console.log("Grab a loaf of bread.");
      } else {
        console.log("Don't forget the " + items[i]);
      }
    }
  }
  
  module.exports = createGroceryList;
  