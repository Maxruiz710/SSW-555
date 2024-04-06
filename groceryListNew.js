const groceryItems = {
    banana: "Don't forget to buy the bananas!",
    milk: "Remember to pick up some milk.",
    bread: "Grab a loaf of bread."
  };
  
  function createGroceryList(items) {
    const reminders = items.map(item => {
      if (groceryItems.hasOwnProperty(item)) {
        return groceryItems[item];
      } else {
        return "Don't forget the " + item;
      }
    });
    return reminders;
  }
  
  module.exports = createGroceryList;
  