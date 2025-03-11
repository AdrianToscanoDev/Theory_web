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

        // get image source 
        // CURRENT ISSUE : WE DONT HAVE A DEFAULT IMAGE. THE IMAGE IS DISPLAYED AFTER THE GENERATE IMAGE BUTTON IS CLICKED. SO I CAN'T GRAB THE CURRENT IMAGE SOURCE ON THE FIRST PASS. I NEED TO DEFAULT A RANDOM IMAGE TO BEGIN WITH. AND THEN EVERY TIME THE BUTTON IS CLICKED, I CAN CHECK AGAINST THAT. THIS IS DONE SO THAT THE USER DOESNT GET THE SAME CHORD OVER AND OVER (BY CHANCE. IT IS NOT AS LIKELY AS THE LIST OF CHORDS GROWS. BUT ITS STILL POSSIBLE AND CAN BE INTERPRETED AS A BUG BY THE USER IF , FOR SOME REASON THEY GENERATE NEW IMAGE AND NOTHING CHANGES.)
        const currImageSource = document.getElementById()

    } while ()


    const randomIndex = Math.floor(Math.random() * images.length); // Select a random index
    const randomImage = images[randomIndex]; // Get the random image from the array
    document.getElementById('randomImage').src = randomImage; // Update the image src
}