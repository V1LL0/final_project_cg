/*
var clientTarget = new ZeroClipboard( $("#target-to-copy"), {
    moviePath: "./ZeroClipboard.swf",
    debug: false
} );

console.log("entro qui");

clientTarget.onload = function(clientTarget)
{
    
    //$('#flash-loaded').fadeIn();
	console.log("entro qui 2");
    clientTarget.oncomplete = function(clientTarget, args) {
        clientTarget.setText( args.text );
        console.log("sono qui: "+ args.text);
        //$('#target-to-copy-text').fadeIn();
    };
};

*/


/*


var clipone = new ZeroClipboard( document.getElementById("target-to-copy"), {
  moviePath: "./ZeroClipboard.swf"
} );

clipone.on( 'complete', function(client, args) {
	
	alert('one');
	alert('Clicked ' + this.id);
	
} );

*/


$(document).ready(function() {

  var clip = new ZeroClipboard($("#target-to-copy"));

  clip.on("ready", function() {
    debugstr("Flash movie loaded and ready.");

    this.on("aftercopy", function(event) {
      debugstr("Copied text to clipboard: " + event.data["text/plain"]);
    });
  });

  clip.on("error", function(event) {
    $(".demo-area").hide();
    debugstr('error[name="' + event.name + '"]: ' + event.message);
    ZeroClipboard.destroy();
  });


  // jquery stuff (optional)
  /*
  function debugstr(text) {
    $("#d_debug").append($("<p>").text(text));
  }

  $("#clear-test").on("click", function () {
    $("#fe_text").val("Copy me!");
    $("#testarea").val("");
  });
*/
});