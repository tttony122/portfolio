var js=new Array("jquery.extend.js",
				 "jquery.validate.js",
				 "jquery.form.js",		
				 "viewportchecker.js",
				 "jquery.scrollTo-min.js"
			    );

var len= js.length;
for (var i=0; i<len; i++) {
  document.write("<script src='"+basePath+"rs/js/" +js[i]+ "'></script>");
}

document.documentElement.style.overflowX = 'hidden';
