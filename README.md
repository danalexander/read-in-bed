# ReadInBed: 
===========

Javascript bookmarklet that rotates webpages 90º for easier reading while laying down. Tested in latest stable Google Chrome and Safari.

Drag the link into your Bookmarks bar
<a href="javascript:(function(){function%20wrapBody(id){if(document.getElementById(id)!==null){return%20document.getElementById(id);}var%20div=document.createElement('div');div.id=id;while(document.body.firstChild){div.appendChild(document.body.firstChild);}document.body.appendChild(div);return%20div;}var%20inner_wrapper=wrapBody('wrap_rotate_inner');var%20outer_wrapper=wrapBody('wrap_rotate');inner_wrapper.style.float='right';var%20width=wrap_rotate_inner.offsetWidth;var%20height=wrap_rotate_inner.offsetHeight;inner_wrapper.style.float='';inner_wrapper.style.webkitTransform='rotateZ(-90deg)';inner_wrapper.style.webkitTransformOriginX='100%';inner_wrapper.style.webkitTransformOriginY='0%';inner_wrapper.style.position='relative';inner_wrapper.style.left='-100%';outer_wrapper.style.height=width+'px';outer_wrapper.style.overflowY='hidden';inner_wrapper.style.float='right';})();">ReadInBed Bookmarklet</a>

## TODO
* Remove jQuery dependence
* Add support for other browsers
* Load website-specific fixes from remote file (they're likely to change often, while the main bookmarklet is not), assuming no cross-domain issues.