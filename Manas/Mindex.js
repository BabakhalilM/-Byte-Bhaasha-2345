let button = document.getElementById("button");
let signInCard = document.getElementById("signInCard");
let addguest = document.getElementById("addguest");
let m_container = document.getElementById("m_container");
let d_name=document.getElementById("d_name");

button.addEventListener('click', function () {
  signInCard.classList.toggle("hidden");
});

const counters = {
  adult: {
    count: 0
  },
  child: {
    count: 0
  },
  infant: {
    count: 0
  },
  pet: {
    count: 0
  }
};

function updateCounter(type, operation) {
  let countElement = document.getElementById(type + '-count');
  let count = parseInt(countElement.textContent);
  if (operation === 'increment') {
    countElement.textContent = count + 1;
  } else if (operation === 'decrement' && count > 0) {
    countElement.textContent = count - 1;
  }
}

addguest.addEventListener('click', () => {
  // Create a new div element to contain the guest counters
  let guestCard = document.createElement("div");
  guestCard.classList.add("card", "guest-card", "hidden");
  
  // Append each guest counter to the guest card
  for (let key in counters) {
    let counterDiv = document.createElement("div");
    counterDiv.classList.add("guest-counter");
    
    let span = document.createElement("span");
    span.textContent = key.charAt(0).toUpperCase() + key.slice(1) + ':';
    counterDiv.appendChild(span);
    
    let buttonMinus = document.createElement("button");
    buttonMinus.textContent = '-';
    buttonMinus.addEventListener('click', () => {
      updateCounter(key, 'decrement');
    });
    counterDiv.appendChild(buttonMinus);
    
    let countSpan = document.createElement("span");
    countSpan.id = key + '-count';
    countSpan.textContent = counters[key].count;
    counterDiv.appendChild(countSpan);
    
    let buttonPlus = document.createElement("button");
    buttonPlus.textContent = '+';
    buttonPlus.addEventListener('click', () => {
      updateCounter(key, 'increment');
    });
    counterDiv.appendChild(buttonPlus);
    
    guestCard.appendChild(counterDiv);
  }
  
  // Toggle the visibility of the guest card
  guestCard.classList.toggle("hidden");
  
  // Append the guest card to the m_container div
  m_container.appendChild(guestCard);
  m_container.style.display = "flex";
});



async function fetchdata(){
    try {
        let data=await fetch("https://airbnbproject-id6p.onrender.com/categories/");
        let res=await data.json();
        // console.log(res);
        for(let i of res){
            // console.log(i.cards);
            for(let j of i.cards){
               console.log(j.place_name);
               return j;
                
            }
        }
    } catch (error) {
        console.log(error);
    }
}
fetchdata();

d_name.addEventListener('change',()=>{
    fetchdata();
})