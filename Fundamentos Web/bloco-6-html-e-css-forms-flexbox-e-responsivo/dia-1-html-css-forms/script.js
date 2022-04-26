
// const eraserButton = document.querySelector('#eraser');





function verify(){
    const name = document.querySelector('#input-text').value.length;
    const invalidName = name < 10 || name > 40;

    const email = document.querySelector('#input-email').value.length;
    const invalidEmail = email < 10 || email > 50;

    const about = document.querySelector('#text-area1').value.length;
    const invalidAbout = about >= 500;

    if (invalidName || invalidEmail || invalidAbout){
        return false;
    }
    else {
        return true;
    }
};

const submitButton = document.querySelector('#send');

function getSubmit(event){

    

    event.preventDefault(); 

    const verification = verify();
    if (verification === false){
        alert("Dados Inválidos");
    }
    else {
       alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
    
};
submitButton.addEventListener('click', getSubmit);
