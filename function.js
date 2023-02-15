const btnCaseField = document.getElementById('btn-case-field');
const btnCasePlus = document.getElementById('btn-case-plus');
const btnCaseMinus = document.getElementById('btn-case-minus');

const btnIphoneField = document.getElementById('btn-iphone-field');
const btnIphonePlus = document.getElementById('btn-iphone-plus');
const btnIphoneMinus = document.getElementById('btn-iphone-minus');

const itemTotal = document.getElementsByClassName('item-total');
const totalCost = document.getElementById('total-cost');
const tax = document.getElementById('tax');
const finalCost = document.getElementById('final-cost');

function updateSummary(){

    let total = 0;

    for(i of itemTotal){
        total = total + parseFloat(i.innerText);
    }

    totalCost.innerText = total;

    const taxVal = ((total*15)/100).toFixed(1);

    tax.innerText = taxVal;

    const final = parseFloat(total)  + parseFloat(taxVal);

    finalCost.innerText = final;

}

updateSummary();


function updateItemCost(isIncrement, field){

    const oldCost = parseFloat(field.parentNode.parentNode.childNodes[3].childNodes[1].innerText);

    let singleCost;

    if(isIncrement==true){
        singleCost = oldCost / (parseFloat(field.value)-1);
    }else{
        singleCost = oldCost / (parseFloat(field.value)+1);
    }

    const newCost = singleCost * parseFloat(field.value);

    field.parentNode.parentNode.childNodes[3].childNodes[1].innerText = newCost;

    updateSummary();

}


function incrementItems (btn, field){

    btn.addEventListener('click', function(){

        field.value = parseInt(field.value)  + 1;

        updateItemCost(true, field);

    })

}

function decrementItems(btn,field){

    btn.addEventListener('click', function(){
    
        if(parseInt(field.value)-1 < 1){
            return;
        }
    
        field.value = parseInt(field.value)  - 1;

        updateItemCost(false, field);

    })

}


incrementItems(btnCasePlus, btnCaseField);
decrementItems(btnCaseMinus,btnCaseField);

incrementItems(btnIphonePlus, btnIphoneField);
decrementItems(btnIphoneMinus,btnIphoneField);
