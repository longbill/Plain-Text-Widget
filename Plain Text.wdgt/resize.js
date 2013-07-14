// tracks where the last mouse position was throughout the drag
var resizeInset;
// the right offset of the grow thumb vs. the edge of widget window 
var rightEdgeOffset;
// the bottom offset of the grow thumb vs. the edge of widget window 
var bottomEdgeOffset;
// called when the mouse first clicks upon the resize 


function mouseDown(event) 
{
	// begin tracking the move 
	document.addEventListener("mousemove", mouseMove, true);
	// and notify when the drag ends 
	document.addEventListener("mouseup", mouseUp, true);
	// resizeInset tracks where the actual mouse click happened vs. the right and
	// bottom edges of the widget
	resizeInset = 
	{
		x: (window.innerWidth - event.x),
		y: (window.innerHeight - event.y)
	};
	event.stopPropagation();
	event.preventDefault();
}
// called as the mouse button is down and the mouse moves 


function mouseMove(event) 
{
	// x and y track where bottom-right corner of the widget should be, with relation 
	// to the event.
	var x = event.x + resizeInset.x;
	var y = event.y + resizeInset.y;
	// an arbitrary minimum width 
	if (x < 100) x = 100;
	
	if (y < 100) y = 100;
	
	if (x > 1000) x = 1000;
	
	if (y > 700) y = 700;
	// resize background 
	//document.getElementById("front").style.width = x;
	//document.getElementById("front").style.height = y;
	// resize the widget 
	window.resizeTo(x, y);
	widget.setPreferenceForKey(x,"plaintext_x");
	widget.setPreferenceForKey(y,"plaintext_y");

	event.stopPropagation();
	event.preventDefault();
}
// called after the mouse button is released 


function mouseUp(event) 
{
	// stop tracking the move 
	document.removeEventListener("mousemove", mouseMove, true);
	// and notify if the mouse goes down again 
	document.removeEventListener("mouseup", mouseUp, true);
	event.stopPropagation();
	event.preventDefault();
}
