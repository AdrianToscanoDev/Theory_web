class Question {
    // Private variables
    #NUM_CHOICES = 4;
    #mainImagePath;
    #correctAnswerIndex; 
    #correctAnswerChordName;
    #multipleChoice1 = [null, false];
    #multipleChoice2 = [null, false];
    #multipleChoice3 = [null, false];
    #multipleChoice4 = [null, false];
    #rightAnswer = null;

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

    get correctAnswerChordName() {
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

    get rightAnswer() {
        return this.#rightAnswer;
    }

    // member functions 
    setRightAnswer() {

        if (this.#correctAnswerChordName === this.#multipleChoice1[0]){
            this.#multipleChoice1[1] = true;
            this.#rightAnswer = "choice1";
        }

        else if (this.#correctAnswerChordName === this.#multipleChoice2[0]){
            this.#multipleChoice2[1] = true;
            this.#rightAnswer = "choice2";
        }

        else if (this.#correctAnswerChordName === this.#multipleChoice3[0]){
            this.#multipleChoice3[1] = true;
            this.#rightAnswer = "choice3";
        }

        else {
            this.#multipleChoice4[1] = true;
            this.#rightAnswer = "choice4";
        }

    }
}
