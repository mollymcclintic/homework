// 1.	Slide the header element up when it is clicked on.
$('header').on('click', function(){
    $('header').slideUp();
}); 
// 2.	Remove the purplebox class from everything.
$('.purplebox').removeClass('purplebox')
// 3.	Hide all of the div’s in #row4
$('#row4').hide('divs')
// 4.	Add a paragraph that says “I have been added” to all boxes with class “add-para” (Hint: you'll need to look up the append() method)
$('.add-para').click(function(){
  $("p").append("I have been added");
})
// 5.	Add a class in your css and add it to all items with the class .box
$('.box').addClass('dope');
// 6.	Show the footer when the anchor in #box2 is clicked
$('#box2 a').click(function(){
    $('footer').show(300);
})
// 7.	Change the styling of the span inside of #box3 by adding a class (and style that class in CSS)
$('#box3 span').addClass('awesome');
$('.awesome').css('color', '#B72B42');
// 8.	Add a unique class to your CSS and add it to the articles in #row1
$('#row1').addClass('unique');
// 9.	Change the background color of all the articles
$('article').css('backgroundColor','#6Ab56F');
// 10.	Change the font color of all the articles in row 2

// 11.	Select any spans that are siblings of an h4 (using the .siblings() method) and hide them.

// 12.	Clicking on #box7 should hide the span within the h2

// 13.	Add an h3 that says "Hello there!" to the beginning of #box12 (Hint: you'll need to look up the prepend() method)

// 14.	SlideUp all the h1s on the page

// 15. Add the selected class [already in the CSS] to the divs in #row4

// 16.	Clicking reset should remove the selected class from everything and fade in the header element, the footer, and all elements with the class .box
