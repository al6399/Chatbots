let img;
let data;
let input, sendBttn;
let answer = "Ask about me. Put words in my mouth.";
function preload() {
  data = loadJSON("chatbot.json");
  img = loadImage("korosensei.jpg");
}
function setup() {
  createCanvas(400, 400);
  console.log(data);
  //input field and button
  input = createInput();
  input.position(110,203);
  sendBttn = createButton("SEND MESSAGE");
  sendBttn.position (140,350);
// if the button is pressed
  sendBttn.mousePressed(chat);  
  
}

function chat(){
let inputStr = input.value().toLowerCase();
  console.log(inputStr);
  //loop through the entire brain array
  // once we find a match, break out of the loop
  // if we don't find a match, respond with a catchall response
  loop1: for(let i = 0; i<data.brain.length; i++) {
    loop2: for(let j = 0; j<data.brain[i].triggers.length; j++) {
      if(inputStr.indexOf(data.brain[i].triggers[j])!==-1) {
        //we have a match
        answer = random(data.brain[i].responses);
        break loop1;
      }else {
        answer = random(data.catchall);
      }
    }
  }
}

function draw() {
  //background(220);
  image(img, 0, -70, 400, 500);
  text(answer, 120, 55, 150);
  fill(0);
  circle(110, 147, 11);
  circle(204, 130, 11);
// noFill();
//strokeWeight(5);
 //ellipse(200,200,400, 370);

}