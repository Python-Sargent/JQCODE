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

var i = 0;
var width_now = 0

function animateProgress(percentage) {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("progressBar");
    var width = width_now;
    var id = setInterval(frame, 18);
    function frame() {
      if (width >= percentage) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}

function checkAnswer(quiz_option) {
  document.getElementById("next").style.display = "inline";
  var av = document.getElementById(quiz_option);
  document.getElementById("option1").disabled = true;
  document.getElementById("option2").disabled = true;
  document.getElementById("option3").disabled = true;
  document.getElementById("option4").disabled = true;
  if (av.checked == true) {
	//correct
  } else {
	//incorrect
  }
}

function setProgress(percentage) {
  document.getElementById("progressBar").style.width = percentage + "%";
  document.getElementById("progressBar").innerHTML = percentage + "%";
  width_now = percentage
}