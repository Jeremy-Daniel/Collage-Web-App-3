var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();
function save(){
    Recognition.start();
}
//Anonymous Function : a reaction to an event
Recognition.onresult = function (event){
    console.log(event);
    var content = event.results[0][0].transcript.toLowerCase();
    if (content == "selfie"){
        speak();    
    }
} 

function speak(){
    var synth = window.speechSynthesis;
    // to make the system speak out what you said.
    //var textSpeech = document.getElementById("textbox").innerHTML;
    var textSpeech = "taking your selfie in 5 seconds";
    var converter = new SpeechSynthesisUtterance(textSpeech);
    synth.speak(converter);
    Webcam.attach(camera);
    setTimeout(function(){ 
        img_id = "selfie1"
        TakeSelfie();
        var textSpeech = "taking your selfie in 10 seconds";
        var converter = new SpeechSynthesisUtterance(textSpeech);
        synth.speak(converter);
    },5000);
    setTimeout(function(){ 
        img_id = "selfie2"
        TakeSelfie();
        var textSpeech = "taking your selfie in 15 seconds";
        var converter = new SpeechSynthesisUtterance(textSpeech);
        synth.speak(converter);
    },10000);
    setTimeout(function(){ 
        img_id = "selfie3"
        TakeSelfie();
    },15000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90
});

var camera = document.getElementById("camera")

function TakeSelfie(){
    Webcam.snap(function(picture){
        if(img_id == "selfie1"){
            document.getElementById("image_1").innerHTML = "<img id = 'actual_picture1' src = '"+ picture +"'>";    
        }
        if(img_id == "selfie2"){
            document.getElementById("image_2").innerHTML = "<img id = 'actual_picture2' src = '"+ picture +"'>";    
        }
        if(img_id == "selfie3"){
            document.getElementById("image_3").innerHTML = "<img id = 'actual_picture3' src = '"+ picture +"'>";    
        }
    });
}

