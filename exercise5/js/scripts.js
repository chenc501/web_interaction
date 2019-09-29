var word= document.getElementById("word");
	square = document.getElementById("square");
    clickMe = document.getElementById('clickMe'); 

function fontFunction(){
	var font = document. getElementById("myFonts").value;
	word.style.fontFamily = font;
}

//bold
function boldFunction(){
	var checkBox = document.getElementById("boldCheck");
	// console.log( checkBox.checked )
	if ( checkBox.checked == true) {
		//do something if ture
		word.style.fontWeight= 'bold';
	}
	else{
		// if false do this
		word.style.fontWeight= 'inherit';

	}
}

//italic
function italicFunction(){
	var checkBox = document.getElementById("italicCheck");
	// console.log( checkBox.checked )
	if ( checkBox.checked == true) {
		//do something if ture
		word.style.fontStyle= 'italic';
	}
	else{
		// if false do this
		word.style.fontStyle= 'inherit';

	}
}


function greenFunction(){
	var checkBox = document.getElementById("greenCheck");
	// console.log( checkBox.checked )
	if ( checkBox.checked == true) {
		//do something if ture
		color.style.backgroundColor= 'green';
	}
	else{
		// if false do this
		color.style.backgroundColor= 'blue';

	}
}

function sizeFunction(){
	var checkSize= document.getElementById("size").value;
	word.style.fontSize = checkSize + "px";

}


function doBk () {

  square.style.backgroundColor = "#fa4";

}

function resetBk() {
    square.style.backgroundColor = "#6b858a";
 }

clickMe.onclick = doBk;

 function stilo() {
      document.getElementById('word').style.color = 'black';
    }
    function resetStyle() {
      document.getElementById('word').style.color = '#f1f0f0';
    }

	function timeFunction(){
		document.getElementById('time').innerHTML = Date();

	}
