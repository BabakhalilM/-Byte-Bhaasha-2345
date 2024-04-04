
document.addEventListener('DOMContentLoaded', function () {
    let slider = document.querySelector('.carousel-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    let slideWidth;
    const urls = ["https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg",
        "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
        "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg",
        "https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
        "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
        "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"]
  
    const categories = [
        "Islands", "Design", "Arctic", "Luxe", "Earth homes", "Top of the world", "Treehouses",
        "Tiny homes", "Beach", "Caves", "OMG!", "Historical homes", "Rooms", "Castles", "National parks",
        "Camper vans", "Amazing pools", "Cabins", "Surfing", "Camping", "Trending", "Tropical",
        "Bed & breakfasts", "New", "Golfing", "Countryside", "Mansions", "Iconic cities", "Amazing views",
        "Farms", "A-frames", "Lake", "Vineyards", "Hanoks", "Windmills", "Skiing", "Cycladic homes",
        "Lakefront", "Chef's kitchens", "Minsus", "Barns", "Shepherd's huts", "Towers", "Ryokans", "Yurts",
        "Domes", "Casas particulares", "Desert", "Off-the-grid", "Play", "Adapted", "Ski-in/out", "Boats",
        "Houseboats", "Containers", "Beachfront", "Grand pianos", "Creative spaces", "Riads", "Trulli", "Dammusi"
    ];
  
    function createSlide(startIndex) {
        let div = document.createElement("div");
        div.className = "slide";
        let k = 0;
        for (let i = startIndex; i < startIndex + 6 && i < categories.length; i++) {
            let figure = document.createElement("figure");
            let figcaption = document.createElement("figcaption");
            let btn = document.createElement("button");
            let img = document.createElement("img");
            img.src = urls[k];
            img.alt = "loading";
            k++;
            btn.addEventListener("click", (ele) => {
                // console.log(categories[i]);
                async function fetchDataAndProcess() {
                    try {
                        let mydata = await fetchcardData();
  
                        if (mydata) {
                            findCategoryByName(categories[i], mydata);
                        } else {
                            console.log("Data is undefined or empty.");
                        }
                    } catch (err) {
                        console.error(err);
                    }
                }
  
                fetchDataAndProcess();
            });
            btn.append(figure);
            figure.append(img, figcaption);
            figcaption.innerText = categories[i];
            div.appendChild(btn);
        }
  
        slider.appendChild(div);
    }
  
    function updateSlides() {
        slider.innerHTML = '';
  
        for (let i = 0; i < categories.length; i += 6) {
            createSlide(i);
        }
  
        slideWidth = slider.querySelector('.slide').clientWidth;
    }
  
    updateSlides();
  
    function updateSlider() {
        slider.style.transform = `translateX(${currentIndex * -slideWidth}px)`;
  
        // Update visibility of prevBtn and nextBtn based on currentIndex
        if (currentIndex === 0) {
            prevBtn.style.display = "none";
        } else {
            prevBtn.style.display = "block";
        }
  
        if (currentIndex >= Math.floor(categories.length / 6) - 1) {
            nextBtn.style.display = "none";
        } else {
            nextBtn.style.display = "block";
        }
    }
  
    prevBtn.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
  
    nextBtn.addEventListener('click', function () {
        if (currentIndex < Math.floor(categories.length / 6) - 1) {
            currentIndex++;
            updateSlider();
        }
    });
  });
  
  
  
  async function fetchcartdata(url) {
    try {
        let ans = await fetch(url);
        let data = await ans.json();
        return data;
    } catch (err) {
        console.log("error getting", err);
    }
  }
  
  async function fetchcardData() {
    try {
        let mydata = await fetchcartdata("https://airbnbproject-id6p.onrender.com/categories");
        return mydata;
    } catch (err) {
        console.log(err);
    }
  }
  
  async function fetchDataAndProcess() {
    try {
        let mydata = await fetchcardData();
        // console.log(mydata);        
        if (mydata) {
            findCategoryByName("Islands", mydata);
        } else {
            console.log("Data is undefined or empty.");
        }
    } catch (err) {
        console.log(err);
    }
  }
  auto=true;
  // if(auto){
  fetchDataAndProcess();
  // }
  
  let cont = document.querySelector(".cont");
  function findCategoryByName(name, mydata) {
    cont.innerHTML = "";
    let islandsCategory = mydata.find(category => category.name === name);
    if (islandsCategory) {
        const islandsCards = islandsCategory.cards;
        // console.log(islandsCards);
        islandsCards.forEach(element => {
            createCard1(element,false);
        });
        createmorebtn(name);
    } else {
        console.log("Category not found.");
    }
  }
  let z = 32;
  
  let showdi = document.querySelector(".showdiv");
  function createmorebtn(name) {
    let h2 = document.createElement("h2");
    h2.innerText = `Continue exploring ${name}`;
    showdi.innerHTML = "";
    let showdiv = document.createElement("div");
    let showmorebtn = document.createElement("button");
    showdiv.append(showmorebtn);
    showmorebtn.className = "showbtn";
    showmorebtn.innerText = "Show More";
    showmorebtn.style.borderRadius = "10px";
  
    showmorebtn.addEventListener("click", () => {
        const showmoredata = generateCardData(name, z);
        showmoredata.cards.forEach(element => {
            createCard1(element,false);
        });
        z += 20;
        createmorebtn(name);
    })
  
    showdi.append(h2, showdiv);
  }
  
  function generateCardData(category, z) {
    const data = { name: category, cards: [] };
    for (let i = z; i < z + 20; i++) {
        const card = {
            images: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-852899544635683289/original/c627f47e-8ca9-4471-90d4-1fd987dd2362.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-852929652016621394/original/49a9a199-6d71-4504-87fa-a95fe818e44f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-852929652016621394/original/49610013-776d-4061-9c58-8e5a3c1e9314.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-852929652016621394/original/e9c6f8d0-83f3-46d7-b2e2-b9d66bf079ce.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/448bee34-7416-4262-a02f-b39e29d7ce4f.jpg?im_w=720"
            ],
            place_name: `Place${i} in ${category}`,
            Ratting: ((Math.random() * 4) + 1).toFixed(2),
            distance_away_km: Math.floor(Math.random() * 5000) + 1,
            date_available: randomDateRange(),
            price_per_night: Math.floor(Math.random() * 9001) + 1000 // Random price between 1000 and 10000
        };
        data.cards.push(card);
    }
    return data; // Return the generated data
  }
  
  function randomDateRange() {
    const start = new Date();
    const end = new Date(start.getTime() + (365 * 24 * 60 * 60 * 1000));
    const startDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const endDate = new Date(startDate.getTime() + Math.random() * (end.getTime() - startDate.getTime()));
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const startDay = startDate.getDate().toString().padStart(2, '0');
    const startMonthName = monthNames[startDate.getMonth()];
    const endDay = endDate.getDate().toString().padStart(2, '0');
    const endMonthName = monthNames[endDate.getMonth()];
    return `${startDay} ${startMonthName} - ${endDay} ${endMonthName}`;
  }
  
  function createCard1(data,check) {
    
    let div = document.createElement("div");
    // div.style.border="solid";
    if(check){
        cont.innerHTML="";
        // div.style.width="300px";
        div.style.flexGrow="0";
    }
    let fav = document.createElement("button");
    fav.innerText = `\u2661`;
    div.className = "slide1"; // Add the .slide class to the div
    let divhead = document.createElement("div");
    divhead.className = "divhead";
    let divbody = document.createElement("div");
    let placename = document.createElement("p");
    let rating = document.createElement("h5");
    let distance = document.createElement("p");
    let dateavailable = document.createElement("p");
    let price = document.createElement("p");
    let carouselDiv = document.createElement("div");
    carouselDiv.className = "carousel";
    fav.className = "b_favorate";
    // divhead.append(fav);
    fav.addEventListener("click", (e) => {
    });
    let k = Math.floor(Math.random() * data.images.length);
  
    for (let i = k; i < k + data.images.length; i++) {
        let div = document.createElement("div");
        div.addEventListener("click", () => {
            let a = document.querySelector(".newtab");
            a.click();
  
        });
        // console.log("len",data.images.length-1);
        // div.style.backgroundColor="red";
        let index = i;
        if (i >= data.images.length) {
            index = i - data.images.length;
        }
        // console.log(index);
        let backimg = data.images[index];
        // console.log(backimg);
        div.style.backgroundImage = `url(${backimg})`;
        // let img = document.createElement("img");
        // img.src = data.images[i];
        carouselDiv.appendChild(div);
        // carouselDiv.style.backgroundColor="yellow";
    }
  
    divhead.appendChild(carouselDiv);
    divhead.appendChild(fav);
    // divhead.style.border="solid red";
    placename.innerText = data.place_name;
    placename.style.fontWeight = "700";
    rating.innerText = `\u2605 ${data.Ratting}`;
    rating.style.float = "right";
  
    distance.innerHTML = `<span style="font-weight: bold;"> ${data.distance_away_km}</span> Kilometres away`;
    dateavailable.innerText = data.date_available;
    // price.innerText = `<span style="font-weight: bold;">\u20B9 ${data.price_per_night}</span> night`;
    price.innerHTML = `<span style="font-weight: bold;">\u20B9 ${data.price_per_night}</span> night`;
  
    divbody.append(rating, placename, distance, dateavailable, price);
    div.append(divhead, divbody);
    // div.style.border="solid red";
    cont.appendChild(div);
  
  }
  
  async function fetchfooterdata(url) {
    try {
        let ans = await fetch(url);
        let data = await ans.json();
        // console.log(data);
        return data;
    }
    catch (err) {
        console.log("error getting", err);
    }
  }
  async function fetchDataforfooter() {
    try {
        let footer = await fetchfooterdata("https://airbnbproject-id6p.onrender.com/footer");
        // console.log(footer);
        createheadinspiration(footer);
        createbodyinspiration("popular", footer["popular"]);
    } catch (err) {
        // Handle errors if needed
        console.error(err);
    }
  }
  fetchDataforfooter();
  
  let inspiration = document.querySelector(".b_inspiration");
  let headinspiration = document.querySelector(".headinpirration");
  let bodyinspiration = document.querySelector(".bodyinspiration");
  
  function createheadinspiration(footer) {
    for (let key in footer) {
        // console.log(key);
        let p = document.createElement("button");
        p.innerText = key;
        p.addEventListener("click", () => {
            createbodyinspiration(key, footer[key]);
        });
        headinspiration.append(p);
    }
  }
  let flages = true;
  function createbodyinspiration(key, arr) {
    bodyinspiration.innerHTML = "";
    if (!arr || !Array.isArray(arr)) {
        console.error("Invalid input array:", arr);
        return;
    }
    if (flages) {
        for (let i = 0; i < arr.length && i < 17; i++) {
            let div = document.createElement("div");
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            if (key === "const categories") {
                p1.innerText = arr[i];
            }
            else {
                p1.innerText = arr[i][0] || arr[i];
                p2.innerText = arr[i][1] || arr[i];
            }
            div.append(p1, p2);
            bodyinspiration.append(div);
        }
        const readMoreButton = document.createElement("button");
        readMoreButton.innerText = `Read More \u25BC`;
  
        readMoreButton.addEventListener("click", () => {
            flages = false;
            createbodyinspiration(key, arr);
        });
  
        bodyinspiration.append(readMoreButton);
    }
    if (!flages) {
        arr.forEach(element => {
            let div = document.createElement("div");
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            if (key === "const categories") {
                p1.innerText = element;
            }
            else {
                p1.innerText = element[0];
                p2.innerText = element[1];
            }
            div.append(p1, p2);
            bodyinspiration.append(div);
        });
    }
  }
  