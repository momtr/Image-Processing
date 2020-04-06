let img;
// number of different colors
const numOfCols = 4;
// mode
const mode = false;
// noise
const noise = 2;
let factor;

function preload() {
    img = loadImage('imgs/img2_1.jpg');
    factor = floor(250/numOfCols);
}

function setup() {
    createCanvas(img.width, img.height);
    // color mapping
    let mapping = [];
    for(let i = 0; i <= 250; i+=factor) {
        mapping.push({
           r: (mode ? (i * random(5)) : random(255)),
           g: (mode ? (i * random(5)) : random(255)),
           b: (mode ? (i * random(5)) : random(255))
        });
    }
    /*
    mapping = [
        {
            r: 0,
            g: 0,
            b: 0
        }, 
        {
            r: 255,
            g: 255,
            b: 255
        }
    ];
    numOfCols = 2;
    */
    img.loadPixels();
    let pixels = img.pixels;
    for(let i = 0; i < pixels.length; i+=4) {
        let avg = floor(map((((pixels[i] + pixels[i+1] + pixels[i+2]) / 3) + random(-noise, noise)), 0 - noise, 255 + noise, 0, 250));
        let index = floor(avg/factor);
        let r = mapping[index].r;
        let g = mapping[index].g;
        let b = mapping[index].b;
        img.pixels[i] = r;
        img.pixels[i+1] = g;
        img.pixels[i+2] = b;
        img.pixels[i+3] = 255;
    }
    // display the image
    img.updatePixels();
    image(img, 0, 0);
}