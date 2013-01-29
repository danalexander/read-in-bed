# ReadInBed: read the web from in bed
===========

Javascript bookmarklet that rotates webpages 90º for easier reading while laying down. 


Create a new Bookmark with the following URL:

    javascript:(function()%7Bfunction%20wrapBody(id)%7Bif(document.getElementById(id)!==null)%7Breturn%20document.getElementById(id);%7Dvar%20div=document.createElement('div');div.id=id;while(document.body.firstChild)%7Bdiv.appendChild(document.body.firstChild);%7Ddocument.body.appendChild(div);return%20div;%7Dvar%20inner_wrapper=wrapBody('wrap_rotate_inner');var%20outer_wrapper=wrapBody('wrap_rotate');inner_wrapper.style.float='right';var%20width=wrap_rotate_inner.offsetWidth;var%20height=wrap_rotate_inner.offsetHeight;inner_wrapper.style.float='';inner_wrapper.style.webkitTransform='rotateZ(-90deg)';inner_wrapper.style.webkitTransformOriginX='100%25';inner_wrapper.style.webkitTransformOriginY='0%25';inner_wrapper.style.position='relative';inner_wrapper.style.left='-100%25';outer_wrapper.style.height=width+'px';outer_wrapper.style.overflowY='hidden';inner_wrapper.style.float='right';%7D)();

Tested in Google Chrome and Safari 6.

## TODO
* Add support for other browsers (Firefox)
* Rotate in other directions
* Load website-specific fixes from remote file (they're likely to change often, while the main bookmarklet is not), assuming no cross-domain issues.
* Remove float if possible