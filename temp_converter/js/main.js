//Formula to convert fahrenheit to celsius: (fahrenheit - 32) / 1.8;
//Formula to convert celsius to fahrenheit: 1.8 * celsius + 32;

//When the user clicks the #fahrenheit_to_celsius button 
$('#fahrenheit_to_celsius').on('click', function (){
  //Get the value from #temperature and store in variable fahrenheit
  var fahrenheit = $('#temperature').val();
  //Convert that value to a number
  fahrenheit = parseFloat(fahrenheit);
  //Convert to celcius and store in variable celcius
  var celcius = ((fahrenheit - 32) / 1.8); 
  //Display in #result
  $('#result').html(fahrenheit + " Fahrenheit is " + celcius + " Celsius.");
});