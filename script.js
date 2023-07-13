$(document).ready(onReady);

// begin onReady - what we want loaded after page is fully rendered
function onReady() {
    console.log('🟥 🟦 🟩 🟨 ready!!'); //making sure the function is working when page is ready

    $('#red-btn').on('click', addRedSquare);
    $('#blue-btn').on('click', addBlueSquare);
    $('#green-btn').on('click', addGreenSquare);
    $('#yellow-btn').on('click', addYellowSquare);



} //end onReady

function addRedSquare() {
    // console.log("in addRedSquare function");
    $('#blocks').append(`
    <div class="block red-fill"></div>
    `)
}

function addBlueSquare() {
    // console.log("in addBlueSquare function");
    $('#blocks').append(`
    <div class="block blue-fill"></div>
    `)
}

function addGreenSquare() {
    // console.log("in addGreenSquare function");
    $('#blocks').append(`
    <div class="block green-fill"></div>
    `)
}

function addYellowSquare() {
    // console.log("in addYellowSquare function");
    $('#blocks').append(`
    <div class="block yellow-fill"></div>
    `)
}