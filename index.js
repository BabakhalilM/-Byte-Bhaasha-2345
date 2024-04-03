// manasjs start
let button = document.getElementById("button");
let signInCard = document.getElementById("signInCard");
let addguest = document.getElementById("addguest");
let m_container = document.getElementById("m_container");
let d_name = document.getElementById("d_name");

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



async function fetchdata(val) {
    try {
        let data = await fetch("https://airbnbproject-id6p.onrender.com/categories/");
        let res = await data.json();
        // console.log(res);
        for (let i of res) {
            // console.log(i.cards);
            for (let j of i.cards) {
                //    console.log(j.place_name);
                if(val==j.place_name){
                    return [j,true];
                }

            }
        }
        alert("Data not found");
    } catch (error) {
        console.log(error);
    }
}
// fetchdata();

d_name.addEventListener('change', async () => {
    console.log(d_name.value);
    
    try {
        let data = await fetchdata(d_name.value);
        console.log(data);
        if (data[1]) {
            // findCategoryByName(data[0], data[1]);
            // auto=false;
            createCard1(data[0],data[1]);
            
            console.log(data[0], data[1]);
        }
        d_name.value = "";
    } catch (error) {
        console.error(error);
    }
});

// d_name.addEventListener('change', async () => {
//     console.log(d_name.value);
    
//     let data = fetchdata(d_name.value);
//     console.log(data);
//     if(data[2]){
//     findCategoryByName(data[0], data[1]);
//     console.log(data[0],data[1]);
//     }
//     d_name.value="";
// })
// manas js end

// MBaba khalil js start

// M Baba khalil js end

// Rakesh js start
let buttonfilter = document.querySelector(".buttonfilter");
let filter_container = document.getElementById("filter");
buttonfilter.addEventListener("click", () => {
    filter_container.style.display = "block";
}
);

// function filtershow() {

let main_conatiner = document.getElementById("main_container");

let range_container = document.getElementById("range");
let extra_features_add = document.querySelector("#addmore");
let show_more_extrainfo = document.querySelector("#extra_features a");
let languages_container = document.getElementById("languages")
let language_addmore = document.querySelector("#languages~a")
let mininput = document.getElementById("mininput")
let maxinput = document.getElementById("maxinput")
let left_button = document.querySelector(".btn-group>button:nth-of-type(1)");
let middle_button = document.querySelector(".btn-group>button:nth-of-type(2)");
let right_button = document.querySelector(".btn-group>button:nth-of-type(3)");
let main_button = document.getElementById("mymainbutton");
let min_button = document.getElementById('min');
var max_button = document.getElementById('max');
var room_button1 = document.querySelector(".rooms_container>div:nth-of-type(1)>button:nth-of-type(1)")
var room_button2 = document.querySelector(".rooms_container>div:nth-of-type(1)>button:nth-of-type(2)")
var room_button3 = document.querySelector(".rooms_container>div:nth-of-type(1)>button:nth-of-type(3)")
var room_button4 = document.querySelector(".rooms_container>div:nth-of-type(1)>button:nth-of-type(4)")
var room_button5 = document.querySelector(".rooms_container>div:nth-of-type(1)>button:nth-of-type(5)")
var room_button6 = document.querySelector(".rooms_container>div:nth-of-type(1)>button:nth-of-type(6)")
var room_button7 = document.querySelector(".rooms_container>div:nth-of-type(1)>button:nth-of-type(7)")
var room_button8 = document.querySelector(".rooms_container>div:nth-of-type(1)>button:nth-of-type(8)")
var bed_button1 = document.querySelector(".rooms_container>div:nth-of-type(2)>button:nth-of-type(1)")
var bed_button2 = document.querySelector(".rooms_container>div:nth-of-type(2)>button:nth-of-type(2)")
var bed_button3 = document.querySelector(".rooms_container>div:nth-of-type(2)>button:nth-of-type(3)")
var bed_button4 = document.querySelector(".rooms_container>div:nth-of-type(2)>button:nth-of-type(4)")
var bed_button5 = document.querySelector(".rooms_container>div:nth-of-type(2)>button:nth-of-type(5)")
var bed_button6 = document.querySelector(".rooms_container>div:nth-of-type(2)>button:nth-of-type(6)")
var bed_button7 = document.querySelector(".rooms_container>div:nth-of-type(2)>button:nth-of-type(7)")
var bed_button8 = document.querySelector(".rooms_container>div:nth-of-type(2)>button:nth-of-type(8)")
var bed_button9 = document.querySelector(".rooms_container>div:nth-of-type(2)>button:nth-of-type(9)")
var bathroom_button1 = document.querySelector(".rooms_container>div:nth-of-type(3)>button:nth-of-type(1)")
var bathroom_button2 = document.querySelector(".rooms_container>div:nth-of-type(3)>button:nth-of-type(2)")
var bathroom_button3 = document.querySelector(".rooms_container>div:nth-of-type(3)>button:nth-of-type(3)")
var bathroom_button4 = document.querySelector(".rooms_container>div:nth-of-type(3)>button:nth-of-type(4)")
var bathroom_button5 = document.querySelector(".rooms_container>div:nth-of-type(3)>button:nth-of-type(5)")
var bathroom_button6 = document.querySelector(".rooms_container>div:nth-of-type(3)>button:nth-of-type(6)")
var bathroom_button7 = document.querySelector(".rooms_container>div:nth-of-type(3)>button:nth-of-type(7)")
var bathroom_button8 = document.querySelector(".rooms_container>div:nth-of-type(3)>button:nth-of-type(8)")
var bathroom_button9 = document.querySelector(".rooms_container>div:nth-of-type(3)>button:nth-of-type(9)")
var rating_button = document.getElementById("rating")
var prototype_button1 = document.querySelector("#prototype>div:nth-of-type(1)");
var prototype_button2 = document.querySelector("#prototype>div:nth-of-type(2)");
var prototype_button3 = document.querySelector("#prototype>div:nth-of-type(3)");
var prototype_button4 = document.querySelector("#prototype>div:nth-of-type(4)");
var Amenities_button1 = document.querySelector("#Amenities>div:nth-of-type(1)>input:nth-of-type(1)");
var Amenities_button2 = document.querySelector("#Amenities>div:nth-of-type(2)>input:nth-of-type(1)");
var Amenities_button3 = document.querySelector("#Amenities>div:nth-of-type(3)>input:nth-of-type(1)");
var Amenities_button4 = document.querySelector("#Amenities>div:nth-of-type(4)>input:nth-of-type(1)");
var Amenities_button5 = document.querySelector("#Amenities>div:nth-of-type(5)>input:nth-of-type(1)");
var Amenities_button6 = document.querySelector("#Amenities>div:nth-of-type(6)>input:nth-of-type(1)");
var booking_container = document.querySelectorAll("#booking_container input");
var close_button = document.querySelector(".material-symbols-outlined");
var clear_button = document.querySelector(".lower button:nth-of-type(1)");
// var booking_container2=document.querySelector("#booking_container input:nth-of-type(2)");
// var booking_container3=document.querySelector("#booking_container input:nth-of-type(3)");
var maxX = range_container.offsetWidth - min_button.offsetWidth;
var minY = range_container.offsetWidth - min_button.offsetWidth;
let bool = false;
let lan_bool = false;
var query1 = "";
var query2 = "";
var query3 = "";
var query4 = "";
var query5 = "";
var query6 = "";
var query7 = "";
var query8 = "";
var query9 = "";
var query10 = "";
var query11 = "";
var query12 = "";
var query13 = "";


close_button.addEventListener('click', () => {
    // filter_container.innerHTML = " ";
    filter_container.style.border = "none"
    filter_container.style.display = "none";
})
clear_button.addEventListener('click', () => {
    data = [];
    // console.log(data, "clear")
    main_button.innerText = "Show All"
    location.reload()


})
let url = "https://airbin-data-8.onrender.com/data/";

mininput.value = '₹836';
maxinput.value = '₹27776';
document.addEventListener('DOMContentLoaded', function () {
    var isDragging = false;
    var startX, startY;

    min_button.addEventListener('mousedown', function (event) {
        isDragging = true;
        startX = event.clientX - min_button.offsetLeft;
        //console.log("hii")
        document.addEventListener('mousemove', onMouseMove);

        document.addEventListener('mouseup', onMouseUp);
    });

    max_button.addEventListener('mousedown', function (event) {
        isDragging = true;
        startY = event.clientX - max_button.offsetLeft;

        document.addEventListener('mousemove', ofMouseMove);

        document.addEventListener('mouseup', ofMouseUp);
    });
    //var vals=filter_container.clientWidth;
    function onMouseMove(event) {
        if (isDragging) {
            var newX = event.clientX - startX;
            newX = Math.min(maxX, Math.max(0, newX));
            min_button.style.left = newX + 'px';

        }
    }

    function onMouseUp() {
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    function ofMouseMove(event) {
        if (isDragging) {
            var newY = event.clientX - startY;
            newY = Math.min(minY, Math.max(0, newY));
            max_button.style.left = newY + 'px';
        }
    }

    function ofMouseUp() {
        isDragging = false;
        document.removeEventListener('mousemove', ofMouseMove);
        document.removeEventListener('mouseup', ofMouseUp);
    }
});

show_more_extrainfo.addEventListener("click", () => {
    if (bool === false) {
        bool = true;
        addExtraInfo();
    }
    else {
        removeExtraInfo();
    }
})

function addExtraInfo() {
    let input1 = document.createElement("input");
    let input2 = document.createElement("input");
    let input3 = document.createElement("input");
    let input4 = document.createElement("input");
    let input5 = document.createElement("input");
    let input6 = document.createElement("input");
    let h51 = document.createElement("h5")
    let h52 = document.createElement("h5")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let p3 = document.createElement("p")
    let p4 = document.createElement("p")
    let p5 = document.createElement("p")
    let p6 = document.createElement("p")
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");
    let div5 = document.createElement("div");
    let div6 = document.createElement("div");
    let div7 = document.createElement("div");
    let div8 = document.createElement("div");
    let div9 = document.createElement("div");
    let div10 = document.createElement("div");
    input1.setAttribute("type", "checkbox")
    input2.setAttribute("type", "checkbox")
    input3.setAttribute("type", "checkbox")
    input4.setAttribute("type", "checkbox")
    input5.setAttribute("type", "checkbox")
    input6.setAttribute("type", "checkbox")
    h51.innerText = "Bedroom";
    h52.innerText = "Bathroom";
    p1.innerText = "tep-free bedroom access"
    p2.innerText = "Bedroom entrance wider than 32 inches (81 centimetres)"
    p3.innerText = "tep-free bathroom access"
    p4.innerText = "Bathroom entrance wider than 32 inches (81 centimetres)"
    p5.innerText = "Shower grab bar"
    p6.innerText = "Toilet grab bar"
    div1.append(input1, p1)
    div2.append(input2, p2)
    div3.append(input3, p3)
    div4.append(input4, p4)
    div5.append(input5, p5)
    div6.append(input6, p6)
    div7.append(div1, div2)
    div9.append(h51, div7)
    div8.append(div3, div4, div5, div6)
    div10.append(h52, div8)
    extra_features_add.append(div9, div10)
    show_more_extrainfo.innerText = "Show less"
}

mininput.addEventListener("input", () => {
    debounce();
});

maxinput.addEventListener("input", () => {
    debounce1();
});

let id;
function debounce() {
    if (id) {
        clearInterval(id)
    }
    id = setTimeout(() => {
        let newmax = maxinput.value.substring(1, maxinput.value.length);
        let newmin = mininput.value.substring(1, mininput.value.length);


        filterFetch(url, query1, `&listings.price_per_night_gte=${newmin}&listings.price_per_night_lte=${newmax}`, query3, query4, query5, query6, query7, query8, query9, "")
    }, 1000)
}
let id1;
function debounce1() {
    if (id1) {
        clearInterval(id)
    }
    id1 = setTimeout(() => {
        let newmax = maxinput.value.substring(1, maxinput.value.length);
        let newmin = mininput.value.substring(1, mininput.value.length);


        filterFetch(url, query1, `&listings.price_per_night_gte=${newmin}&listings.price_per_night_lte=${newmax}`, query3, query4, query5, query6, query7, query8, query9, "")
    }, 1000)
}
function removeExtraInfo() {
    bool = false;
    extra_features_add.innerHTML = " ";
    show_more_extrainfo.innerText = "Show more"
}
fetchData()
async function fetchData() {
    try {
        let res = await fetch("https://airbin-data-8.onrender.com/data");
        let data = await res.json();
        storeLanguageData(data)
        // console.log(data, "data")
    }
    catch (err) {
        console.log(err)
    }

}


let arr = [];
function storeLanguageData(arr1) {
    arr1.forEach(element => {
        if (!arr.includes(element.listings.host_language)) {
            arr.push(element.listings.host_language)
        }
    });
}
addLanguages()

function createLanguageData(str) {
    let input11 = document.createElement("input");
    input11.setAttribute("type", "checkbox");
    input11.value = str;
    let divs = document.createElement("div")
    p11 = document.createElement("p");
    p11.innerText = str;
    divs.append(input11, p11);
    input11.addEventListener('click', () => {
        if (input11.checked) {
            filterFetch(url, query1, query2, query3, query4, query5, query6, query7, query8, query9, `&listings.host_language=${input11.value}`, "")
        }
    })
    return divs;

}

function addLanguages() {
    languages_container.innerHTML = " ";
    setTimeout(() => {
        for (let i = 0; i < 4; i++) {
            let ans = createLanguageData(arr[i]);
            // console.log("arr[i]")
            languages_container.append(ans);
        }
    }, 1000)
}

language_addmore.addEventListener("click", () => {
    if (lan_bool === false) {
        setTimeout(() => {
            for (let i = 4; i < 40; i++) {
                let ans = createLanguageData(arr[i]);
                // console.log("arr[i]")
                languages_container.append(ans);
            }
        }, 200)
        language_addmore.innerText = "Showless"
        lan_bool = true;
    }
    else {
        removeLanguageData()
    }
})

function removeLanguageData() {
    addLanguages();
    lan_bool = false
    language_addmore.innerText = "Show More"
}
let ans = 836;
let md;
let mdl;
var eventbuttonval;
let ans2 = 27776;
document.addEventListener('DOMContentLoaded', function () {
    var isDragging = false;
    var startX, startY;

    min_button.addEventListener('mousedown', function (event) {
        isDragging = true;
        md = event.pageX;
        startX = event.clientX - min_button.offsetLeft;

        document.addEventListener('mousemove', onMouseMoves);

        document.addEventListener('mouseup', onMouseUps);
    });

    max_button.addEventListener('mousedown', function (event) {
        isDragging = true;
        mde = event.pageX
        startY = event.clientX - max_button.offsetLeft;

        document.addEventListener('mousemove', ofMouseMoves);

        document.addEventListener('mouseup', ofMouseUps);
    });
    let reachedMax = false;
    function onMouseMoves(event) {
        var newX = event.clientX - startX;
        newX = Math.min(maxX, Math.max(0, newX));
        isDragging = true;
        //console.log(newX)
        // Calculate the direction of mouse movement
        if (event.pageX > startX && event.pageX < 1100 && ans < 27776 && ans >= 0) {
            if (event.pageX > md) {
                ans += 45;
            }
            else {
                ans -= 45;
            }

        }
        if (newX === 0) {
            ans = 836;
        }
        if (event.pageX >= 1100 && !reachedMax) {
            ans = 27776; // Limit the value to 27776 only if it hasn't reached yet
            reachedMax = true; // Set reachedMax to true once the limit is reached
        }
        if (event.pageX >= 700 && event.pageX <= 710) {
            ans = 13333;
        }
        // ans += direction * 100; // Increase or decrease ans based on direction
        mininput.value = `₹${Math.ceil(ans)}`
        //startX = event.clientX; // Update startX for the next movement
    }

    function onMouseUps() {
        let newmax = maxinput.value.substring(1, maxinput.value.length);
        let newmin = mininput.value.substring(1, mininput.value.length);


        filterFetch(url, query1, `&listings.price_per_night_gte=${newmin}&listings.price_per_night_lte=${newmax}`, query3, query4, query5, query6, query7, query8, query9, "")
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMoves);
        document.removeEventListener('mouseup', onMouseUps);
    }

    function ofMouseMoves(event) {
        var newY = event.clientX - startY;
        newY = Math.min(minY, Math.max(0, newY));
        isDragging = true;
        //console.log(newY)
        // Calculate the direction of mouse movement
        if (event.pageX > startY && ans2 <= 27776 && ans2 >= 0) {
            if (event.pageX > mde) {
                ans2 += 45; // Decrease by 45
            } else {
                ans2 -= 45; // Increase by 45
            }
        }

        // Limit the value to 27776 only if it hasn't reached yet
        if (event.pageX >= 1100 && !reachedMax) {
            ans2 = 27776;
            reachedMax = true;
        }
        if (newY < 210 && newY > 305) {
            ans2 = 13336;
        }
        if (newY <= 0) {
            ans2 = 836;
        }


        // Update max input value
        maxinput.value = `₹${Math.ceil(ans2)}`;

    }
    min_button.addEventListener('onmouseup', () => {

    })

    function ofMouseUps() {
        let newmax = maxinput.value.substring(1, maxinput.value.length);
        let newmin = mininput.value.substring(1, mininput.value.length);
        filterFetch(url, query1, `&listings.price_per_night_gte=${newmin}&listings.price_per_night_lte=${newmax}`, query3, query4, query5, query6, query7, query8, query9, "")
        isDragging = false;
        document.removeEventListener('mousemove', ofMouseMoves);
        document.removeEventListener('mouseup', ofMouseUps);
    }
});


// console.log(arr, "arr")

//functionality starts from here

async function filterFetch(url, querys1 = "", querys2 = "", querys3 = "", querys4 = "", querys5 = "", querys6 = "", querys7 = "", querys8 = "", querys9 = "", querys10 = "", btn = "") {
    query1 = querys1;
    query2 = querys2;
    query3 = querys3;
    query4 = querys4;
    query5 = querys5;
    query6 = querys6;
    query7 = querys7;
    query8 = querys8;
    query8 = querys8
    query9 = querys9;
    query10 = querys10;
    try {
        let res = await fetch(url + "?" + `${querys1}${querys2}${querys3}${querys4}${querys5}${querys6}${query7}${query8}${query9}${query10}`);
        let data = await res.json();
        // console.log(data, "res")
        if (btn === 1) {
            main_button.innerText = `Show All ${data.length} Rooms`
        }
        if (btn === 2) {
            main_button.innerText = `Show All ${data.length} Houses`
        }
        if (btn === "") {
            main_button.innerText = `Show All ${data.length} Places`
        }
        main_button.addEventListener('click', () => {
            if (data) {
                filter_container.innerHTML = " ";
                filter_container.style.border = "none"
                appendData(data)
            }
        })
    }
    catch (err) {
        console.log(err)
    }

}


left_button.addEventListener('click', () => {
    query1 = ""
    left_button.style.backgroundColor = "rgb(54,54,54)"
    left_button.style.color = "white"
    middle_button.style.backgroundColor = "white"
    right_button.style.backgroundColor = "white"
    middle_button.style.color = "black"
    right_button.style.color = "black"
    filterFetch(url, "", query2, query3, query4, query5, query6, query7, query8, query9, query10, "")
})

middle_button.addEventListener('click', () => {
    query1 = ""
    middle_button.style.backgroundColor = "rgb(54,54,54)"
    middle_button.style.color = "white"
    right_button.style.backgroundColor = "white"
    left_button.style.backgroundColor = "white"
    left_button.style.color = "black"
    right_button.style.color = "black"
    filterFetch(url, `&listings.rooms=1`, query2, query3, query4, query5, query6, query7, query8, query9, query10, 1)
})

right_button.addEventListener('click', () => {
    right_button.style.backgroundColor = "rgb(54,54,54)"
    right_button.style.color = "white"
    left_button.style.backgroundColor = "white"
    middle_button.style.backgroundColor = "white"
    middle_button.style.color = "black"
    left_button.style.color = "black"

    filterFetch(url, `&listings.property_type=House`, query2, query3, query4, query5, query6, query7, query8, query9, query10, 2)
})

room_button1.addEventListener('click', () => {
    room_button1.classList.add('selected');
    room_button2.classList.remove('selected')
    room_button3.classList.remove('selected')
    room_button4.classList.remove('selected')
    room_button5.classList.remove('selected')
    room_button6.classList.remove('selected')
    room_button7.classList.remove('selected')
    room_button8.classList.remove('selected')
    room_button1.focus()
    filterFetch(url, query1, query2, "", query4, query5, query6, query7, query8, query9, query10, "")
})

room_button2.addEventListener('click', () => {
    room_button2.classList.add('selected');
    room_button1.classList.remove('selected')
    room_button3.classList.remove('selected')
    room_button4.classList.remove('selected')
    room_button5.classList.remove('selected')
    room_button6.classList.remove('selected')
    room_button7.classList.remove('selected')
    room_button8.classList.remove('selected')
    filterFetch(url, query1, query2, `&listings.rooms=1`, query4, query5, query6, query7, query8, query9, query10, "")
})

room_button3.addEventListener("click", () => {
    room_button3.classList.add('selected');
    room_button1.classList.remove('selected')
    room_button2.classList.remove('selected')
    room_button4.classList.remove('selected')
    room_button5.classList.remove('selected')
    room_button6.classList.remove('selected')
    room_button7.classList.remove('selected')
    room_button8.classList.remove('selected')
    filterFetch(url, query1, query2, `&listings.rooms=2`, query4, query5, query6, query7, query8, query9, query10, "")
})
room_button4.addEventListener("click", () => {
    room_button4.classList.add('selected');
    room_button1.classList.remove('selected')
    room_button3.classList.remove('selected')
    room_button2.classList.remove('selected')
    room_button5.classList.remove('selected')
    room_button6.classList.remove('selected')
    room_button7.classList.remove('selected')
    room_button8.classList.remove('selected')

    filterFetch(url, query1, query2, `&listings.rooms=3`, query4, query5, query6, query7, query8, query9, query10, "")
})
room_button5.addEventListener("click", () => {
    room_button5.classList.add('selected');
    room_button1.classList.remove('selected')
    room_button3.classList.remove('selected')
    room_button4.classList.remove('selected')
    room_button2.classList.remove('selected')
    room_button6.classList.remove('selected')
    room_button7.classList.remove('selected')
    room_button8.classList.remove('selected')
    filterFetch(url, query1, query2, `&listings.rooms=4`, query4, query5, query6, query7, query8, query9, query10, "")
})
room_button6.addEventListener("click", () => {
    room_button6.classList.add('selected');
    room_button1.classList.remove('selected')
    room_button3.classList.remove('selected')
    room_button4.classList.remove('selected')
    room_button5.classList.remove('selected')
    room_button2.classList.remove('selected')
    room_button7.classList.remove('selected')
    room_button8.classList.remove('selected')
    filterFetch(url, query1, query2, `&listings.rooms=5`, query4, query5, query6, query7, query8, query9, query10, "")
})
room_button7.addEventListener("click", () => {
    room_button7.classList.add('selected');
    room_button1.classList.remove('selected')
    room_button3.classList.remove('selected')
    room_button4.classList.remove('selected')
    room_button5.classList.remove('selected')
    room_button6.classList.remove('selected')
    room_button2.classList.remove('selected')
    room_button8.classList.remove('selected')
    filterFetch(url, query1, query2, `&listings.rooms=6`, query4, query5, query6, query7, query8, query9, query10, "")
})
room_button8.addEventListener("click", () => {
    room_button8.classList.add('selected');
    room_button1.classList.remove('selected')
    room_button3.classList.remove('selected')
    room_button4.classList.remove('selected')
    room_button5.classList.remove('selected')
    room_button6.classList.remove('selected')
    room_button7.classList.remove('selected')
    room_button2.classList.remove('selected')
    filterFetch(url, query1, query2, `&listings.rooms=7`, query4, query5, query6, query7, query8, query9, query10, "")
})


bed_button1.addEventListener("click", () => {
    bed_button1.classList.add('selected');
    bed_button2.classList.remove('selected')
    bed_button3.classList.remove('selected')
    bed_button4.classList.remove('selected')
    bed_button5.classList.remove('selected')
    bed_button6.classList.remove('selected')
    bed_button7.classList.remove('selected')
    bed_button8.classList.remove('selected')
    bed_button9.classList.remove('selected')
    filterFetch(url, query1, query2, query3, "", query5, query6, query7, query8, query9, query10, "")
})

bed_button2.addEventListener('click', () => {
    bed_button2.classList.add('selected');
    bed_button1.classList.remove('selected')
    bed_button3.classList.remove('selected')
    bed_button4.classList.remove('selected')
    bed_button5.classList.remove('selected')
    bed_button6.classList.remove('selected')
    bed_button7.classList.remove('selected')
    bed_button8.classList.remove('selected')
    bed_button9.classList.remove('selected')
    filterFetch(url, query1, query2, query3, `&listings.beds=1`, query5, query6, query7, query8, query9, query10, "")
})
bed_button3.addEventListener('click', () => {
    bed_button3.classList.add('selected');
    bed_button2.classList.remove('selected')
    bed_button1.classList.remove('selected')
    bed_button4.classList.remove('selected')
    bed_button5.classList.remove('selected')
    bed_button6.classList.remove('selected')
    bed_button7.classList.remove('selected')
    bed_button8.classList.remove('selected')
    bed_button9.classList.remove('selected')
    filterFetch(url, query1, query2, query3, `&listings.beds=2`, query5, query6, query7, query8, query9, query10, "")
})
bed_button4.addEventListener('click', () => {
    bed_button4.classList.add('selected');
    bed_button2.classList.remove('selected')
    bed_button3.classList.remove('selected')
    bed_button1.classList.remove('selected')
    bed_button5.classList.remove('selected')
    bed_button6.classList.remove('selected')
    bed_button7.classList.remove('selected')
    bed_button8.classList.remove('selected')
    bed_button9.classList.remove('selected')
    filterFetch(url, query1, query2, query3, `&listings.beds=3`, query5, query6, query7, query8, query9, query10, "")
})
bed_button5.addEventListener('click', () => {
    bed_button5.classList.add('selected');
    bed_button2.classList.remove('selected')
    bed_button3.classList.remove('selected')
    bed_button4.classList.remove('selected')
    bed_button1.classList.remove('selected')
    bed_button6.classList.remove('selected')
    bed_button7.classList.remove('selected')
    bed_button8.classList.remove('selected')
    bed_button9.classList.remove('selected')
    filterFetch(url, query1, query2, query3, `&listings.beds=4`, query5, query6, query7, query8, query9, query10, "")
})
bed_button6.addEventListener('click', () => {
    bed_button6.classList.add('selected');
    bed_button2.classList.remove('selected')
    bed_button3.classList.remove('selected')
    bed_button4.classList.remove('selected')
    bed_button5.classList.remove('selected')
    bed_button1.classList.remove('selected')
    bed_button7.classList.remove('selected')
    bed_button8.classList.remove('selected')
    bed_button9.classList.remove('selected')
    filterFetch(url, query1, query2, query3, `&listings.beds=5`, query5, query6, query7, query8, query9, query10, "")
})
bed_button7.addEventListener('click', () => {
    bed_button7.classList.add('selected');
    bed_button2.classList.remove('selected')
    bed_button3.classList.remove('selected')
    bed_button4.classList.remove('selected')
    bed_button5.classList.remove('selected')
    bed_button6.classList.remove('selected')
    bed_button1.classList.remove('selected')
    bed_button8.classList.remove('selected')
    bed_button9.classList.remove('selected')
    filterFetch(url, query1, query2, query3, `&listings.beds=6`, query5, query6, query7, query8, query10, "")
})
bed_button8.addEventListener('click', () => {
    bed_button8.classList.add('selected');
    bed_button2.classList.remove('selected')
    bed_button3.classList.remove('selected')
    bed_button4.classList.remove('selected')
    bed_button5.classList.remove('selected')
    bed_button6.classList.remove('selected')
    bed_button7.classList.remove('selected')
    bed_button1.classList.remove('selected')
    bed_button9.classList.remove('selected')
    filterFetch(url, query1, query2, query3, `&listings.beds=7`, query5, query6, query7, query8, query9, query10, "")
})
bed_button9.addEventListener('click', () => {
    bed_button9.classList.add('selected');
    bed_button2.classList.remove('selected')
    bed_button3.classList.remove('selected')
    bed_button4.classList.remove('selected')
    bed_button5.classList.remove('selected')
    bed_button6.classList.remove('selected')
    bed_button7.classList.remove('selected')
    bed_button8.classList.remove('selected')
    bed_button1.classList.remove('selected')
    filterFetch(url, query1, query2, query3, `&listings.beds_gte=8`, query5, query6, query7, query8, query9, query10, "")
})

bathroom_button1.addEventListener('click', () => {
    bathroom_button1.classList.add('selected');
    bathroom_button2.classList.remove('selected')
    bathroom_button3.classList.remove('selected')
    bathroom_button4.classList.remove('selected')
    bathroom_button5.classList.remove('selected')
    bathroom_button6.classList.remove('selected')
    bathroom_button7.classList.remove('selected')
    bathroom_button8.classList.remove('selected')
    bathroom_button9.classList.remove('selected')
    filterFetch(url, query1, query2, query3, query4, "", query6, query7, query8, query9, query10, "");
})
bathroom_button2.addEventListener('click', () => {
    bathroom_button2.classList.add('selected');
    bathroom_button9.classList.remove('selected')
    bathroom_button3.classList.remove('selected')
    bathroom_button4.classList.remove('selected')
    bathroom_button5.classList.remove('selected')
    bathroom_button6.classList.remove('selected')
    bathroom_button7.classList.remove('selected')
    bathroom_button8.classList.remove('selected')
    bathroom_button1.classList.remove('selected')
    filterFetch(url, query1, query2, query3, query4, `&listings.bathrooms=1`, query6, query7, query8, query9, query10, "")
})
bathroom_button3.addEventListener('click', () => {
    bathroom_button3.classList.add('selected');
    bathroom_button2.classList.remove('selected')
    bathroom_button9.classList.remove('selected')
    bathroom_button4.classList.remove('selected')
    bathroom_button5.classList.remove('selected')
    bathroom_button6.classList.remove('selected')
    bathroom_button7.classList.remove('selected')
    bathroom_button8.classList.remove('selected')
    bathroom_button1.classList.remove('selected')
    filterFetch(url, query1, query2, query3, query4, `&listings.bathrooms=2`, query6, query7, query8, query9, query10, "")
})
bathroom_button4.addEventListener('click', () => {
    bathroom_button4.classList.add('selected');
    bathroom_button2.classList.remove('selected')
    bathroom_button3.classList.remove('selected')
    bathroom_button9.classList.remove('selected')
    bathroom_button5.classList.remove('selected')
    bathroom_button6.classList.remove('selected')
    bathroom_button7.classList.remove('selected')
    bathroom_button8.classList.remove('selected')
    bathroom_button1.classList.remove('selected')
    filterFetch(url, query1, query2, query3, query4, `&listings.bathrooms=3`, query6, query7, query8, query9, query10, "")
})
bathroom_button5.addEventListener('click', () => {
    bathroom_button5.classList.add('selected');
    bathroom_button2.classList.remove('selected')
    bathroom_button3.classList.remove('selected')
    bathroom_button4.classList.remove('selected')
    bathroom_button9.classList.remove('selected')
    bathroom_button6.classList.remove('selected')
    bathroom_button7.classList.remove('selected')
    bathroom_button8.classList.remove('selected')
    bathroom_button1.classList.remove('selected')
    filterFetch(url, query1, query2, query3, query4, `&listings.bathrooms=4`, query6, query7, query8, query9, query10, "")
})
bathroom_button6.addEventListener('click', () => {
    bathroom_button6.classList.add('selected');
    bathroom_button2.classList.remove('selected')
    bathroom_button3.classList.remove('selected')
    bathroom_button4.classList.remove('selected')
    bathroom_button5.classList.remove('selected')
    bathroom_button9.classList.remove('selected')
    bathroom_button7.classList.remove('selected')
    bathroom_button8.classList.remove('selected')
    bathroom_button1.classList.remove('selected')
    filterFetch(url, query1, query2, query3, query4, `&listings.bathrooms=5`, query6, query7, query8, query9, query10, "")
})
bathroom_button7.addEventListener('click', () => {
    bathroom_button7.classList.add('selected');
    bathroom_button2.classList.remove('selected')
    bathroom_button3.classList.remove('selected')
    bathroom_button4.classList.remove('selected')
    bathroom_button5.classList.remove('selected')
    bathroom_button6.classList.remove('selected')
    bathroom_button9.classList.remove('selected')
    bathroom_button8.classList.remove('selected')
    bathroom_button1.classList.remove('selected')
    filterFetch(url, query1, query2, query3, query4, `&listings.bathrooms=6`, query6, query7, query8, query9, query10, "")
})
bathroom_button8.addEventListener('click', () => {
    bathroom_button8.classList.add('selected');
    bathroom_button2.classList.remove('selected')
    bathroom_button3.classList.remove('selected')
    bathroom_button4.classList.remove('selected')
    bathroom_button5.classList.remove('selected')
    bathroom_button6.classList.remove('selected')
    bathroom_button7.classList.remove('selected')
    bathroom_button1.classList.remove('selected')
    bathroom_button9.classList.remove('selected')
    filterFetch(url, query1, query2, query3, query4, `&listings.bathrooms=7`, query6, query7, query8, query9, query10, "")
})
bathroom_button9.addEventListener('click', () => {
    bathroom_button9.classList.add('selected');
    bathroom_button2.classList.remove('selected')
    bathroom_button3.classList.remove('selected')
    bathroom_button4.classList.remove('selected')
    bathroom_button5.classList.remove('selected')
    bathroom_button6.classList.remove('selected')
    bathroom_button7.classList.remove('selected')
    bathroom_button8.classList.remove('selected')
    bathroom_button1.classList.remove('selected')
    filterFetch(url, query1, query2, query3, query4, `&listings.bathrooms_gte=8`, query6, query7, query8, query9, query10, "")
})

rating_button.addEventListener('click', () => {
    rating_button.style.border = "1px solid black"
    filterFetch(url, query1, query2, query3, query4, `&listings.rating_gte=${4}`, query5, query6, query7, query8, query9, query10, '')
})

prototype_button1.addEventListener('click', () => {
    prototype_button1.style.border = "1px solid black";
    prototype_button2.style.border = "1px solid rgb(195, 190, 190)";
    prototype_button3.style.border = "1px solid rgb(195, 190, 190)";
    prototype_button4.style.border = "1px solid rgb(195, 190, 190)";
    filterFetch(url, query1, query2, query3, query4, query5, query6, `&listings.property_type=House`, query8, query9, query10, "")

})
prototype_button2.addEventListener('click', () => {
    prototype_button1.style.border = "1px solid rgb(195, 190, 190)";
    prototype_button2.style.border = "1px solid black";
    prototype_button3.style.border = "1px solid rgb(195, 190, 190)";
    prototype_button4.style.border = "1px solid rgb(195, 190, 190)";
    filterFetch(url, query1, query2, query3, query4, query5, query6, `&listings.property_type=Flat`, query8, query9, query10, "")

})
prototype_button3.addEventListener('click', () => {
    prototype_button1.style.border = "1px solid rgb(195, 190, 190)";
    prototype_button2.style.border = "1px solid rgb(195, 190, 190)";
    prototype_button3.style.border = "1px solid black";
    prototype_button4.style.border = "1px solid rgb(195, 190, 190)";
    filterFetch(url, query1, query2, query3, query4, query5, query6, `&listings.property_type=Villa`, query8, query9, query10, "")

})
prototype_button4.addEventListener('click', () => {
    prototype_button1.style.border = "1px solid rgb(195, 190, 190)";
    prototype_button2.style.border = "1px solid rgb(195, 190, 190)";
    prototype_button3.style.border = "1px solid rgb(195, 190, 190)";
    prototype_button4.style.border = "1px solid black";
    filterFetch(url, query1, query2, query3, query4, query5, query6, `&listings.property_type=Apartment`, query8, query9, query10, "")

})

Amenities_button1.addEventListener('click', () => {

    if (Amenities_button1.checked) {
        filterFetch(url, query1, query2, query3, query4, query5, query6, query7, `&listings.amenities=${Amenities_button1.value}`, query9, query10, "")
    }

})
Amenities_button2.addEventListener('click', () => {

    if (Amenities_button2.checked) {
        filterFetch(url, query1, query2, query3, query4, query5, query6, query7, `&listings.amenities=${Amenities_button2.value}`, query9, query10, "")
    }

})
Amenities_button3.addEventListener('click', () => {

    if (Amenities_button3.checked) {
        filterFetch(url, query1, query2, query3, query4, query5, query6, query7, `&listings.amenities=${Amenities_button3.value}`, query9, query10, "")
    }

})
Amenities_button4.addEventListener('click', () => {

    if (Amenities_button4.checked) {
        filterFetch(url, query1, query2, query3, query4, query5, query6, query7, `&listings.amenities=${Amenities_button4.value}`, query9, query10, "")
    }

})
Amenities_button5.addEventListener('click', () => {

    if (Amenities_button5.checked) {
        filterFetch(url, query1, query2, query3, query4, query5, query6, query7, `&listings.amenities=${Amenities_button5.value}`, query9, query10, "")
    }

})
Amenities_button6.addEventListener('click', () => {

    if (Amenities_button6.checked) {
        filterFetch(url, query1, query2, query3, query4, query5, query6, query7, `&listings.amenities=${Amenities_button6.value}`, query9, query10, "")
    }

})

booking_container.forEach(ele => {

    ele.addEventListener('click', () => {
        if (ele.checked && ele.value != "Allows pets") {
            filterFetch(url, query1, query2, query3, query4, query5, query6, query7, query8, `&listings.booking_options=${ele.value}`, query10, "")
        }
        else if (ele.checked && ele.value == "Allows pets") {
            filterFetch(url, query1, query2, query3, query4, query5, query6, query7, query8, `&listings.isPetAllowed=${true}`, query10, "")
        }


    })

})

function createCard(ele, images) {
    let div = document.createElement("div");
    let imgContainer = document.createElement("div");
    let carouselContainer = document.createElement("div");
    let prevBtn = document.createElement("span");
    let nextBtn = document.createElement("span");
    let img = document.createElement("img");
    let h5 = document.createElement("h5");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    div.classList.add("Rakesh_card");

    // Configure carousel container
    carouselContainer.classList.add("carousel-container");

    // Configure image container
    imgContainer.classList.add("img-container");

    // Configure previous and next buttons<span class="material-symbols-outlined">

    prevBtn.classList.add("material-symbols-outlined");
    prevBtn.textContent = "arrow_back_ios_new";
    nextBtn.classList.add("material-symbols-outlined");
    nextBtn.textContent = " arrow_forward_ios";

    // Add event listeners for previous and next buttons
    let currentImageIndex = 0;

    function showImage(index) {
        if (index < 0 || index >= images.length) {
            return; // index out of bounds
        }
        img.src = images[index];
        currentImageIndex = index;
    }

    prevBtn.addEventListener('click', () => {
        showImage(currentImageIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        showImage(currentImageIndex + 1);
    });

    // Append elements to their respective containers
    imgContainer.appendChild(img);
    carouselContainer.appendChild(prevBtn);
    carouselContainer.appendChild(nextBtn);
    h5.innerText = ele.listings.location;
    p1.innerText = `Price: ₹${ele.listings.price_per_night}`;
    p2.innerText = `Rating:${ele.listings.rating}`;
    div.append(imgContainer, carouselContainer, h5, p1, p2)



    // Show the first image initially
    showImage(0);
    return div;
}

// Example usage
var container = document.getElementById("carding_container"); // Replace "container" with the ID of the parent element where you want to append the card
// Add URLs of your images


function appendData(arr) {
    container.innerHTML = ""
    arr.forEach(ele => {
        const images = [ele.listings.images[0].img1, ele.listings.images[1].img2, ele.listings.images[2].img3];
        let ans = createCard(ele, images)
        container.append(ans);

    })
}
// booking_container.addEventListener('click',()=>{
//     console.log(booking_container.value)
// })

// booking_container2.addEventListener('click',()=>{
//     console.log(booking_container2.value)
// })

// booking_container3.addEventListener('click',()=>{
//     console.log(booking_container3.value)
// })
// };

// Rakesh js end