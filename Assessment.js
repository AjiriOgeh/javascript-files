function filterTestScores(testScores) {
  return testScores.filter(testScore => testScore >= 70)
}


function addFivePoints(testScores) {
  return testScores.map(testScore => testScore + 5)
}

function squareNumbers(numbers) {
  return numbers.map(number => number ** 2) 
}

function assignBooks(members, books) {
  assignedList = []

  for(let count = 0; count < books.length; count++) {
    var memberAndBook = {}
    memberAndBook.name = members[count];
    memberAndBook.book = books[count]
    assignedList.push(memberAndBook)
  }
  return assignedList
}

function identifyAfternoonClasses(scheduledClassTime) {
  return scheduledClassTime.filter(afternoonClass => afternoonClass.includes("PM"))
}

function calculateExpenses(monthlyExpenses) {
  var expenditure = 0
  for(let expense in monthlyExpenses) {
    expenditure += monthlyExpenses[expense]
  }
  return expenditure
}

function sortHealthyItems(shoppingList) {
  let healthyList = shoppingList.filter(healthyItems => healthyItems.isHealthy === true)
  healthyList.forEach(element => {
    console.log(element.name)}
  );
}

module.exports = {filterTestScores, addFivePoints, squareNumbers, assignBooks, identifyAfternoonClasses, calculateExpenses, sortHealthyItems}

const shoppingList = [{name: "Apple", category: "Fruits", isHealthy: true},
                      {name: "Potato Chips", category: "Snacks", isHealthy: false}, 
                      {name: "Carrots", category: "Vegetables", isHealthy: true}, 
                      {name: "Chocolate Bars", category: "Sweets", isHealthy: false}, 
                      {name: "Greek Yogurt", category: "Diary", isHealthy: true}, 
                      {name: "Soda", category: "Beverages", isHealthy: false}]

sortHealthyItems(shoppingList)


