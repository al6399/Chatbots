let bot = new RiveScript(); //new bot
let botVoice = new p5.Speech();

function setup() {
  createCanvas(windowWidth, windowHeight);

  botVoice.setVoice("Google español de Estados Unidos");
  textFont("Georgia");


}

function draw() {
  background("DarkSeaGreen");
  textSize(24);
  text(
    "Bienvenido de nuevo a la casa de tu tía. Recuérdame, ¿de qué sexo eres? (Welcome back to your aunt's house. Remind me, what sex are you?)",
    width / 8,
    height / 6,
    width - width / 4
  );
  textSize(14);

}

