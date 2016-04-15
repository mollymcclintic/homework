//Set up a variable [0] that is an array of all the names of the images 
var images = ["image_1.jpg", "image_2.jpg", "image_3.jpg", "image_4.jpg", "image_5.jpg", "image_6.jpg"]
var currentPosition = 0;
//Listen for the click on the "Next" button
  //Change the src of #image-to-vote-on to correct image
  //add one to the currentPosition
$("#next").on('click', function(){
  currentPosition += 1;
  $("#image-to-vote-on").attr('src', './images/' + images[currentPosition] )
  supply();
});

// "Previous" Button
$("#prev").on('click', function(){
  currentPosition -= 1;
  $("#image-to-vote-on").attr('src', './images/' + images[currentPosition] )
  supply();
});

function supply(){
  if (currentPosition === 0){
    $("#prev").attr("disabled", "disabled");
  } else if (currentPosition === images.length - 1){
    $("#next").attr("disabled", "disabled");
  } else {
    $("#next").removeAttr('disabled');
    $("#prev").removeAttr('disabled');
  }
}
//If the source of the image is "image6" then disable the "Next"
//If the source of the image is "image1" then disable the "Previous"
//If the source of the image is anything else, enable both buttons

//Listen for the click on the "Previous" button

//Update the source with the previous image in the array 
