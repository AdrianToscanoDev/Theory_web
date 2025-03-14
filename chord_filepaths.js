// holds file paths for piano images. 
const chord_filepaths_root = [
    // major chords
    "images/chords/root_position/major/a_major.png",
    'images/chords/root_position/major/a_sharp_major.png',
    'images/chords/root_position/major/b_major.png',
    'images/chords/root_position/major/c_major.png',
    'images/chords/root_position/major/c_sharp_major.png',
    'images/chords/root_position/major/d_major.png',
    'images/chords/root_position/major/d_sharp_major.png',
    'images/chords/root_position/major/e_major.png',
    'images/chords/root_position/major/f_major.png',
    'images/chords/root_position/major/f_sharp_major.png',
    'images/chords/root_position/major/g_major.png',
    'images/chords/root_position/major/g_sharp_major.png',

    // minor chords
    'images/chords/root_position/minor/a_minor.png',
    'images/chords/root_position/minor/a_sharp_minor.png',
    'images/chords/root_position/minor/b_minor.png',
    'images/chords/root_position/minor/c_minor.png',
    'images/chords/root_position/minor/c_sharp_minor.png',
    'images/chords/root_position/minor/d_minor.png',
    'images/chords/root_position/minor/d_sharp_minor.png',
    'images/chords/root_position/minor/e_minor.png',
    'images/chords/root_position/minor/f_minor.png',
    'images/chords/root_position/minor/f_sharp_minor.png',
    'images/chords/root_position/minor/g_minor.png',
    'images/chords/root_position/minor/g_sharp_minor.png',
];

// This map is used to search for the chords name using the .png filename. Eg., "a_major.png" is used to find "A Major". 
let chords = new Map();
// root position major
chords.set("a_major.png",           "A Major");
chords.set("a_sharp_major.png",     "A# Major");
chords.set("b_major.png",           "B Major");
chords.set("c_major.png",           "C Major");
chords.set("c_sharp_major.png",     "C# Major");
chords.set("d_major.png",           "D Major");
chords.set("d_sharp_major.png",     "D# Major");
chords.set("e_major.png",           "E Major");
chords.set("f_major.png",           "F Major");
chords.set("f_sharp_major.png",     "F# Major");
chords.set("g_major.png",           "G Major");
chords.set("g_sharp_major.png",     "G# Major");
// root position minor
chords.set("a_minor.png",           "A Minor");
chords.set("a_sharp_minor.png",     "A# Minor");
chords.set("b_minor.png",           "B Minor");
chords.set("c_minor.png",           "C Minor");
chords.set("c_sharp_minor.png",     "C# Minor");
chords.set("d_minor.png",           "D Minor");
chords.set("d_sharp_minor.png",     "D# Minor");
chords.set("e_minor.png",           "E Minor");
chords.set("f_minor.png",           "F Minor");
chords.set("f_sharp_minor.png",     "F# Minor");
chords.set("g_minor.png",           "G Minor");
chords.set("g_sharp_minor.png",     "G# Minor");