$(document).ready(onReady);

// begin onReady - what we want loaded after page is fully rendered
function onReady() {
    console.log('🟥 🟦 🟩 🟨 ready!!'); //making sure the function is working when page is ready

    // jQuery commands for adding new square
    $('#red-btn').on('click', addRedSquare); // saying hey jQuery, look for item with #red-btn id, and on click, refer to the addRedSquare function
    $('#blue-btn').on('click', addBlueSquare);
    $('#green-btn').on('click', addGreenSquare);
    $('#yellow-btn').on('click', addYellowSquare);

    // // jQuery commands for removing a square when clicked
    // $('#blocks').on('click', '.red-fill', removeRedSquare); // saying heyjQuery, look for item with #blocks id (the space the blocks are taking up on the DOM), and upon click, for any item with class=red-fill, refer to removeRedSquare function)
    // $('#blocks').on('click', '.blue-fill', removeBlueSquare);
    // $('#blocks').on('click', '.green-fill', removeGreenSquare);
    // $('#blocks').on('click', '.yellow-fill', removeYellowSquare);

} //end onReady

let redCount = 1;
let blueCount = 1;
let greenCount = 1;
let yellowCount = 1;


// functions to add new color square div to DOM
function addRedSquare() {
    // console.log("in addRedSquare function");
    $('#blocks').append(`
    <div class="block red-fill"></div> 
    `)  // saying heyjQuery, look for item with class of #blocks, and insert new div (the class will make sure it takes on the style from CSS, so will become a square like the divs already on DOM)

    redCount++
    console.log("red count is now:", redCount)
    $('#red-count').html(redCount);
}

function addBlueSquare() {
    $('#blocks').append(`
    <div class="block blue-fill"></div>
    `)
    blueCount++
    console.log("blue count is now:", blueCount)
    $('#blue-count').html(blueCount);
}

function addGreenSquare() {
    $('#blocks').append(`
    <div class="block green-fill"></div>
    `)
    greenCount++
    console.log("green count is now:", greenCount)
    $('#green-count').html(greenCount);
}

function addYellowSquare() {
    $('#blocks').append(`
    <div class="block yellow-fill"></div>
    `)
    yellowCount++
    console.log("yellow count is now:", yellowCount)
    $('#yellow-count').html(yellowCount);
}


// // click to remove square functions
// function removeRedSquare() {
//     // console.log("in removeRedSquare function");
//     $(this).remove();
// }

// function removeBlueSquare() {
//     $(this).remove();
// }

// function removeGreenSquare() {
//     $(this).remove();
// }

// function removeYellowSquare() {
//     $(this).remove();
// }