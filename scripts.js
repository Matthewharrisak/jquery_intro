console.log('JS');
let favFoods = ["rice" , "kimchi" , " soysauce" , "peanutBUTTER" , "ICECREAM"];
$(document).ready(onReady);

let employees = [];

function onReady(params) {
    console.log('Hello from Jquery');
    $('#clickMe').on('click' , buttonClicked);
    $('#submitForm').on('click' , submitForm);


    // descendent selector
    $('#favoriteFoods').on('click' , '.deleteBtn' , deleteFunc);
    $('#favoriteFoods').on('click' , '.changeColor' , changeColor);

    
}    

function submitForm(){
    console.log('SUBMITTED!!! lol actually maybe not, you total clown');
// this is where I want to grab input values;
// getter .val()
let name = $('#name').val();
console.log('name:' , name);

employees.push(name);

$('#name').val('');
 $('#title').val('');
for (let index = 0; index < employees.length; index++) {
    
 
}

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

