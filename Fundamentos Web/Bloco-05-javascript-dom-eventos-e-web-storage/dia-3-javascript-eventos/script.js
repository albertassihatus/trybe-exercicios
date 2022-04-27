function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDays = document.querySelector('#days');

  for(let index = 0; index < dezDaysList.length; index += 1){
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');
    
  
    if(day == 24 || day == 25 || day == 31){
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDays.appendChild(dayItem);
    }
    else if (day == 4 || day == 11 || day == 18 || day == 25){
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getDays.appendChild(dayItem);
    }
    else {
        dayItem.innerHTML = day;
        dayItem.className = 'day';
        getDays.appendChild(dayItem);
    }
  };
};
createDaysOfTheMonth();


function holidayButton(buttonName){

  let buttonBox = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  let buttonId = 'btn-holiday';

  button.innerHTML = buttonName;
  button.id = buttonId;
  buttonBox.appendChild(button);

};

holidayButton('Feriados');

function holidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'red';

  getHolidayButton.addEventListener('click', function(){

    for (let index = 0; index < getHolidays.length; index +=1){
      
      if(getHolidays[index].style.backgroundColor === setNewColor){
        getHolidays[index].style.backgroundColor = backgroundColor;
      } 
      else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

holidays();

function fridaysButton(button){
  let buttonBoxFriday = document.querySelector('.buttons-container');
  let buttonFridays = document.createElement('button');
  let buttonFridayId = 'btn-friday';

  buttonFridays.innerHTML = button;
  buttonFridays.id = buttonFridayId;
  buttonBoxFriday.appendChild(buttonFridays);


};

fridaysButton('Sexta-Feira');

function fridaysLove() {
  let getFridayButton = document.querySelector('#btn-friday');
  let getFridays = document.querySelectorAll('.friday');
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'red';

  getFridayButton.addEventListener('click', function(){

    for (let index = 0; index < getFridays.length; index +=1){
      
      if(getFridays[index].style.backgroundColor === setNewColor){
        getFridays[index].style.backgroundColor = backgroundColor;
      } 
      else {
        getFridays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};
let dezFridays = [4, 11, 18, 25];

fridaysLove(dezFridays);

function lupaMouse(){
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '30px';
    // event.target.style.fontWeight = '600';
  })
};

function lupaMouseOut(){
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event){
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '200px';
  })
};

lupaMouse();
lupaMouseOut();