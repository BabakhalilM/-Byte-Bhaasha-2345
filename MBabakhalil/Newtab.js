let scale = 1; // Initial scale
  
  function zoomIn() {
    scale += 0.1; // Increase scale by 0.1
    updateZoom();
  }

  function zoomOut() {
    if (scale > 0.1) { // Prevent zooming out beyond original size
      scale -= 0.1; // Decrease scale by 0.1
      updateZoom();
    }
  }

  function updateZoom() {
    const img = document.getElementById('zoomImg');
    img.style.transform = `scale(${scale})`; // Apply scale transformation
  }

  const data = {
    "Scenic views": ["Sea view"],
    "Bathroom": ["Bath", "Hair dryer", "Shampoo", "Conditioner", "Body soap", "Hot water", "Shower gel"],
    "Bedroom and laundry": ["Essentials", "Towels, bed sheets, soap and toilet paper", "Hangers", "Bed linen", "Extra pillows and blankets", "Iron", "Clothes storage"],
    "Entertainment": ["TV"],
    "Heating and cooling": ["Air conditioning"],
    "Home safety": ["Smoke alarm", "Fire extinguisher", "First aid kit"],
    "Internet and office": ["Wifi"],
    "Kitchen and dining": ["Mini fridge", "Wine glasses"],
    "Location features": ["Waterfront", "Beach access", "Resort access"],
    "Outdoor": ["Private patio or balcony", "Outdoor furniture", "Beach essentials", "Sun loungers"],
    "Parking and facilities": ["Shared pool", "Shared gym", "Single level home"],
    "Services": ["Breakfast", "Cleaning available during stay"],
    "Not included": ["Security cameras on property", "Kitchen", "Washing machine", "Dryer", "Carbon monoxide alarm", "Heating"],
    // "seeMore":[]
};
let placeoffers=document.querySelector("#placeoffers");
for(let va in data){
    let p=document.createElement("p");
    p.style.width="45%";
    p.style.fontSize="18px";
    // p.style.border=" 1px solid "
    p.style.margin="5px";
    p.innerText=va;
    placeoffers.appendChild(p);
    // console.log(va);
}
let seem=document.createElement("button");
seem.innerText="Show all amenties >";
seem.style.background="none";
// seem.style.border="none";
seem.style.fontSize="19px";
placeoffers.append(seem);


var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
let modalcontent=document.querySelector(".modal-content");


for(let van in data){
    let h2=document.createElement("h2");
    h2.innerText=van;
    let hr=document.createElement("hr");
    let div=document.createElement("div");
    data[van].forEach(element => {
        let p=document.createElement("p");
        p.innerText=element;
        p.style.fontSize="20px";
        div.append(p);
    });
    div.style.marginLeft="50px";
    modalcontent.appendChild(h2);
    modalcontent.appendChild(hr);
    modalcontent.appendChild(div);
}
// When the user clicks the button, open the modal 
seem.onclick = function() {
  modal.style.display = "block";
}
// seem.click();
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


