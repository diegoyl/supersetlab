let scrollState = 0;
let treshold = 20;

document.addEventListener("scroll", () => {
    setCSS();
});


function setCSS() {
    $("#logo-container").css("transition", "transform 1s ease-in-out 80ms");
    $("#logo-small").css("transition", "transform .9s ease-in-out");
    let scroll = window.scrollY;
    if (scroll > treshold &&  scrollState == 0){
        scrollState = 1;
        $("#logo-container").css("transform", "translateY(-50vh)");
        $("#logo-small").css("transform", "translateY(0vh)");

    } else if (scroll <= treshold &&  scrollState == 1){
        scrollState = 0;
        $("#logo-container").css("transform", "translateY(0)");
        $("#logo-small").css("transform", "translateY(-40vh)");
    }
}
// $("#logo-container").on( "click", function() {
//     alert( "Handler for `click` called." );
// });