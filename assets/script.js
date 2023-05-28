const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let right = document.getElementById("arrow_right");
let left = document.getElementById("arrow_left");
let imageBanner = document.querySelector('#banner > img');
let textLine = document.querySelector('#banner > p');
let dots = document.querySelectorAll(".dot");
let imagePlace =0;

right.addEventListener('click', () => {
     imagePlace++;
     if (imagePlace > slides.length - 1) {
          imagePlace = 0;
     }
     imageBanner.src = `./assets/images/slideshow/${slides[imagePlace].image}`;
     // to be able to concatenate the string with variables i use `{$}` 
     textLine.innerHTML = slides[imagePlace].tagLine;
     // index of the dots , i use the counter of the imagePlace
     dots.forEach(item => item.classList.remove('dot_selected'))
     // i need to remove all the class dot_selected for each click 
     dots[imagePlace].classList.add('dot_selected')
     // to add only the class in the index of the image
     console.log(imagePlace);
});


left.addEventListener('click', () => {
     imagePlace = imagePlace - 1;
     if (imagePlace < 0) {
          imagePlace = slides.length - 1;
     }
	 imageBanner.src = `./assets/images/slideshow/${slides[imagePlace].image}`;
     textLine.innerHTML = slides[imagePlace].tagLine;
     dots.forEach(item => item.classList.remove('dot_selected'))
     dots[imagePlace].classList.add('dot_selected')
     console.log(imagePlace);
});