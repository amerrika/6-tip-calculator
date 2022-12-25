// Elements
const labelTipAmount = document.querySelector(".tip-amount");
const labelTotal = document.querySelector(".total");

const btnReset = document.querySelector(".btn-reset");
const btnTipArray = document.getElementsByClassName("btn-tip");

const inputBill = document.querySelector(".bill-input");
const inputPeople = document.querySelector(".people-input");

// Starting Conditions

let bill;
let tip;
let people;

function init(){

    bill = 0;
    tip = 1;
    people = 1;

    displayUpdate();
    inputBill.value = bill;
    inputPeople.value = people;
}

init()


/* --- Functions --- */

// Update the bill value
function inputBillUpdate(){
    bill = parseFloat(inputBill.value);
}

// Update the people number value
function inputPeopleUpdate(){
    people = parseInt(inputPeople.value);
}

// Clear input fields
function inputFieldClear(){
    inputBill.value = bill;
    inputPeople.value = people;
}

// Tip Amount Display Update
function displayUpdate(){
    labelTipAmount.innerText = "$" + ((bill*tip - bill)/people).toFixed(2);
    labelTotal.innerText = "$" + ((bill*tip)/people).toFixed(2);
}


/* --- Events ---- */

inputBill.addEventListener("input", function(){
    // Perform action if input is a number and if it is > 0
    if (inputBill.value >= 0) {
        inputBillUpdate();
        displayUpdate();
        } 
    // If input is not a number or if it is < 0 display alert message and clear input field
     else {
        alert("Please enter numbers >= 0");
        inputFieldClear();
    } 
})

inputPeople.addEventListener("input", function(){
    // if input is a number and > 0
    if (inputPeople.value > 0) {
        inputPeopleUpdate();
        displayUpdate();

    } else {
        alert("Please choose a number of people > 0");
        inputFieldClear();
    }
})

// Tip Values
for (let i = 0; i < btnTipArray.length; i++) {
    // We need a value of a clicked tip button
    btnTipArray[i].addEventListener("click", function(e){
        // Update tip value
        tip = 1 + (parseInt(e.target.innerText))/100; 
        displayUpdate();

        // add class tip-active
        btnTipArray[i].classList.add("tip-active");
        
        // remove tip-active from buttons that are not being clicked anymore
        for(let j = 0; j < btnTipArray.length; j++){
            if(btnTipArray[j] != btnTipArray[i]){
                btnTipArray[j].classList.remove("tip-active");
            }
        }
    })
};

// Reset Button
btnReset.addEventListener("click", function(){
    init();
    console.log(tip, people, bill)
});
    
  

// Ako unesem slovo ili sličan znak display mi NaN
// custom tip