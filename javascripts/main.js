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
