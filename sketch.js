let dice = [];
let numberOfDice = 1;
let list = "values: ";
let rolls = 0;
let count = [];
let sum = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numberOfDice; i++) {
    dice[i] = new Die(50); // argument is the size of the die
  }
  console.log('i am here');

}

function draw() {
  background("Pink");
  text('Pig', windowWidth/2, 100)
  // loop over the array and place+display each die
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i]; // 'die' is a temporary variable for the current array item
    die.place(die.size*1.2*i+die.size, die.size*2); // place the die neatly in the row
    die.display(); // actually draw it on screen
  }
  text('Total', 200, 150);
  text(sum, 200, 200); 
  text('Rolls', 300, 150);
  text( rolls, 300, 200);
}

function mouseClicked() {
  // loop over the array of dice...
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i];
    // if the cursor is over the current die, freeze/unfreeze that die
    if (die.isTouched(mouseX,mouseY)) {
      die.toggleFreeze();
    }
  }
}

// for computers...
function keyPressed() {
  shakeDice();
}

// for phones...
function deviceShaken() {
  shakeDice();
}

// loop over the array of dice and try to roll each one in turn
// (note that a die won't actually roll if it's frozen)
// also, output the list of values to the console
function shakeDice() {
    for (let i = 0; i < dice.length; i++) {
    const die = dice[i];
    die.roll();
      list = list + die.value + " ";
      //for (x =0; x < count.length; x++);
      sum += die.value; }
      //for (let x =0; x < count.length; x++)
  console.log(list);
  rolls++;
  if (rolls >= 100){
      rolls = 0;
  }
console.log(rolls);
console.log(sum);

}