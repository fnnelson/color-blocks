$(document).ready(onReady);

// begin onReady - what we want loaded after page is fully rendered
function onReady() {
    console.log('🟥 🟦 🟩 🟨 ready!!'); //making sure the function is working when page is ready

    $('#red-btn').on('click', addRedSquare)
    



} //end onReady

function addRedSquare() {
    // console.log("in addRedSquare function");
    $('#blocks').append(`
    <div class="block red-fill"></div>
    `)
}