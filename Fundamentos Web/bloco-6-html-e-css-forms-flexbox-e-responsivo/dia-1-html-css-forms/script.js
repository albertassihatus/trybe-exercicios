const submitButton = document.querySelector('#send');
const eraserButton = document.querySelector('#eraser');

function getSubmit(event){
    event.preventDefault(); 
};

// function getEraser(event){
//     event.preventDefault(); 
//     event.reload();
// };

submitButton.addEventListener('click', getSubmit);
// eraserButton.addEventListener('click', getEraser);