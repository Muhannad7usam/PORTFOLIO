/* DOM means Document Object Model--> 
Document is for HTML document
Object(document) takes the html document and shoved it into JavaScript
Model--> it represent the structure   */ 

let count = 2024; // Initialize count with the default value
function increment() {
    count += 1;
    document.getElementById("decade").value = count; /*this is called pass in argument */
}

function decrement() {
    count -= 1;
    document.getElementById("decade").value = count;
}

let errorparagraph= document.getElementById("error")
function Save(){
    console.log(count)
    errorparagraph.textContent= "Something went wrong. Please try again later"
}
// The Upcoming codes prevent writing onclick in HTML

let saveBtn = document.getElementById("submit")

saveBtn.addEventListener("click", function() {
    console.log("Button clicked from addEventListener")
})
/* 
let count=0 
let saveEl= document.getElementbyID= ("save()")
let countEl= document.getElementbyID= ("count()")
function increment() {
    count += 1;
    document.getElementById("decade").value = count; //this is called pass in argument
}
function Save(){
    let countST= count + " - "
    saveEl.textContentST \\ textContent is better than innertext
    countEl.textContent= 0 
    count= 0 
} 
count.log("Lets count the people ont the subway!!!")    
*/

/* let cards= [7,4]
    cards.push(6)
    --> cards[7,4,6]
    && cards.pop(6)
    --> cards[7,4]*/

/* Math.random--> random # from 0 to 0.9999999
   Math.random*6--> random # from 0 to 5.9999999
   Math.floor---> remove the decimal */
    
/* let player = {
    name: "Muhannad",
    chips: 200,
    sayHello: function() {
        console.log("Muhannad")
    }
player.sayHello()---> "Muhannad"
} */

// NOTE POP\PUSH delete\add the last variable BUT UNSHIFT\SHIFT import\export the 1st variable  
// Increment and Decrement functionality for Decade
