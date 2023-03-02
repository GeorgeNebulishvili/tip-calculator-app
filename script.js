const billInput = document.querySelector(".billinput");
const peopleInput = document.querySelector(".peopleinput");
const tipPerPerspn = document.querySelector(".tip-amount");
const totalPerPerson = document.querySelector(".total-amount");
const reset = document.querySelector(".reset");
const buttons = document.querySelectorAll('.buttons button');
const customButton = document.querySelector('.buttons .custom');
const error = document.querySelector(".error");

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
      customButton.value = "";
    });
  });
customButton.addEventListener('input', () => {
    // მოხსენი აქტივ კლასი ღილაკებს
    buttons.forEach(btn => btn.classList.remove('active'));
    // ცვლადის ველიუ განაახლე
    tipValue = parseFloat(customButton.value) / 100;
    calculateTotals();
  });


billInput.value = "";
peopleInput.value = "1";
tipPerPerspn.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);


let billValue = "";
let peopleValue = 1;
let tipValue = 0;


function billInputFunction () {
    billValue = parseFloat(billInput.value)
    calculateTotals();
}

function peopleInputFunction () {
    peopleValue =parseFloat(peopleInput.value)
    if (peopleValue < 1) {
      peopleInput.classList.add('error');
      error.style.display = "inline-block";
      tipPerPerspn.innerHTML = "$" + (0.0).toFixed(2);
      totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);
    } else {
      peopleInput.classList.remove('error');
      error.style.display = "none";
      calculateTotals();
    }
}

function resetFunction () {
    billInput.value = "";
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
  }


  








