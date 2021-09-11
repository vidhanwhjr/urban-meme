Webcam.set({
    width: 350,
    height: 300,
    image_format:'png',
    png_quality: 90
});
camera = document.getElementById("Wecam");
console.log("LOAD")
Webcam.attach('#camera');

function clickpic(){
    Webcam.snap(function(data_uri){document.getElementById("IMG").innerHTML = '<img id ="moo" src = "'+data_uri+'"/>'});

}
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/GY9MefFFf/model.json', re);

function re(){
    console.log("MODEL_LOADED_");
}