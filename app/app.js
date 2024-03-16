document.addEventListener("DOMContentLoaded", function(event) {
    // initialize
let bp = BiggerPicture({
    target: document.body,
})

// grab image links
let imageLinks = document.querySelectorAll('#gallery a')

// add click listener to open BiggerPicture
for (let link of imageLinks) {
link.addEventListener("click", openGallery);
}

// function to open BiggerPicture
function openGallery(e) {
    e.preventDefault()
    bp.open({
        items: imageLinks,
        el: e.currentTarget,
    })
}





// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


});
