window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
      setupIntialValues();
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        update();
      });
    }
  });
  
  function getCurrentUIValues() {
    return {
      amount: +(document.getElementById("loan-amount").value),
      years: +(document.getElementById("loan-years").value),
      rate: +(document.getElementById("loan-rate").value),
    }
  }
  
  // Get the inputs from the DOM.
  // Put some default values in the inputs
  // Call a function to calculate the current monthly payment
  function setupIntialValues() {
    let values = {amount:5000, years : 5, rate: 3.4};
    let amountUI = document.getElementById("loan-amount");
    amountUI.value = values.amount;
    let yearsUI = document.getElementById("loan-years");
    yearsUI.value = values.years ; 
    let rateUI = document.getElementById("loan-rate");
    rateUI.value = values.rate ;
  }
  
  // Get the current values from the UI
  // Update the monthly payment
  function update() {
  }
  
  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  function calculateMonthlyPayment(values) {
    let rateOfLoan = ((values.rate/12)/100);
  let totalNumberOfPayments = (values.years*12);
  let principleAmount = (values.amount);
  return ((principleAmount * rateOfLoan)/(1-Math.pow(1+rateOfLoan), -totalNumberOfPayments)).toFixed(2);
  }
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  function updateMonthly(monthly) {
  }
  