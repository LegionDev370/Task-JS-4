let select = document.querySelector("#currency");
let form = document.querySelector("form");
let input = document.querySelector("#input");
let btn = document.querySelector("button");
let dollarToSumm = document.querySelector(".DollarToSumm");
let euroToSumm = document.querySelector(".EuroToSumm");
let span_inline = document.querySelector(".span-inline");
let span_euro = document.querySelector(".span-euro")

form.addEventListener("submit", function(evt){
    evt.preventDefault()
    let inputvalue = input.value;
    let dollarPrice = 10650
    let euroPrice = 11650
    if (!isNaN(inputvalue)){
        if (select.value === "dollar"){
            let resultDollar = inputvalue * dollarPrice;
            span_inline.textContent = + " " + resultDollar + " " + "so'm";
        }else if (select.value === "euro"){
            let resultEuro = inputvalue * euroPrice;
            span_euro.textContent = + " " + resultEuro + " " + "so'm";
        }
    }else{
        alert("Please only numbers")
    }
})


// dollarToSumm.textContent += + " " + resultDollar + " " + "so'm";