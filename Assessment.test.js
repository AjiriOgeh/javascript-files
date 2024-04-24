let {filterTestScores, addFivePoints, squareNumbers, assignBooks, identifyAfternoonClasses, calculateExpenses} = require("./Assessment.js");


test("Filter Test Scores",()=>{
  let testScores = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  let result = filterTestScores(testScores);
  expect(result).toEqual([70, 80, 90, 100]);
})

test("Filter Test Scores 2",()=>{
  let testScores = [90, 75, 45, 55, 85 , 25];
  let result = filterTestScores(testScores);
  expect(result).toEqual([90, 75, 85]);
})

test("Add five points to scores",()=>{
  let testScores = [85, 92, 78, 88, 95];
  let result = addFivePoints(testScores);
  expect(result).toEqual([90, 97, 83, 93, 100]);
})

test("Add five points to scores 2",()=>{
  let testScores = [10, 20, 30, 40, 50];
  let result = addFivePoints(testScores);
  expect(result).toEqual([15, 25, 35, 45, 55]);
})

test("Square numbers in list",()=>{
  let numbers = [2, 4, 6, 8, 10];
  let result = squareNumbers(numbers);
  expect(result).toEqual([4, 16, 36, 64, 100]);
})

test("Square numbers in list 2",()=>{
  let numbers = [1, 3, 5, 7, 9];
  let result = squareNumbers(numbers);
  expect(result).toEqual([1, 9, 25, 49, 81]);
})

test("Assign Books to Members",()=>{
  let members = ["Emily", "Jack", "Sophia", "Daniel"]
  let books = ["Animal Farm", "To Kill a MockingBird", "The Great Gatsby", "Brave New World"]
  let assignedList = assignBooks(members, books);
  expect(assignedList).toEqual([{name: "Emily", book: "Animal Farm"}, 
                          {name: "Jack", book: "To Kill a MockingBird"}, 
                          {name: "Sophia", book: "The Great Gatsby"}, 
                          {name: "Daniel", book: "Brave New World"}]);
})

test("Schedule classes",()=>{
  let scheduledClasses = ["9:00AM", "11:00AM", "1:00PM", "3:00PM", "5:00PM"];
  let afternoonClasses = identifyAfternoonClasses(scheduledClasses);
  expect(afternoonClasses).toEqual(["1:00PM", "3:00PM", "5:00PM"]);
})

test("Schedule classes 2",()=>{
  let scheduledClasses = ["8:00AM", "10:00AM", "12:00PM", "2:00PM", "4:00PM"];
  let afternoonClasses = identifyAfternoonClasses(scheduledClasses);
  expect(afternoonClasses).toEqual(["12:00PM", "2:00PM", "4:00PM"]);
})

test("Monthly Expenses",()=>{
  let monthExpenditure = {
    "groceries" : 150,
    "dining out": 100,
    "transportation": 50,
    "entertainment": 80
  }
  let result = calculateExpenses(monthExpenditure);
  expect(result).toEqual(380);
})

test("Monthly Expenses 2",()=>{
  let monthExpenditure = {
    "gym classes" : 25_000,
    "subscriptions": 5000,
    "transportation": 60_000,
    "rent": 150_000
  }
  let result = calculateExpenses(monthExpenditure);
  expect(result).toEqual(240_000);
})



