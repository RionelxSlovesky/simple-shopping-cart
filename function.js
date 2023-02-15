const btnCaseField = document.getElementById('btn-case-field');
const btnCasePlus = document.getElementById('btn-case-plus');
const btnCaseMinus = document.getElementById('btn-case-minus');
const caseTotal = document.getElementById('case-total');

const btnIphoneField = document.getElementById('btn-iphone-field');
const btnIphonePlus = document.getElementById('btn-iphone-plus');
const btnIphoneMinus = document.getElementById('btn-iphone-minus');


console.log(btnCaseField.parentNode.parentNode.childNodes[3].childNodes[1].innerText)

function updateItemCost(isIncrement, field){

    const oldCost = parseInt(field.parentNode.parentNode.childNodes[3].childNodes[1].innerText);

    let singleCost;

    if(isIncrement==true){
        singleCost = oldCost / (parseInt(field.value)-1);
    }else{
        singleCost = oldCost / (parseInt(field.value)+1);
    }

    const newCost = singleCost * parseInt(field.value);

    field.parentNode.parentNode.childNodes[3].childNodes[1].innerText = newCost;

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
