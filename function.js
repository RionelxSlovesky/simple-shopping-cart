const btnCaseField = document.getElementById('btn-case-field');
const btnCasePlus = document.getElementById('btn-case-plus');
const btnCaseMinus = document.getElementById('btn-case-minus');

const btnIphoneField = document.getElementById('btn-iphone-field');
const btnIphonePlus = document.getElementById('btn-iphone-plus');
const btnIphoneMinus = document.getElementById('btn-iphone-minus');



function incrementItems (element1, element2){

    element1.addEventListener('click', function(){

        element2.value = parseInt(element2.value)  + 1;

    })

}

function decrementItems(element1,element2){

    element1.addEventListener('click', function(){
    
        if(element2.value - 1 < 0){
            return;
        }
    
        element2.value = parseInt(element2.value)  - 1;
    
    })

}


incrementItems(btnCasePlus, btnCaseField);
decrementItems(btnCaseMinus,btnCaseField);

incrementItems(btnIphonePlus, btnIphoneField);
decrementItems(btnIphoneMinus,btnIphoneField);
