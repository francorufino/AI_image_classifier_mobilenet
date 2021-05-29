// Your code will go here



// Open up your console - if everything loaded properly you should see the version number 
// corresponding to the latest version of ml5 printed to the console and in the p5.js canvas.
console.log('ml5 version:', ml5.version);

let mobilenet;

function modelReady() {
    console.log('Model is ready!');
    mobilenet.predict(experimento, gotResults);
}

function imageReady() {
    image(experimento, 0, 0, 300, 300)
}

function setup() {
    createCanvas(400, 400);
    textSize(width / 3);
    textAlign(CENTER, CENTER);
    mobilenet = ml5.imageClassifier('MobileNet', modelReady);
    experimento = createImg('../images/tree.jpeg', imageReady);
    experimento.hide();
    image(experimento)
}


function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        let label = results[0].label;
        let confidence = results[0].confidence;
        let label1 = results[1].label;
        let confidence1 = results[1].confidence;
        let label2 = results[2].label;
        let confidence2 = results[2].confidence;
        fill(0);
        textSize(64);
        text(label, 10, height - 300);
        createP(label);
        createP(confidence);
        text(label1, 10, height - 200);
        createP(label1);
        createP(confidence1);
        text(label2, 10, height - 100);
        createP(label2);
        createP(confidence2);
        //console.log(results);

    }
}



function draw() {


}