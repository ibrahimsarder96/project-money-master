// input function----------------------------------
function getInputField(num1, num2, num3){
  const inputField = document.getElementById(num1, num2, num3);
  const inputText = inputField.value;
  const inputValue = parseFloat(inputText);
  //input field clear
  inputField.value = '';
  return inputValue;
  }
  // Event handler calculate button-------------------
  document.getElementById('calculate-btn').addEventListener('click', function(){
  //income input field
  const inputIncomeField = document.getElementById('total-income');
  const inputText = inputIncomeField.value;
  const totalIncome = parseFloat(inputText);
  // function call
  const foodCost = getInputField('food-cost');
  const rentCost = getInputField('rent-cost');
  const clothCost = getInputField('cloth-cost');
  //calculation
  let totalCostAmount = foodCost + rentCost + clothCost;
  let balance = totalIncome - totalCostAmount;
  // update total
  const totalCost = document.getElementById('total-cost');
  if(totalIncome < totalCostAmount){ 
  alert('not enough money')
  }
  if((foodCost > 0) || ( rentCost > 0) || (clothCost > 0)){
  const totalText = totalCost.innerText;
  totalCost.innerText = totalCostAmount;
  }
  else{
  alert('please, give a number value')
  }
  //update balance
  const totalBalance = document.getElementById('total-balance');

  if((foodCost > 0) || ( rentCost > 0) || (clothCost > 0)){
  const balanceText = totalBalance.innerText;
  totalBalance.innerText = balance;
  }
})