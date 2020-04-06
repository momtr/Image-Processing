let img;
let noise;
let constPixels;

function preload() {
    img = loadImage('imgs/img2.jpg');
}

function setup() {
    createCanvas(img.width, img.height);
    noise = createSlider(0,255,0);
    constPixels = [];
    img.loadPixels();
    for(let i of img.pixels) { 
        constPixels.push(i);
    }
}

function draw() {
    // black and white filter
    img.loadPixels();
    let pixels = img.pixels;
    // red, green, blue, alpha
    for(let i = 0; i < pixels.length; i+=4) {
        let avg = ((constPixels[i] + constPixels[i+1] + constPixels[i+2]) / 3) + random(-noise.value(), noise.value());
        pixels[i] = avg;
        pixels[i+1] = avg;
        pixels[i+2] = avg;
    }
    img.updatePixels();
    image(img, 0, 0);
}