var meep;
var currentkitty = 0;
var allcats = [];
var kittyposition = {x: 100, y: 100, w: 100, h: 100};
var index = 0;

function preload() {
    meep = loadJSON('data.json');
    let url = 'https://api.thecatapi.com/v1/images/search?limit=15&category_ids=5';
    cats = loadJSON(url, successCallback);
}

function successCallback(data) {
    console.log(data);
    for(kitty of data) {
        var kitty = createImg(kitty.url);
        kitty.hide();
        allcats.push(kitty);
    }
}

function setup() {
    createCanvas(600, 300);
    console.log(meep);
}

function draw(){
    background('#F7CAC9');
    // text(allcats.length, 10, 10);
    image(allcats[currentkitty], kittyposition.x, kittyposition.y, kittyposition.w, kittyposition.h);

    text(meep.milk[index], 20, 20);
    index++;
    index = index % meep.milk.length;
}

function mousePressed() {
    if(mouseX > kittyposition.x && mouseX < kittyposition.x+kittyposition.h) {
        currentkitty++;
        currentkitty = currentkitty % allcats.length;
        kittyposition.x = random(width-kittyposition.w);
        kittyposition.y = random(height-kittyposition.h);
    }
}
