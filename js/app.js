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
  // make condition alert
  const totalCost = document.getElementById('total-cost');
  if(totalIncome < totalCostAmount){ 
    alert('not enough money')
  }
  //update totalCost
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
//second function 
function getPercentInputField(input1){
  const inputField = document.getElementById(input1);
  const inputText = inputField.value;
  const totalIncome = parseFloat(inputText);
  return totalIncome;
  }
  //event handler save button
  document.getElementById('save-btn').addEventListener('click', function(){
  //income field
  const totalIncome = getPercentInputField('total-income');

  const  balanceTotal = document.getElementById('total-balance');
  const balanceText = balanceTotal.innerText;
  const remainBalance = parseFloat(balanceText);
  //input percent field
  const amountPercent = getPercentInputField('percent');
  //calculation
  let saveAmount = totalIncome * amountPercent / 100;
  let remainAmount = remainBalance - saveAmount;
  if(remainAmount < saveAmount){
    alert('not enough money')
  }
  // save amount
  let totalSave = document.getElementById('total-save');
  if(saveAmount > 0){
  let totalSaveText = totalSave.innerText;
  totalSave.innerText = saveAmount;
  }
  //remaing balance
  let totalRemain = document.getElementById('total-remain');
  if(remainAmount > 0){
  let totalRemainText = totalRemain.innerText;
  totalRemain.innerText = remainAmount;
  }
})