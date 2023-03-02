const billInput = document.querySelector(".billinput");
const peopleInput = document.querySelector(".peopleinput");
const tipPerPerspn = document.querySelector(".tip-amount");
const totalPerPerson = document.querySelector(".total-amount");
const reset = document.querySelector(".reset");
const buttons = document.querySelectorAll('.buttons button');
const customButton = document.querySelector('.buttons .custom');

billInput.addEventListener("input", billInputFunction);
peopleInput.addEventListener("input", peopleInputFunction);
reset.addEventListener("click", resetFunction);
buttons.forEach(button => {
    button.addEventListener('click', () => {
      //მოხსენი აქტივ კლასი ღილაკებს
      buttons.forEach(btn => btn.classList.remove('active'));
      // მიეცი აქტივ კლასი დაკლიკებისას
      button.classList.add('active');
      // ცვლადის ველიუ განაახლე
      tipValue = parseInt(button.innerText) / 100;
      //ტოტალების კალკულაცია გამოიძახე
      calculateTotals();
      console.log(tipValue);
    });
  });
customButton.addEventListener('input', () => {
    // მოხსენი აქტივ კლასი ღილაკებს
    buttons.forEach(btn => btn.classList.remove('active'));
    // ცვლადის ველიუ განაახლე
    tipValue = parseFloat(customButton.value) / 100;
    calculateTotals();
    console.log(tipValue);
  });


billInput.value = "";
peopleInput.value = "1";
tipPerPerspn.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);


let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0;


function billInputFunction () {
    billValue = parseFloat(billInput.value)
    calculateTotals();
    console.log(billValue);
}

function peopleInputFunction () {
    peopleValue =parseFloat(peopleInput.value)
    calculateTotals();
    console.log(peopleValue);
}

function resetFunction () {
    billInput.value = "0.0";
    peopleInput.value = "1";
    tipPerPerspn.innerHTML = "$" + (0.0).toFixed(2);
    totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);
    buttons.forEach(btn => btn.classList.remove('active'));
    billValue = "";
    peopleValue = 1;
    tipValue = "";
    customButton.value = "";
}

function calculateTotals() {
    let tipPerPersonValue = (billValue * tipValue) / peopleValue;
    let totalPerPersonValue = (billValue / peopleValue) + tipPerPersonValue;
    tipPerPerspn.innerHTML = "$" + tipPerPersonValue.toFixed(2);
    totalPerPerson.innerHTML = "$" + totalPerPersonValue.toFixed(2);
    console.log(tipPerPersonValue);
  }
  








