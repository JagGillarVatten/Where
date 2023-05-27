//Set the elements to hide and show
var hiddenContent = $(".hidden-content");

//Set the threshold for triggering the animation
var threshold = 0.5;

//Trigger the animation when the elements enter the viewport
$(window).on("scroll", function () {
  hiddenContent.each(function () {
    if (isScrolledIntoView($(this), threshold)) {
      $(this).addClass("visible");
    }
  });
});

//Function to check if element is in viewport
function isScrolledIntoView(elem, threshold) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return (
    elemBottom <= docViewBottom + $(window).height() * threshold &&
    elemTop >= docViewTop - $(window).height() * threshold
  );
}
