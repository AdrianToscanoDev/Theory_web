// array of image paths
const images = [
    "images/chords/root_position/major/a_major.png",
    'images/chords/root_position/major/a_sharp_major.png',
    'images/chords/root_position/major/b_major.png',
    'images/chords/root_position/major/c_major.png',
];

// generate random image
function generateRandomImage() {

    // do this while our updated image source is the same name as the current image source name
    do {

        // get current image source 
        const currImageSource = document.getElementById('randomImage').src

        // get new image 
        const randomIndex = Math.floor(Math.random() * images.length);
        const newImageSource = images[randomIndex];

    } while (currImageSource === newImageSource);

    // assign the newImageSource 
    document.getElementById('randomImage').src = newImageSource;

    /*
    const randomIndex = Math.floor(Math.random() * images.length); // Select a random index
    const randomImage = images[randomIndex]; // Get the random image from the array
    document.getElementById('randomImage').src = randomImage; // Update the image src 
    */
}