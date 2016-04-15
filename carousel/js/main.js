//Set up a variable [0] that is an array of all the names of the images 
//Set up a variable [0] that is an array of all the number of votes 
var votes = [0,0,0,0,0,0]
var images = ["image_1.jpg", "image_2.jpg", "image_3.jpg", "image_4.jpg", "image_5.jpg", "image_6.jpg"]
var currentPosition = 0;
//Listen for the click on the "Next" button
  //Change the src of #image-to-vote-on to correct image
  //add one to the currentPosition
$("#next").on('click', function(){
  currentPosition += 1;
  $("#image-to-vote-on").attr('src', './images/' + images[currentPosition] )
  supply();
   thumb();
});

// "Previous" Button
$("#prev").on('click', function(){
  currentPosition -= 1;
  $("#image-to-vote-on").attr('src', './images/' + images[currentPosition] )
  supply();
   thumb();
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

//Listen for the click of the "upvote" button
$('#upvote').on('click', function(){
  votes[currentPosition] += 1;
  thumb();
});
 
//Listen for the click of the "downvote" button
$('#downvote').on('click', function(){
  votes[currentPosition] -= 1;
   thumb();
});
  //If the user clicks the thumbs up, add one vote
  //Add one to the currentPosition

//If the user clicks the thumbs down, remove one vote
  //Subtract one from the currentPosition
function thumb(){
  $('#votes').html(votes[currentPosition])
}


