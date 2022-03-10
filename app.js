// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

// Current progress 1:145:33, create modal 

// select modal-btn,modal-overlay,close-btn
const modalBtn = document.querySelector('.modal-btn');
const overlayBtn = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');


// Event listeners for btns
modalBtn.addEventListener('click', function () {
    // console.log(modalBtn);
    overlayBtn.classList.add('open-modal');
});

// when user clicks close-btn remove .open-modal from modal-overlay
closeBtn.addEventListener('click', function () {
    // console.log(modalBtn);
    overlayBtn.classList.remove('open-modal');
});

