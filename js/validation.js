function validateData() {
    var yes = document.getElementById("yes").checked;
	var no = document.getElementById("no").checked;
    var lw = document.getElementById("lw").checked;
    var gm = document.getElementById("gm").checked;
    var mh = document.getElementById("mh").checked;
    var p = document.getElementById("p").checked;
    var lc = document.getElementById("lc").checked;
    var v = document.getElementById("v").checked;
    
	if (yes == true && mh == true && v == true) {
		window.open("menu/vegetarian.html");
	} else if (yes == true && lw == true && v == true) {
		window.open("menu/vegetarian.html");
    } else if (yes == true && lw == true && p == true) {
		window.open("menu/vegetarian.html");
    } else if (yes == true && mh == true && p == true) {
		window.open("menu/vegetarian.html");
    } else if (yes == true && gm == true && p == true) {
		window.open("menu/vegetarian.html");
    } else if (yes == true && gm == true && lc == true) {
		window.open("menu/vegetarian.html");
    } else if (yes == true && gm == true && v == true) {
		window.open("menu/vegetarian.html");
    } else if (yes == true && lw == true && lc == true) {
		window.open("menu/vegetarian.html");
	} else if (yes == true && mh == true && lc == true) {
		window.open("menu/vegetarian.html");
    } else if (no == true && gm == true && p == true) {
		window.open("menu/protein.html");
    } else if (no == true && mh == true && p == true) {
        window.open("menu/protein.html");   
    } else if (no == true && gm == true && v == true) {
        window.open("menu/protein.html");
    } else if (no == true && gm == true && lc == true) {
        window.open("menu/protein.html");
    } else if (yes == false && no == false && lw == false && gm == false && mh == false && mh == false && p == false && lc == false && v == false) {
        alert("Please answer all 3 questions")
    } else {
        window.open("menu/lowcalorie.html");
    }
}