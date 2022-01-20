function startClasification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.sounClassifier('https://teachablemachine.withgoogle.com/models/ar66S-sfc/model.json', modelReady)
}
function modelReady() {
   classifier.classify(gotResults) 
}