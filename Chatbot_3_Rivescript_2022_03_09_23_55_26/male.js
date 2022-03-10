let bot = new RiveScript(); //new bot
let botVoice = new p5.Speech();
let submitBttn, inputField;
let responses = [];

function preload() {
  bot.loadFile("male.txt").then(loaded).catch(error);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  responses.push("Type hello Tias to start speaking to me");
  botVoice.setVoice("Google español de Estados Unidos");

  inputField = createInput();
  inputField.position(width / 8, height / 3);
  inputField.size(width / 4, 50);

  submitBttn = createButton("SEND");
  submitBttn.position(width / 8, height / 3 + inputField.height + 20);
  submitBttn.mousePressed(chat);

  textFont("Georgia");
}

function draw() {
  background(255);
  textSize(24);
  
  textSize(14);

  for (let i = 0; i < responses.length; i++) {
    rect(width / 2, height / 3 + i * 90 , width / 2 - width / 8, 50);
    text(
      responses[i],
      width / 2 + 5,
      height / 3 + i * 60+10,
      width / 2 - width / 8 - 10
    );
    if(height / 3 + i * 60+50>height){
      responses.splice(0,1);
    }
  }
}

function chat() {
  let input = inputField.value();
  console.log(input);
  bot.reply("local-user", input).then(respond);
}
function respond(reply) {
  responses.push(reply);
  botVoice.speak(reply);
}
function loaded() {
  console.log("Chatbot ready!");
  bot.sortReplies(); //You must sort the replies before trying to fetch any!
}
function error(error) {
  console.log("There is an error.");
  console.log(error);
}

function keyPressed(){
  if (keyCode===ENTER){
    chat();
  }
}
