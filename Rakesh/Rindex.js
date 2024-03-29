let main_conatiner=document.getElementById("main_container");
let filter_container=document.getElementById("filter");
let range_container=document.getElementById("range");
let extra_features_add=document.querySelector("#addmore");
let show_more_extrainfo=document.querySelector("#extra_features a");
let bool=false;

document.addEventListener('DOMContentLoaded', function() {
    var min_button = document.getElementById('min');
    var max_button = document.getElementById('max');
    var isDragging = false;
    var startX, startY;
    var maxX = range_container.offsetWidth - min_button.offsetWidth;
    var minY = range_container.offsetWidth - min_button.offsetWidth;

    min_button.addEventListener('mousedown', function(event) {
        isDragging = true;
        startX = event.clientX - min_button.offsetLeft;
       //console.log("hii")
        document.addEventListener('mousemove', onMouseMove);

        document.addEventListener('mouseup', onMouseUp);
    });

    max_button.addEventListener('mousedown', function(event) {
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

show_more_extrainfo.addEventListener("click",()=>{
    if(bool===false){
        bool=true;
        addExtraInfo();
    }
    else{
        removeExtraInfo();
    }
})

function addExtraInfo(){
    let input1=document.createElement("input");
    let input2=document.createElement("input");
    let input3=document.createElement("input");
    let input4=document.createElement("input");
    let input5=document.createElement("input");
    let input6=document.createElement("input");
    let h51=document.createElement("h5")
    let h52=document.createElement("h5")
    let p1=document.createElement("p")
    let p2=document.createElement("p")
    let p3=document.createElement("p")
    let p4=document.createElement("p")
    let p5=document.createElement("p")
    let p6=document.createElement("p")
    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let div3=document.createElement("div");
    let div4=document.createElement("div");
    let div5=document.createElement("div");
    let div6=document.createElement("div");
    let div7=document.createElement("div");
    let div8=document.createElement("div");
    let div9=document.createElement("div");
    let div10=document.createElement("div");
    input1.setAttribute("type","checkbox")
    input2.setAttribute("type","checkbox")
    input3.setAttribute("type","checkbox")
    input4.setAttribute("type","checkbox")
    input5.setAttribute("type","checkbox")
    input6.setAttribute("type","checkbox")
    h51.innerText="Bedroom";
    h52.innerText="Bathroom";
    p1.innerText="tep-free bedroom access"
    p2.innerText="Bedroom entrance wider than 32 inches (81 centimetres)"
    p3.innerText="tep-free bathroom access"
    p4.innerText="Bathroom entrance wider than 32 inches (81 centimetres)"
    p5.innerText="Shower grab bar"
    p6.innerText="Toilet grab bar"
    div1.append(input1,p1)
    div2.append(input2,p2)
    div3.append(input3,p3)
    div4.append(input4,p4)
    div5.append(input5,p5)
    div6.append(input6,p6)
    div7.append(div1,div2)
    div9.append(h51,div7)
    div8.append(div3,div4,div5,div6)
    div10.append(h52,div8)
    extra_features_add.append(div9,div10)
    show_more_extrainfo.innerText="Show less"
}

function removeExtraInfo(){
    bool=false;
    extra_features_add.innerHTML=" ";
    show_more_extrainfo.innerText="Show more"
}
fetchData()
async function fetchData(){
    try{
        let res= await fetch("https://airbin-data-8.onrender.com/data");
        let data=await res.json();
        storeLanguageData(data)
       // console.log(data)
    }
    catch(err){
        console.log(err)
    }
  
}
let arr=[];
function storeLanguageData(arr1){
  arr1.forEach(element => {
    if(!arr.includes(element.listings.host_language)){
        arr.push(element.listings.host_language)
    }
  });
}

console.log(arr,"arr")