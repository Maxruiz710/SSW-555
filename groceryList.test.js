const createGroceryList = require('./groceryList');

function testCreateGroceryList() {
  const mockConsoleLog = console.log;
  const mockLogs = [];
  console.log = message => {
    if (message !== "Testing createGroceryList function with items:") {
      mockLogs.push(message);
    }
  };

  const items = ["apple", "banana", "milk", "bread", "cheese", "tomato", "onion"];

  console.log("Testing createGroceryList function with items:", items);

  createGroceryList(items);

  console.log = mockConsoleLog;

  console.log("Captured log messages:");
  console.log(mockLogs);

  if (mockLogs.length !== 7) {
    console.error("Expected 7 log messages, but got", mockLogs.length);
    return;
  }

  const expectedLogs = [
    "Don't forget the apple",
    "Don't forget to buy the bananas!",
    "Remember to pick up some milk.",
    "Grab a loaf of bread.",
    "Don't forget the cheese",
    "Don't forget the tomato",
    "Don't forget the onion"
  ];

  console.log("Expected log messages:");
  console.log(expectedLogs);

  for (let i = 0; i < mockLogs.length; i++) {
    if (mockLogs[i] !== expectedLogs[i]) {
      console.error("Mismatch at index", i);
      console.error("Expected:", expectedLogs[i]);
      console.error("Got:", mockLogs[i]);
      return;
    }
  }

  console.log("Test passed successfully!");
}

testCreateGroceryList();
