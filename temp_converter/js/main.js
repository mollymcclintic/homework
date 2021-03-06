//Formula to convert fahrenheit to celsius: (fahrenheit - 32) / 1.8;
//Formula to convert celsius to fahrenheit: 1.8 * celsius + 32;

//When the user clicks the #fahrenheit_to_celsius button 
$('#fahrenheit_to_celsius').on('click', function (){
  //Get the value from #temperature and store in variable fahrenheit
  var fahrenheit = $('#temperature').val();
  //Convert that value to a number
  fahrenheit = parseFloat(fahrenheit).toFixed(2);
  //Convert to celsius and store in variable celsius
  var celsius = ((fahrenheit - 32) / 1.8); 
  //Display in #result
  $('#result').html(fahrenheit + " Fahrenheit is " + celsius.toFixed(2) + " Celsius.");
  // Clear the value of #temperature
  $('#temperature').val('');

  if (fahrenheit < 32) {
    $('body').addClass('chilly');
    $('body').removeClass('balmy');
  } else {
    if (fahrenheit > 32) {
       $('body').addClass('balmy');
   }}
 });


//When the user clicks the #celsius_to_fahrenheit button 
$('#celsius_to_fahrenheit').on('click', function (){
   //Get the value from #temperature and store in variable celsius
   var celsius = $('#temperature').val();
   //Convert that value to a number
   celsius = parseFloat(celsius).toFixed(2);
   //Convert to fahrenheit and store in variable fahrenheit
   var fahrenheit = (1.8 * celsius + 32);
   //Display in #result
   $('#result').html(celsius + " Celsius is " + fahrenheit.toFixed(2)+ " Fahrenheit.");
   // Clear the value of #temperature
  $('#temperature').val('');

  if (fahrenheit < 32) {
    $('body').addClass('chilly');
    $('body').removeClass('balmy');
  } else {
    if (fahrenheit > 32) {
       $('body').addClass('balmy');
   }}
 });

// function hotOrNot (temp) {
//   if (temp > 75) {
//     $('.hot').fadeIn(350);
//   } else {
//     $('.not-hot').fadeIn(350);
//   }
// }

// hotOrNot(30);