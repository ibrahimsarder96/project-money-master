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