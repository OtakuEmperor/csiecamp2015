/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

function submitForm() {
  console.log($('input[name="genderS"]:checked').val());
  $a = $('input[name="genderS"]:checked').val();
  if ($a == "0") {
    window.location.href = 'https://docs.google.com/forms/d/1ts5otPv7cZH24HILZ1I49Q3_-QUGM-bdIcElKQkpHw4/viewform';
  }
  if ($a == "1") {
    window.location.href = 'https://docs.google.com/forms/d/1AcB9vlb5Nl7UwLfEUVmU7MKWTchij_sq71zrJ6AV_no/viewform';
  }
  if ($a == "2") {
    window.location.href = 'https://docs.google.com/forms/d/1QuCC-H5BqLqzPZ93pNwT1GY4AIzG2ST0moXGThjwlIE/viewform';
  }

}
