class Question {
    // Private variables
    #NUM_CHOICES;
    #mainImagePath;
    #correctAnswerIndex; 
    #correctAnswerChordName;
    #multipleChoice1 = [null, false];
    #multipleChoice2 = [null, false];
    #multipleChoice3 = [null, false];
    #multipleChoice4 = [null, false];

    // constructor
    constructor() {
        this.#NUM_CHOICES = 4;
    }

    // Setter methods
    setImagePath(imagePath) {
        this.#mainImagePath = imagePath;
    }

    setCorrectAnswerIndex(index) {
        this.#correctAnswerIndex = index;
    }
    
    setCorrectAnswerChordName() {

        // use the file path to get the chord name 
        let key = this.#mainImagePath.split("/").pop();
        let chordName = chords.get(key);
        this.#correctAnswerChordName = chordName;
    }

    setMultipleChoice1(chordName, isCorrect) {
        this.#multipleChoice1 = [chordName, isCorrect];
    }
    setMultipleChoice2(chordName, isCorrect) {
        this.#multipleChoice2 = [chordName, isCorrect];
    }
    setMultipleChoice3(chordName, isCorrect) {
        this.#multipleChoice3 = [chordName, isCorrect];
    }
    setMultipleChoice4(chordName, isCorrect) {
        this.#multipleChoice4 = [chordName, isCorrect];
    }

    // Getter methods
    get numOfChoices() {
        return this.#NUM_CHOICES;
    }
    
    get imagePath() {
        return this.#mainImagePath;
    }

    get correctAnswerIndex() {
        return this.#correctAnswerIndex;
    }

    get setCorrectAnswerChordName() {
        return this.#correctAnswerChordName;
    }

    get choice1ChordName() {
        return this.#multipleChoice1[0];
    }
    get choice1isCorrect() {
        return this.#multipleChoice1[1];
    }

    get choice2ChordName() {
        return this.#multipleChoice2[0];
    }
    get choice2isCorrect() {
        return this.#multipleChoice2[1];
    }

    get choice3ChordName() {
        return this.#multipleChoice3[0];
    }
    get choice3isCorrect() {
        return this.#multipleChoice3[1];
    }

    get choice4ChordName() {
        return this.#multipleChoice4[0];
    }
    get choice4isCorrect() {
        return this.#multipleChoice4[1];
    }

    // member functions

    // rightAnswer refers to the correct answer from within this class. eg- multipleChoice1,2,3,4. aka- this sets the correct answer of those 4 options. 
    setRightAnswer() {

        if (this.#correctAnswerChordName === this.#multipleChoice1[0])
            this.#multipleChoice1[1] = true;

        if (this.#correctAnswerChordName === this.#multipleChoice2[0])
            this.#multipleChoice2[1] = true;

        if (this.#correctAnswerChordName === this.#multipleChoice3[0])
            this.#multipleChoice3[1] = true;

        if (this.#correctAnswerChordName === this.#multipleChoice4[0])
            this.#multipleChoice4[1] = true;

    }
}
