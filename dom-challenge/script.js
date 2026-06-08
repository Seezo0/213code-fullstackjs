let convertButton = document.querySelector(".convert-button")
let fromCurrency = document.querySelector("#curreny-menu-from")
let toCurrency = document.querySelector("#curreny-menu-to")
let amount = document.querySelector("#convert-field")
let result = document.querySelector(".result")
result.style.display = 'none'; 

let currencies = {
    DZD: "Euro",
    Euro: "DZD"
}

function convert() {
    if (amount.value != "") {
        if (fromCurrency.value === "Euro") {
            let calculation = amount.value * 250
            result.innerHTML = "<span>Converted amount:</span> " + calculation + " DZD"
            result.style.display = 'block';
            amount.value = ""
    } else if (fromCurrency.value === "DZD") {
            let calculation = amount.value / 250
            result.innerHTML = "<span>Converted amount:</span> " + calculation + " Euro"
            result.style.display = 'block';
            amount.value = ""
    }
    }

}

function currencySwitcherFrom() {
    /* fromCurrency.value = currencies[toCurrency.Value] */ 
    toCurrency.value = currencies[fromCurrency.value]
}

function currencySwitcherTo() {
    fromCurrency.value = currencies[toCurrency.value]
}

fromCurrency.addEventListener("change", currencySwitcherFrom)
toCurrency.addEventListener("change", currencySwitcherTo)
