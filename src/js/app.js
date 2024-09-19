import { createForm } from "../class/createForm";
import { checkValidate } from "../class/checkValidate";

let valid = new checkValidate();
let form = new createForm();
form.addForm();

const input = document.querySelector('.input');
const button = document.querySelector('.button'); 

input.addEventListener('input', () => {
    if (valid.firmaCard(input.value) == "Visa") {
        form.disabledCard("Visa")
    }else if (valid.firmaCard(input.value) == "AmericanExpress") {
        form.disabledCard("AmericanExpress")
    }else if (valid.firmaCard(input.value) == "Discover") {
        form.disabledCard("Discover")
    }else if (valid.firmaCard(input.value) == "DinersClub") {
        form.disabledCard("DinersClub")
    }else if (valid.firmaCard(input.value) == "JCB") {
        form.disabledCard("JCB")
    }else if (valid.firmaCard(input.value) == "Mastercard") {
        form.disabledCard("Mastercard")
    }else if (valid.firmaCard(input.value) == "Mir") {
        form.disabledCard("Mir")
    }else if (input.value == "") {
        form.disabledCard("remove")
    }
})

button.addEventListener('click', (event) => {
    event.preventDefault();
    valid.validCard(input.value)
})





