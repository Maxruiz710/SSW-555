const createGroceryList = require('./groceryList');

function testCreateGroceryList() {
  const items = ["apple", "banana", "milk", "bread", "cheese", "tomato", "onion"];

  console.log("Testing createGroceryList function with items:", items);

  const reminders = createGroceryList(items);

  console.log("Generated reminders:");
  console.log(reminders);

  if (reminders.length !== 7) {
    console.error("Expected 7 reminders, but got", reminders.length);
    return;
  }

  const expectedReminders = [
    "Don't forget the apple",
    "Don't forget to buy the bananas!",
    "Remember to pick up some milk.",
    "Grab a loaf of bread.",
    "Don't forget the cheese",
    "Don't forget the tomato",
    "Don't forget the onion"
  ];

  console.log("Expected reminders:");
  console.log(expectedReminders);

  for (let i = 0; i < reminders.length; i++) {
    if (reminders[i] !== expectedReminders[i]) {
      console.error("Mismatch at index", i);
      console.error("Expected:", expectedReminders[i]);
      console.error("Got:", reminders[i]);
      return;
    }
  }

  console.log("Test passed successfully!");
}

testCreateGroceryList();
