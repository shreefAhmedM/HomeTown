// var firstIndex = 0;
// function autoSlider(){
//     setTimeout(autoSlider(),2000)
//     var pics;
//     const img= document.querySelectorAll("img");
//     for(pics=0; pics<img.length;pics++){
//         img[pics].style.display = "none";
//     }
//     firstIndex++;
//     if(firstIndex > img.length){
//         firstIndex = 1;
//     }
//     img[firstIndex -1].style.display = "block";

// }
// autoSlider();
var firstIndex = 0;

function autoSlider() {
    const img = document.querySelectorAll(".imgSlider");

    // Hide all images
    img.forEach(image => {
        image.style.display = "none";
    });

    // Increase index and reset if it exceeds the number of images
    firstIndex++;
    if (firstIndex > img.length) {
        firstIndex = 1; // Reset to the first image
    }

    // Display the current image
    img[firstIndex - 1].style.display = "block";

    // Recursively call the function every 2 seconds
    setTimeout(autoSlider, 2000);
}

// Start the automatic slider
autoSlider();