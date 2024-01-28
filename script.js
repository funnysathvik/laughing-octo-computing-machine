Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function take(){
    Webcam.snapshot(function(data_uri){
        document.getElementById("results").innerHTML = '<img id="helloa" src="'+data_uri+'"/>';
    });
}
console.log("ml5.version - ", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wMo5zDMwA/model.json", modelLoaded);

function modelLoaded(){
    console.log("model is loaded");
}

function classify(){
    classifier.classify(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        if(results[0].label == "thuup"){
            document.getElementById("pre1").innerHTML = "thumbs up";
        }
        if(results[0].label == "thudown"){
            document.getElementById("pre1").innerHTML = "thumbs down";
        }
        if(results[0].label == "spiderman"){
            document.getElementById("pre1").innerHTML = "spiderman symbol";
        }
        if(results[0].label == "bathroom"){
            document.getElementById("pre1").innerHTML = "bathroom";
        }
        if(results[0].label == "water"){
            document.getElementById("pre1").innerHTML = "water";
        }
        if(results[0].label == "pencil"){
            document.getElementById("pre1").innerHTML = "pencil";
        }
        if(results[0].label == "okay"){
            document.getElementById("pre1").innerHTML = "okay symbol";
        }


    }}