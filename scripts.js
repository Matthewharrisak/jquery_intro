console.log('JS');
let favFoods = ["rice" , "kimchi" , " soysauce" , "peanutBUTTER" , "ICECREAM"];
$(document).ready(onReady);



function onReady(params) {
    console.log('Hello from Jquery');
    $('#clickMe').on('click' , buttonClicked);

    // descendent selector
    $('#favoriteFoods').on('click' , '.deleteBtn' , deleteFunc);
    $('#favoriteFoods').on('click' , '.changeColor' , changeColor);

    
}    

function deleteFunc() {
    console.log('delete');
    $(this).parent().remove();
}    

function changeColor() {
    $(this).parent().toggleClass('pinkColor');
}
// this = delete btn
//the .parent() = the <li>
// .remove() removes that element

function buttonClicked(){
    let ulFood = $("#favoriteFoods") 
    for (let i = 0; i < favFoods.length; i++){
    ulFood.append(
        `<li> one of my favorite foods is ${favFoods[i]} 
            <button class="deleteBtn">DELETE</button> 
            <button class="changeColor">Change Color</button> 
        </li>`);
    }
    
        console.log("IM CLICKED");
}

// event #1
onReady();

onReady();    

    

