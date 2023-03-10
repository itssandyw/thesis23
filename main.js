$(document).ready(function(){

	var vid1 = document.getElementById("vid1");
	vid1.play();
   
   	$("#section6 h1").hide();
	$("#section6 h1").click(function() {
		$("#section6 h2").show();
	});

	$(document).on("scroll", function() {
		var pageTop = $(document).scrollTop();
  		var pageBottom = pageTop + $(window).height();
  		var tags = $(".tag");

  		for (var i = 0; i < tags.length; i++) {
    	var tag = tags[i];

    	if ($(tag).position().top < pageBottom) {
      	$(tag).addClass("visible");
    	} else {
      	$(tag).removeClass("visible");
    }


  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

