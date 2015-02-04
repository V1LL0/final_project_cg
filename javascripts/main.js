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

  var clip1 = new ZeroClipboard($("#target-to-copy-lc17"));

  clip1.on("ready", function() {
    console.log("Flash movie loaded and ready.");

    this.on("aftercopy", function(event) {
    });
  });

  clip1.on("error", function(event) {
    $(".demo-area").hide();
    console.log('error[name="' + event.name + '"]: ' + event.message);
    ZeroClipboard.destroy();
  });


  var clip2 = new ZeroClipboard($("#target-to-copy-lc11"));

  clip2.on("ready", function() {
    console.log("Flash movie loaded and ready.");

    this.on("aftercopy", function(event) {
    });
  });

  clip2.on("error", function(event) {
    $(".demo-area").hide();
    console.log('error[name="' + event.name + '"]: ' + event.message);
    ZeroClipboard.destroy();
  });



  var clip3 = new ZeroClipboard($("#target-to-copy-lc7"));

  clip3.on("ready", function() {
    console.log("Flash movie loaded and ready.");

    this.on("aftercopy", function(event) {
    });
  });

  clip3.on("error", function(event) {
    $(".demo-area").hide();
    console.log('error[name="' + event.name + '"]: ' + event.message);
    ZeroClipboard.destroy();
  });


    var clip4 = new ZeroClipboard($("#target-to-copy-voiture-minimum"));

  clip4.on("ready", function() {
    console.log("Flash movie loaded and ready.");

    this.on("aftercopy", function(event) {
    });
  });

  clip4.on("error", function(event) {
    $(".demo-area").hide();
    console.log('error[name="' + event.name + '"]: ' + event.message);
    ZeroClipboard.destroy();
  });

    var clip5 = new ZeroClipboard($("#target-to-copy-all-in-a-house"));

  clip5.on("ready", function() {
    console.log("Flash movie loaded and ready.");

    this.on("aftercopy", function(event) {
    });
  });

  clip5.on("error", function(event) {
    $(".demo-area").hide();
    console.log('error[name="' + event.name + '"]: ' + event.message);
    ZeroClipboard.destroy();
  });


});