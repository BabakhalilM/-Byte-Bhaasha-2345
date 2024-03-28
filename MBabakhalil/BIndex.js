// // let bcontainer=document.querySelector(".bcontainer");

// // document.addEventListener('DOMContentLoaded', function () {
//     let slider = document.querySelector('.carousel-slider');
//     let slides = document.querySelectorAll('.slide');
//     const prevBtn = document.querySelector('.prev-btn');
//     const nextBtn = document.querySelector('.next-btn');
//     let currentIndex = 0;
//     let slideWidth = slides[0].clientWidth;
//     // console.log(slideWidth);
//     // let isDragging = false;
//     // let startPos = 0;
//     // let currentTranslate = 0;
//     // let prevTranslate = 0;

//     const categories = [
//         "Islands", "Design", "Arctic", "Luxe", "Earth homes", "Top of the world", "Treehouses",
//         "Tiny homes", "Beach", "Caves", "OMG!", "Historical homes", "Rooms", "Castles", "National parks",
//         "Camper vans", "Amazing pools", "Cabins", "Surfing", "Camping", "Trending", "Tropical",
//         "Bed & breakfasts", "New", "Golfing", "Countryside", "Mansions", "Iconic cities", "Amazing views",
//         "Farms", "A-frames", "Lake", "Vineyards", "Hanoks", "Windmills", "Skiing", "Cycladic homes",
//         "Lakefront", "Chef's kitchens", "Minsus", "Barns", "Shepherd's huts", "Towers", "Ryokans", "Yurts",
//         "Domes", "Casas particulares", "Desert", "Off-the-grid", "Play", "Adapted", "Ski-in/out", "Boats",
//         "Houseboats", "Containers", "Beachfront", "Grand pianos", "Creative spaces", "Riads", "Trulli", "Dammusi"
//     ];
//     categories.forEach(element => {
//         let div=document.createElement("div");
//         div.className="slide";
//         // let p=document.createElement("p");
//         // p.innerText=element;
//         div.innerText=element;
//         console.log(element);
//         // div.append(p);
//         slider.append(div);
        
//     });

//     slides.forEach((slide, index) => {
//         slide.style.left = `${index * 100}%`;
//     });

//     function updateSlider() {
//         slider.style.transform = `translateX(${currentTranslate}px)`;
//     }

//     function setSliderPosition() {
//         slider.style.transition = 'transform 0.5s ease';
//         currentTranslate = currentIndex * -slideWidth;
//         updateSlider();
//     }


//     prevBtn.addEventListener('click', function () {
//         if (currentIndex !== 0) {
//             currentIndex--;
//         }
//         setSliderPosition();
//     });

//     nextBtn.addEventListener('click', function () {
//         if (currentIndex !== slides.length - 1) {
//             console.log(slides.length);
//             currentIndex++;
//         }
//         setSliderPosition();
//     });

    // slider.addEventListener('mousedown', dragStart);


    // slider.addEventListener('mousemove', function(e) {
    //     if (!isDragging) {
    //       const mouseX = e.clientX;
    //       const sliderRect = slider.getBoundingClientRect();
    //       const sliderX = mouseX - sliderRect.left;
    //       const progress = sliderX / sliderRect.width;
    //       const slideIndex = Math.floor(progress * slides.length);
    //       if (slideIndex !== currentIndex && slideIndex >= 0 && slideIndex < slides.length) {
    //         currentIndex = slideIndex;
    //         setSliderPosition();
    //       }
    //     }
    //   });
// });


    // function dragStart(e) {
    //     isDragging = true;
    //     startPos = e.clientX;
    //     slider.style.transition = 'none';
    //     prevTranslate = currentTranslate;
    //     document.addEventListener('mousemove', dragMove);
    //     document.addEventListener('mouseup', dragEnd);
    // }

    // function dragMove(e) {
    //     if (isDragging) {
    //         const currentPosition = e.clientX;
    //         currentTranslate = prevTranslate + currentPosition - startPos;
    //         updateSlider();
    //     }
    // }

    // function dragEnd() {
    //     isDragging = false;
    //     const moveBy = currentTranslate - prevTranslate;
    //     if (Math.abs(moveBy) > slideWidth / 3 && currentIndex !== slides.length - 1) {
    //         currentIndex += moveBy > 0 ? -1 : 1;
    //     }
    //     setSliderPosition();
    //     document.removeEventListener('mousemove', dragMove);
    //     document.removeEventListener('mouseup', dragEnd);
    // }


    document.addEventListener('DOMContentLoaded', function() {
        let slider = document.querySelector('.carousel-slider');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        let currentIndex = 0;
        let slideWidth;
        
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
      
        function createSlide(element) {
          let div = document.createElement("div");
          div.className = "slide";
          div.innerText = element;
          slider.append(div);
        }
      
        function updateSlides() {
          slider.innerHTML = ''; // Clear existing slides
          categories.forEach(element => {
            createSlide(element);
          });
          slideWidth = slider.querySelector('.slide').clientWidth;
        }
      
        updateSlides();
      
        function updateSlider() {
          slider.style.transform = `translateX(${currentIndex * -slideWidth}px)`;
        }
      
        prevBtn.addEventListener('click', function() {
          if (currentIndex !== 0) {
            currentIndex--;
          }
          updateSlider();
        });
      
        nextBtn.addEventListener('click', function() {
          if (currentIndex !== categories.length - 1) {
            currentIndex++;
          }
          updateSlider();
        });
      });
    
    
    