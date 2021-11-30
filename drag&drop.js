//$(document).ready(function() {
    var handleDrag = function(e) {
        //kill any default behavior
        e.stopPropagation();
        e.preventDefault();
    };
    var handleDrop = function(e) {
        //kill any default behavior
        e.stopPropagation();
        e.preventDefault();
        //console.log(e);
        //get x and y coordinates of the dropped item
        x = e.clientX;
        y = e.clientY;
        //drops are treated as multiple files. Only dealing with single files right now, so assume its the first object you're interested in
        var file = e.dataTransfer.files[0];
        //don't try to mess with non-image files
        if (file.type.match('image.*')) {
            //then we have an image,

            //we have a file handle, need to read it with file reader!
            var reader = new FileReader();

            // Closure to capture the file information.
            reader.onload = (function(theFile) {
                //get the data uri
                var dataURI = theFile.target.result;
                var divNode = document.createElement('div');
                var newRandomIdDIv = "newdiv" + Math.random(); //create unique id for div
                divNode.setAttribute(`Id`, `${newRandomIdDIv}`) //set an attribute of id unique in the div
                divNode.setAttribute('style','width:100%;text-align:center;border:1px dotted grey;padding:10px')

                //make a new image element with the dataURI as the source
                var img = document.createElement("img");
                img.setAttribute('style','width:auto;height:200px')
                img.src = dataURI;
                divNode.appendChild(img);

                //Insert the image at the carat

                // Try the standards-based way first. This works in FF
                if (document.caretPositionFromPoint) {
                    var pos = document.caretPositionFromPoint(x, y);
                    range = document.createRange();
                    range.setStart(pos.offsetNode, pos.offset);
                    range.collapse();
                    range.insertNode(divNode);
                    range.insertNode(img);
                    divNode.appendChild(img);

                }
                // Next, the WebKit way. This works in Chrome.
                else if (document.caretRangeFromPoint) {
                    range = document.caretRangeFromPoint(x, y);
                    range.insertNode(divNode);
                    range.insertNode(img);
                    divNode.appendChild(img);

                }
                else
                {
                    //not supporting IE right now.
                    console.log('could not find carat');
                }


            });
            //this reads in the file, and the onload event triggers, which adds the image to the div at the carat
            reader.readAsDataURL(file);
        }
    };

    var result = document.getElementById('result');
    result.addEventListener('dragover', handleDrag, false);
    result.addEventListener('drop', handleDrop, false);
//});