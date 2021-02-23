class JamBuddy {
  constructor(){
  this.noteCircle = [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
  ];
  this.outputArr = [];
}
  selectNotes() {
    let randomIndex = Math.floor(Math.random() * 12);
    let randomIndexTwo = Math.floor(Math.random() * 12);
    let firstNote = this.noteCircle[randomIndex];
    let secondNote = this.noteCircle[randomIndexTwo];
    this.outputArr = [firstNote, secondNote];
    return this.outputArr;
  }
  checkAnswer(num) {
    let num1 = this.noteCircle.indexOf(this.outputArr[0])
    let num2 = this.noteCircle.indexOf(this.outputArr[1])
    let noteDifference = 0;
    let circle = 12 - num1; 
    num1 > num2
      ? (noteDifference = circle + num2)
      :  (noteDifference = num2 - num1) 
    return noteDifference === num
  }
}

module.exports = { JamBuddy };
