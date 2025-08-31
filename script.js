/* const historyBody = document.getElementById("history");
const clearBtn = document.getElementById("clear-btn");

document.getElementById("card-container").onclick = function (e) {
  if (e.target.classList.contains("call-btn")) {
    const number = e.target.getAttribute("data-number");
    const service = e.target.getAttribute("data-service");

    addToHistory(service, number);
  }
};

function addToHistory(service, num) {
  const li = document.createElement("li"); // ul এর জন্য li ব্যবহার করব
  const time = new Date().toLocaleTimeString();

  li.innerHTML = `${service} - ${num} - ${time}`;
  historyBody.prepend(li);
}

clearBtn.onclick = function () {
  historyBody.innerHTML = "";
};
 */

const historyBody = document.getElementById('history');
const clearBtn = document.getElementById('clear-btn');

document.getElementById('card-container').onclick = function(e){
    if(e.target.classList.contains('call-btn')){
        const number = e.target.getAttribute('data-number');
        const service=e.target.getAttribute('data-service');

        addHistory (number,service);
    }
}
function addHistory(service,num){
    const li = document.createElement('li');
    const time = new Date().toLocaleTimeString();

    li.innerHTML = `${service} - ${num} - ${time}`;
    li.classList.add('history-item')
    historyBody.prepend(li);
}

clearBtn.onclick = function(){
    historyBody.innerHTML=""
};

let count =0;
const heart_display = document.querySelector('.heart-count');
const heart_btn = document.querySelectorAll('.hear-btn');

for(let i =0; i<heart_btn.length; i++){
    heart_btn[i].addEventListener('click',function(){
        count++;

        heart_display.innerHTML =count;

    })
};

const coinDisplay = document.querySelector('.coin-display');
const coinBtn = document.querySelectorAll('.call-btn');

let coin = 100;

for (let i = 0; i < coinBtn.length; i++) {
coinBtn[i].addEventListener('click', function(e) {
 const number = e.target.getAttribute('data-number');
 const service = e.target.getAttribute('data-service');

 alert(`
Number: ${number}
Service: ${service}`);

 if (coin >= 20) {
   coin -= 20;
   coinDisplay.innerHTML = coin;
 } else {
   alert("You don’t have enough coin");
 }
});
}
  const buttons = document.querySelectorAll('.copy-btn');
  const Copydisplay = document.querySelector('.copy-display')

  let copyCount =0;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {
      const number = e.target.getAttribute('data-number');
      const service = e.target.getAttribute('data-service');

      navigator.clipboard.writeText(number)
        .then(() => {
            copyCount++;

            Copydisplay.innerHTML=copyCount;


          alert(`${service} number copied: ${number}`);
        })
       
    });
  }

