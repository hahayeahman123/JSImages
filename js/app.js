const content = document.querySelector(".container .imgs");
const show = document.querySelector(".show");
const mix = document.querySelector(".mix");
const images = ['1.jpg', '2.jpg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg', '8.jpeg', '9.jpeg', '10.jpg'];

function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}

content.textContent=""; //  Clears the content initially

show.addEventListener("click",(e)=>{ // when the ".show" button is pressed...
    for(let i=0;i<images.length;i++){
         let image = document.createElement("img"); // we create a HTML element "img"
         image.src=`img/${images[i]}`; // we create the source of the images so the code knows where to take the imgaes from
         content.appendChild(image); // we add them to the ".content" part of our code
    }
})

mix.addEventListener("click", () => {
    shuffle(images); // Shuffle the image filenames
    content.innerHTML = ""; // Clear the container
    for (let i = 0; i < images.length; i++) {
        let image = document.createElement("img");
        image.src = `img/${images[i]}`; // Use shuffled filenames
        content.appendChild(image); // we add them to the ".content" part of our code
    }
});
