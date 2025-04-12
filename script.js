var highscore = 10;
var score = 0;
var playername = "AAA";
var highscorename = "ZZZ";
var nameinput;

function setup() {
    createCanvas(600, 300);
    if(getItem('highscore') !== null) {
        highscore = getItem('highscore');
        highscorename = getItem('highscorename');
    }
    nameinput = createInput(playername);
    var resetbutton = createButton('Reset');
    resetbutton.mousePressed(function() {
        clearStorage();
        highscore = 10;
        score = 0;
        highscorename = "ZZZ";
    });
    ellipseMode(CENTER);
}

function draw() {
    background('#F7CAC9');
    playername = nameinput.value();

    ellipse(width/2, height/2, 100, 100);

    text(score, 20, 20);
    text(playername, 20, 40);
    text(highscore, width-50, 20);
    text(highscorename, width-50, 40);
}

function mousePressed() {
    if(dist(mouseX, mouseY, width/2, height/2) < 50) {
        score++;
        if(score > highscore) {
            highscore = score;
            highscorename = playername;
            storeItem('highscore', highscore);
            storeItem('highscorename', highscorename);
        }
    }
}

