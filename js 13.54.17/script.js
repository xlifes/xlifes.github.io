$(document).ready(
	function() {

		var tags = $("a");

/*		//Changes links text to "Default Text"
		tags.text("default text");

		$("a").css({
			color: "blue"
		});

		//Changing Element Text
		$("a").text("Link Text");

		//Hidding our Links
		$("a").hide();*/

		//Set up event handle
		$(".page-scroll").click(function(event){
			
			//$(this) refers to the link that was clicked
			var clickedLink = $(this);

			//let's bold the link we clicked
			clickedLink.css("font-weight", "bold");
console.log("target");
			var target = clickedLink.attr("href"); //#section
			
			//console.log(target);

			var scrollTo = $(target); //<section>

			//Set some style to show we've gotten the right target
			scrollTo.css("background-color", "black");

			var top = scrollTo.offset().top;
			console.log(top);

			//Call Scroll Animation
			$("html, body").stop().animate(
			{
				'scrollTop': top
				}, 1000, 'swing');
				

			//var scrollTo = $(target); //<section>

			//target refers to the #id of our link
			//target = clickedLink.target;

			//Now we want to scroll the page to the top
			//$("html").scrollTop(scrollTo.offset());

		});


});