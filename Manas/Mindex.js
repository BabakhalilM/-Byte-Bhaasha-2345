





// let button = document.getElementById("button");
let signInCard = document.getElementById("signInCard");
let addguest = document.getElementById("addguest");
let m_container = document.getElementById("m_container");
let d_name=document.getElementById("d_name");
let s=document.getElementById("s");
let nav_search=document.getElementById("nav_search");
let submit=document.getElementById("submit");
let first=document.getElementById("first");


// function logScrollHeight() {
//     console.log("Scroll Height:", document.documentElement.scrollHeight);
// }

// // Attach an event listener to the scroll event of the window
// window.addEventListener("scroll", logScrollHeight);

s.addEventListener('click', function () {
  signInCard.classList.toggle("hidden");
  signInCard.style.visibility="visible";
  signInCard.style.zIndex=10;

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
let guestCard;

addguest.addEventListener('click', () => {
  // Create a new div element to contain the guest counters
    guestCard = document.createElement("div");
  guestCard.classList.add( "guest-card", "hidden");
  
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

window.addEventListener('click', (event) => {
    // Check if guestCard exists and is visible and if the clicked element is not part of guestCard or addguest button or s button or signInCard
    if (guestCard && !guestCard.classList.contains("hidden") && !guestCard.contains(event.target) && event.target !== addguest && event.target !== s && !signInCard.contains(event.target)) {
      guestCard.classList.add("hidden"); // Hide guestCard
      console.log("Guest card hidden");
    }
  });





submit.addEventListener('click', () => {
    // Collect username and password from input fields
    let usernameValue = document.getElementById('PHONE-NO').value;
    let passwordValue = document.getElementById('password').value;

    // Prepare data object
    let data = {
        username: usernameValue,
        password: passwordValue
    };

    // Access cart from local storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the user is already signed up
    let alreadySignedUp = cart.some(item => item.username === usernameValue);

    if (alreadySignedUp) {
        alert("You are already signed up.");
    } else {
        // Add countofitem property to data object
        data.countofitem = 1;

        // Push data object to cart array
        cart.push(data);

        // Store updated cart in local storage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Log the added data
        console.log(data);
    }
});