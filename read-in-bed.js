function wrapBody(id) {
	// If it already exists, just return it (ie. double clicking the bookmarklet)
	if(document.getElementById(id) !== null) { return document.getElementById(id); }
	
	var div = document.createElement("div");
	div.id = id;
	
	// Move the body's children into this wrapper
	while (document.body.firstChild) { div.appendChild(document.body.firstChild); }
	
	// Append the wrapper to the body
	document.body.appendChild(div);
	return div;
}

// Create the inner wrapper (this is the one that does the rotating)
var inner_wrapper = wrapBody('wrap_rotate_inner');

// Create the outer wrapper, AFTER creating the inner wrapper (this contains the rotated div, and clips the whitespace)
var outer_wrapper = wrapBody('wrap_rotate');

// Get the width and height of the inner wrapper
/* NOTE: We temporarily set a float so we get only the width of the elements, excluding all margins and offsets */
inner_wrapper.style.float = "right";
var width  = wrap_rotate_inner.offsetWidth; 	/* $('#wrap_rotate_inner').width(); */
var height = wrap_rotate_inner.offsetHeight; 	/* $('#wrap_rotate_inner').height(); */
inner_wrapper.style.float = "";

// Rotate the inner wrapper
inner_wrapper.style.webkitTransform = "rotateZ(-90deg)";
inner_wrapper.style.webkitTransformOriginX = "100%";
inner_wrapper.style.webkitTransformOriginY = "0%";
inner_wrapper.style.position = "relative";
inner_wrapper.style.left = "-100%";

// Set the width and height of the outer wrapper
// (height of the outer div = width of the inner div)
outer_wrapper.style.height = width + "px";
outer_wrapper.style.overflowY = "hidden";

// Lastly, we actually do want the inner element to float to the right
inner_wrapper.style.float = "right";