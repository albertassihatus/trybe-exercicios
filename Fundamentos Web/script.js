const body = document.querySelector('body');

const tagH1 = document.createElement('h1');
tagH1.innerText = "Exercício 5.2 - JavaScript DOM ";
tagH1.className = 'title';
body.appendChild(tagH1);


const main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);

const sectionCenter = document.createElement('section');
sectionCenter.className = 'center-content';
main.appendChild(sectionCenter);

const p1 = document.createElement('p');
p1.innerHTML = 'Algum Texto';
sectionCenter.appendChild(p1);

const sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
main.appendChild(sectionLeft);

const sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
main.appendChild(sectionRight);
sectionRight.style.marginRight ='auto';

const img1 = document.createElement('img');
img1.src = 'https://picsum.photos/200';
sectionLeft.appendChild(img1);

const list1 = document.createElement('ul');
sectionRight.appendChild(list1);
const arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
        'Sete', 'Oito', 'Nove', 'Dez'];
    for(let num in arrayNumbers){
        const list12 = document.createElement('li');
        list12.innerHTML = arrayNumbers[num];
        list1.appendChild(list12);
    }

const h3 = document.createElement('h3');
main.appendChild(h3);
h3.className = 'description';

const h32 = document.createElement('h3');
main.appendChild(h32);
h32.className = 'description';

const h33 = document.createElement('h3');
main.appendChild(h33);
h33.className = 'description';

main.removeChild(sectionLeft);

sectionCenter.style.backgroundColor = 'green';

list1.lastChild.remove();
list1.lastChild.remove();