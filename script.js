var plusmin = 1;

$(document).ready(function() {
  // when click on the element with id="idd"
  var stl = localStorage.getItem("color-mode");
  if (stl != "styles.css" && stl != "styles2.css") {
	localStorage.setItem("color-mode", "styles.css");
  }
  $('#stl[rel=stylesheet]').attr('href', stl);

  $('#idd').click(function(){
    plusmin *= -1;        // change the polarity of "plusmin" var
    stl = plusmin>0 ? 'styles.css' : 'styles2.css';     // sets the css file, according to plusmin

    // change the css file of the tag with id="stl" and rel="stylesheet"
    $('#stl[rel=stylesheet]').attr('href', stl);
	localStorage.setItem("color-mode", stl);
  });
});

//&lt;JQCode examples="and"&gt;Tutorials&lt;/JQCode&gt;