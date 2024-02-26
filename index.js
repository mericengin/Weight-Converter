const textBox = document.getElementById("textBox");
const toKg = document.getElementById("toKg");
const toPounds = document.getElementById("toPounds");
const submitBtn = document.getElementById("submit");
const resultText = document.getElementById("resultText");

let weight;

function convertWeight() {

    if(textBox.value === "") {
        resultText.textContent = "Please Enter your Weight!";
    }
    else if(!toKg.checked && !toPounds.checked) {
        resultText.textContent = "Please Select an Unit!";
    }
    else {
        if(toKg.checked) {
        weight = textBox.value * 0.45359237;
        resultText.textContent = `Your Weight in KG is ${weight.toFixed(2)}`;
    }
    else if(toPounds.checked) {
        weight = textBox.value * 2.2;
        resultText.textContent = `Your Weight in LBs/Pounds is ${weight.toFixed(2)}`;
    }
    }
}

submitBtn.addEventListener("click", convertWeight);

document.addEventListener("keydown", (event)  => {
    if (event.key === "Enter") {
        convertWeight();
    }
})