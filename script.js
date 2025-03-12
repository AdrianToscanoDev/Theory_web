// array of image paths
const images = [
    "images/chords/root_position/major/a_major.png",
    'images/chords/root_position/major/a_sharp_major.png',
    'images/chords/root_position/major/b_major.png',
    'images/chords/root_position/major/c_major.png',
];

// generate random image
function generateRandomImage() {
     
    const randomIndex = Math.floor(Math.random() * images.length); // Select a random index
    const randomImage = images[randomIndex]; // Get the random image from the array
    document.getElementById('randomImage').src = randomImage; // Update the image src 
    
}