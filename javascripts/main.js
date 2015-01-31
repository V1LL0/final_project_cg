var clientTarget = new ZeroClipboard( $("#target-to-copy"), {
	console.log("entro qui");
    moviePath: "./ZeroClipboard.swf",
    debug: false
} );

clientTarget.on( "load", function(clientTarget)
{
    
    //$('#flash-loaded').fadeIn();

    clientTarget.on( "complete", function(clientTarget, args) {
        clientTarget.setText( args.text );
        console.log("sono qui: "+args.text);
        //$('#target-to-copy-text').fadeIn();
    } );
} );