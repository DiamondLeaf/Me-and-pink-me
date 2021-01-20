
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

Webcam.attach('#camera');

      
function KlienBottle()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/RvK7QdoEg/');
      
  function remember()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }
 function gotResult(error,results)
 {
 if(error){
     console.error(error);
 }else{
 document.getElementById("update").innerHTML= results[0].label
  }
 }